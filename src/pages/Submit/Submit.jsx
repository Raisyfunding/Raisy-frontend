import React, { useEffect, useState, forwardRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useDropzone } from 'react-dropzone';
import { Screen, SpacerSmall } from '../../styles/globalStyles';
import { ethers } from 'ethers';
import {
  Flex,
  HStack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  Radio,
  RadioGroup,
  Stack,
  Link,
  useToast,
  Box,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import './components/datepicker.scss';

import { useApi } from '../../api';
import { useWeb3React } from '@web3-react/core';
import { getSigner } from './../../contracts';
import axios from 'axios';
import { useCampaignsContract } from './../../contracts/raisyCampaigns';
import { AVERAGE_BLOCK_TIME } from './../../constants/network';
import { ChainId } from '@sushiswap/sdk';
import { formatError } from '../../utils';

function Submit() {
  const [title, setTitle] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [staggered, setStaggered] = React.useState(false);
  const [adding, setAdding] = React.useState(false);
  const [description, setDescription] = React.useState(0);
  const [pctMilestone, setPctMilestone] = useState(['20', '']);
  const [titleError, setTitleError] = useState(null);
  const [amountError, setAmountError] = useState(null);
  const [milestoneError, setMilestoneError] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [date, setDate] = useState(new Date());
  const [nbMilestones, setNbMilestones] = useState(2);
  const handleChangeTitle = (event) => setTitle(event.target.value);
  const handleChangeAmount = (event) => setAmount(event.target.value);

  const { apiUrl, getNonce } = useApi();
  const { account } = useWeb3React();
  const { authToken } = useSelector((state) => state.ConnectWallet);
  const { addCampaign, addCampaignReleaseSchedule } = useCampaignsContract();

  const currentColor = useColorModeValue('var(--black)', 'var(--white)');
  const currentBackground = useColorModeValue(
    'rgba(255,255,255,1)',
    'rgba(21,21,21,.64)'
  );
  const currentBorder = useColorModeValue(
    'rgba(235, 235, 235, 1)',
    'rgba(21,21,21,.64)'
  );

  const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

  const toast = useToast();

  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  };

  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
  };

  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  };

  const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
  };

  const validateTitle = () => {
    if (title.length === 0) {
      setTitleError("This field can't be blank");
    } else {
      setTitleError(null);
    }
  };

  const validAmount = (amount) => /^\d+$/.test(amount);

  const validateAmount = () => {
    if (amount.length === 0) {
      setAmountError("This field can't be blank");
    } else if (validAmount(amount)) {
      setAmountError(null);
    } else {
      setAmountError('Invalid amount.');
    }
  };

  const validateMilestone = () => {
    if (pctMilestone.some((val) => val <= 0)) {
      setMilestoneError('No percent can be null');
    } else if (
      pctMilestone.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0) !==
      100
    ) {
      setMilestoneError('Sum must be 100%');
    } else {
      setMilestoneError(null);
    }
  };

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img alt="" src={file.preview} style={img} />
      </div>
    </div>
  ));

  const handleAddMilestone = () => {
    if (pctMilestone.length === 5) return;
    setPctMilestone([...pctMilestone, '']);
  };

  const handleRemoveMilestone = () => {
    if (pctMilestone.length === 2) return;

    const list = [...pctMilestone];
    list.pop();
    setPctMilestone(list);
  };

  const isValid = (() => {
    if (!files) return false;
    if (titleError) return false;
    if (amountError) return false;
    if (date <= new Date()) return false;
    return true;
  })();

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Input
      borderRadius={'50px'}
      width={{
        base: '200px',
        sm: '400px',
        md: '500px',
        lg: '500px',
        xl: '600px',
      }}
      backgroundColor={useColorModeValue(
        'rgba(255,255,255,1)',
        'rgba(234,234,234,.6)'
      )}
      borderColor={useColorModeValue(
        'rgba(235, 235, 235, 1)',
        'rgba(230,230,230,1)'
      )}
      _focus={{ outline: 'none !important' }}
      border={'1px solid'}
      height={'60px'}
      placeholder="Pick a Date"
      _placeholder={{ color: 'rgba(150,150,150,1)', fontWeight: '550' }}
      color="rgba(150,150,150,1)"
      fontWeight="550"
      textAlign={'center'}
      isRequired={'true'}
      onClick={onClick}
      ref={ref}
      readOnly={'true'}
      value={value}
    />
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));

    if (files.length > 0) {
      const file = files.find((f) => f);

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setCoverImage(reader.result);
        console.log({
          src: file.preview,
          data: reader.result,
        });
      };
    }
  }, [files]);

  const clipImage = (image, clipX, clipY, clipWidth, clipHeight, cb) => {
    const CANVAS_WIDTH = 700;
    const CANVAS_HEIGHT = 350;
    const canvas = document.createElement('canvas');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(
      image,
      clipX,
      clipY,
      clipWidth,
      clipHeight,
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );
    cb(canvas.toDataURL());
  };

  const handleAddCampaign = async () => {
    if (adding) return;
    setAdding(true);

    try {
      const img = new Image();
      img.onload = function () {
        const w = this.width;
        const h = this.height;
        const size = Math.min(w, h);
        const x = (w - size) / 2;
        const y = (h - size) / 2;
        clipImage(img, x, y, size, size, async (imgData) => {
          try {
            const { data: nonce } = await getNonce(account, authToken);

            let signature;
            let signatureAddress;

            try {
              const signer = await getSigner();
              const msg = `Approve Signature on Raisy with nonce ${nonce}`;

              signature = await signer.signMessage(msg);
              signatureAddress = ethers.utils.verifyMessage(msg, signature);
            } catch (error) {
              toast({
                title: 'Error during message signature',
                description: formatError(error),
                status: 'error',
                duration: 9000,
                isClosable: true,
              });
              setAdding(false);
              return;
            }

            const formData = new FormData();
            formData.append('title', title);
            formData.append('imgData', imgData);

            const result = await axios({
              method: 'post',
              url: `${apiUrl}/ipfs/uploadCampaignImage2Server`,
              data: formData,
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${authToken}`,
              },
            });

            const coverImageHash = result.data.data;

            // Triggers on-chain campaign creation
            const secondsDuration =
              (date.getTime() - new Date().getTime()) / 1000;
            const durationInBlocks =
              secondsDuration /
              AVERAGE_BLOCK_TIME[isMainnet ? ChainId.MATIC : ChainId.RINKEBY];

            const pctMilestoneArray = pctMilestone.map(
              (pct) => parseInt(pct) * 100
            );

            let _id;
            let tx;

            if (staggered) {
              tx = await addCampaignReleaseSchedule(
                Math.floor(durationInBlocks),
                ethers.utils.parseEther(amount),
                pctMilestoneArray.length,
                pctMilestoneArray,
                account
              );
            } else {
              tx = await addCampaign(
                Math.floor(durationInBlocks),
                ethers.utils.parseEther(amount),
                account
              );
            }

            const res = await tx.wait();

            let abi = [
              'event CampaignCreated(uint256 id, address indexed creator, uint256 duration, uint256 startBlock, uint256 amountToRaise, bool hasReleaseSchedule)',
            ];
            let iface = new ethers.utils.Interface(abi);
            const logId = staggered ? 1 : 0;
            let log = iface.parseLog(res.logs[logId]); // here you can add your own logic to find the correct log
            const { id } = log.args;

            _id = id;

            let data = {
              campaignId: Number(_id),
              title,
              description,
              coverImageHash,
              amountToRaise: amount,
              endAt: date,
              signature,
              signatureAddress,
            };

            if (staggered) {
              const _pctMilestoneArray = pctMilestone.map((pct) =>
                parseInt(pct)
              );
              const _nbMilestones = _pctMilestoneArray.length;
              data = {
                ...data,
                nbMilestones: _nbMilestones,
                pctReleasePerMilestone: _pctMilestoneArray,
              };
            }

            await axios({
              method: 'post',
              url: `${apiUrl}/campaign/campaigndetails`,
              data: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
              },
            });

            toast({
              title: 'Campaign created!',
              description: `Your campaign has successfully been created. Just wait for people to donate now 💲`,
              status: 'success',
              duration: 9000,
              isClosable: true,
            });

            setAdding(false);
          } catch (error) {
            toast({
              title: 'Error during campaign creation',
              description: formatError(error),
              status: 'error',
              duration: 9000,
              isClosable: true,
            });
            setAdding(false);
          }
        });
      };

      img.src = coverImage;
    } catch (err) {
      toast({
        title: 'Error during campaign creation on-chain',
        description: formatError(err),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setAdding(false);
    }
  };

  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue('var(--white)', 'var(--black)'),
        backgroundImage: '/images/dotwhite.png',
      }}
    >
      <Box
        backgroundImage="/images/test.png"
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
      >
        <Text
          fontSize={{ base: '5xl', sm: '7xl', md: '7xl', lg: '7xl', xl: '8xl' }}
          style={{
            background:
              '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
            webkitBackgroundClip: 'text',
            webkitTextFillColor: 'transparent',
          }}
          fontWeight={'900'}
          width={'95vw'}
          marginLeft={'auto'}
        >
          SUBMIT A CAMPAIGN.
        </Text>
        <Text
          fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}
          fontWeight={'400'}
          paddingTop={'30px'}
          paddingBottom={'30px'}
          width={'95vw'}
          marginLeft={'auto'}
        >
          Start your campaign by filling out this form.
          <br />
          It will take you a few minutes.
        </Text>
        <Flex
          flexDirection={'column'}
          width={'95vw'}
          marginLeft={'auto'}
          paddingBottom={'50px'}
        >
          <Text
            style={{
              background:
                '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
              webkitBackgroundClip: 'text',
              webkitTextFillColor: 'transparent',
            }}
            fontWeight={'900'}
            marginBottom={'5px'}
            fontSize={'2em'}
          >
            Title of your campaign
          </Text>
          <Text
            color={useColorModeValue('var(--black)', 'var(--white)')}
            marginBottom={'10px'}
            fontStyle={'italic'}
            width={{
              base: '200px',
              sm: '400px',
              md: '500px',
              lg: '500px',
              xl: '600px',
            }}
          >
            Be concise and to the point
          </Text>
          <Input
            borderRadius={'50px'}
            width={{
              base: '200px',
              sm: '400px',
              md: '500px',
              lg: '500px',
              xl: '600px',
            }}
            backgroundColor={useColorModeValue(
              'rgba(255,255,255,1)',
              'rgba(21,21,21,.64)'
            )}
            borderColor={useColorModeValue(
              'rgba(235, 235, 235, 1)',
              'rgba(25,25,25,1)'
            )}
            border={'1px solid'}
            height={'60px'}
            _placeholder={{ color: 'rgba(150,150,150,1)', fontWeight: '550' }}
            colorScheme={'red'}
            placeholder="Title of the campaign *"
            isRequired={'true'}
            isInvalid={titleError}
            onBlur={validateTitle}
            maxLength={30}
            onChange={handleChangeTitle}
            value={title}
            variant={title.length > 0 ? 'filled' : 'outline'}
            border={title.length > 0 ? 'none' : 'solid 1px'}
          />
          <Flex
            flexDirection={'row'}
            paddingBottom={'50px'}
            paddingTop={'5px'}
            width={{
              base: '200px',
              sm: '400px',
              md: '500px',
              lg: '500px',
              xl: '600px',
            }}
          >
            <Text color={'red'}>{titleError}</Text>
            <Text color="rgba(150,150,150,1)" marginLeft={'auto'}>
              {title.length}/30
            </Text>
          </Flex>
          <Text
            style={{
              background:
                '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
              webkitBackgroundClip: 'text',
              webkitTextFillColor: 'transparent',
            }}
            fontWeight={'900'}
            marginBottom={'5px'}
            fontSize={'2em'}
          >
            Description of your project
          </Text>
          <Text
            color={useColorModeValue('var(--black)', 'var(--white)')}
            marginBottom={'10px'}
            fontStyle={'italic'}
            width={{
              base: '200px',
              sm: '400px',
              md: '500px',
              lg: '500px',
              xl: '600px',
            }}
          >
            Please provide a detailed description of your campaign, so that
            users can get an idea of the purpose of your campaign. Be creative,
            and precise.
          </Text>
          <Box filter={useColorModeValue('none', 'invert(1)')}>
            {currentBorder === 'rgba(235, 235, 235, 1)' ? (
              <MDEditor
                style={{
                  width: '90vw',
                  backgroundColor: 'rgba(255,255,255,1)',
                }}
                value={description}
                onChange={setDescription}
              />
            ) : (
              <MDEditor
                style={{ width: '90vw', backgroundColor: '#f2f2f2' }}
                value={description}
                onChange={setDescription}
              />
            )}
          </Box>
          <Text
            style={{
              background:
                '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
              webkitBackgroundClip: 'text',
              webkitTextFillColor: 'transparent',
            }}
            fontWeight={'900'}
            marginBottom={'5px'}
            fontSize={'2em'}
            paddingTop={'50px'}
          >
            Image/Video of presentation
          </Text>
          <Text
            color={useColorModeValue('var(--black)', 'var(--white)')}
            marginBottom={'10px'}
            fontStyle={'italic'}
            width={{
              base: '200px',
              sm: '400px',
              md: '500px',
              lg: '500px',
              xl: '600px',
            }}
          >
            Please provide an Image or a Video to illustrate your campaign
          </Text>
          <Flex
            width={{
              base: '200px',
              sm: '400px',
              md: '500px',
              lg: '500px',
              xl: '600px',
            }}
          >
            <div {...getRootProps()} style={{ width: 'inherit' }}>
              <input {...getInputProps()} />
              {isDragActive ? (
                currentBorder === 'rgba(235, 235, 235, 1)' ? (
                  <Box
                    style={{
                      fontWeight: '550',
                      color: 'rgba(150,150,150,1)',
                      border: 'dashed 1px',
                      borderColor: 'rgba(235, 235, 235, 1)',
                      backgroundColor: 'rgba(255,255,255,1)',
                      borderRadius: '50px',
                      paddingTop: '100px',
                      paddingBottom: '100px',
                      textAlign: 'center',
                    }}
                  >
                    Drag and drop your image here or click to open your folders.
                  </Box>
                ) : (
                  <Box
                    style={{
                      fontWeight: '550',
                      color: 'rgba(150,150,150,1)',
                      border: 'dashed 1px',
                      borderColor: 'rgba(25,25,25,1)',
                      backgroundColor: 'rgba(21,21,21,.64)',
                      borderRadius: '50px',
                      paddingTop: '100px',
                      paddingBottom: '100px',
                      textAlign: 'center',
                    }}
                  >
                    Drag and drop your image here or click to open your folders.
                  </Box>
                )
              ) : currentBorder === 'rgba(235, 235, 235, 1)' ? (
                <Box
                  style={{
                    fontWeight: '550',
                    color: 'rgba(150,150,150,1)',
                    border: 'dashed 1px',
                    borderColor: 'rgba(235, 235, 235, 1)',
                    backgroundColor: 'rgba(255,255,255,1)',
                    borderRadius: '50px',
                    paddingTop: '100px',
                    paddingBottom: '100px',
                    textAlign: 'center',
                  }}
                >
                  Drag and drop your image here or click to open your folders.
                </Box>
              ) : (
                <Box
                  style={{
                    fontWeight: '550',
                    color: 'rgba(150,150,150,1)',
                    border: 'dashed 1px',
                    borderColor: 'rgba(25,25,25,1)',
                    backgroundColor: 'rgba(21,21,21,.64)',
                    borderRadius: '50px',
                    paddingTop: '100px',
                    paddingBottom: '100px',
                    textAlign: 'center',
                  }}
                >
                  Drag and drop your image here or click to open your folders.
                </Box>
              )}
            </div>
            <aside style={thumbsContainer}>{thumbs}</aside>
          </Flex>
          <Text
            style={{
              background:
                '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
              webkitBackgroundClip: 'text',
              webkitTextFillColor: 'transparent',
            }}
            fontWeight={'900'}
            marginBottom={'5px'}
            fontSize={'2em'}
            paddingTop={'50px'}
          >
            Amount to raise
          </Text>
          <Text
            color={useColorModeValue('var(--black)', 'var(--white)')}
            marginBottom={'10px'}
            fontStyle={'italic'}
            width={{
              base: '200px',
              sm: '400px',
              md: '500px',
              lg: '500px',
              xl: '600px',
            }}
          >
            Please provide the amount you want to raise.
          </Text>
          <InputGroup>
            <InputLeftElement
              zIndex={'1'}
              pointerEvents="none"
              fontSize="1.2em"
              children="$"
              color="rgba(150,150,150,1)"
              fontWeight="550"
              margin="auto"
              top={'8px'}
            />
            <Input
              borderRadius={'50px'}
              _placeholder={{ color: 'rgba(150,150,150,1)', fontWeight: '550' }}
              width={{
                base: '200px',
                sm: '400px',
                md: '500px',
                lg: '500px',
                xl: '600px',
              }}
              backgroundColor={useColorModeValue(
                'rgba(255,255,255,1)',
                'rgba(21,21,21,.64)'
              )}
              borderColor={useColorModeValue(
                'rgba(235, 235, 235, 1)',
                'rgba(25,25,25,1)'
              )}
              height={'60px'}
              colorScheme={'red'}
              type={'number'}
              placeholder="Amount to raise"
              isRequired={'true'}
              isInvalid={amountError}
              onBlur={validateAmount}
              maxLength={10}
              onChange={handleChangeAmount}
              value={amount}
              variant={amount.length > 0 ? 'filled' : 'outline'}
              border={amount.length > 0 ? 'none' : 'solid 1px'}
            />
          </InputGroup>
          <Flex flexDirection={'row'} paddingBottom={'50px'}>
            <Text color={'red'} paddingTop={'5px'}>
              {amountError}
            </Text>
          </Flex>
          <Text
            style={{
              background:
                '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
              webkitBackgroundClip: 'text',
              webkitTextFillColor: 'transparent',
            }}
            fontWeight={'900'}
            marginBottom={'5px'}
            fontSize={'2em'}
          >
            Date of the end of the campaign *
          </Text>
          <Text
            color={useColorModeValue('var(--black)', 'var(--white)')}
            marginBottom={'10px'}
            fontStyle={'italic'}
            width={{
              base: '200px',
              sm: '400px',
              md: '500px',
              lg: '500px',
              xl: '600px',
            }}
          >
            Please provide the date you want to end the campaign.
          </Text>
          <Box filter={useColorModeValue('none', 'invert(1)')}>
            <DatePicker
              selected={date}
              closeOnScroll={true}
              onChange={(newDate) => setDate(newDate)}
              showTimeSelect
              dateFormat="Pp"
              minDate={new Date()}
              showPopperArrow={false}
              customInput={<CustomInput />}
            />
          </Box>
          <Text
            style={{
              background:
                '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
              webkitBackgroundClip: 'text',
              webkitTextFillColor: 'transparent',
            }}
            fontWeight={'900'}
            marginBottom={'5px'}
            fontSize={'2em'}
            paddingTop={'50px'}
          >
            Staggered Release *
          </Text>
          <Text
            color={useColorModeValue('var(--black)', 'var(--white)')}
            marginBottom={'10px'}
            fontStyle={'italic'}
            width={{
              base: '200px',
              sm: '400px',
              md: '500px',
              lg: '500px',
              xl: '600px',
            }}
          >
            Do you want to enable staggered release? For more info click{' '}
            <Link color={'var(--blue)'}>here</Link>
          </Text>
          <RadioGroup
            colorScheme="green"
            onChange={() => setStaggered(!staggered)}
            value={staggered}
          >
            <Stack direction="row">
              <Radio borderColor={'rgba(150,150,150,1)'} value={true}>
                Yes
              </Radio>
              <Radio value={false} borderColor={'rgba(150,150,150,1)'}>
                No
              </Radio>
            </Stack>
          </RadioGroup>
          {staggered && (
            <>
              <Text
                style={{
                  background:
                    '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                  webkitBackgroundClip: 'text',
                  webkitTextFillColor: 'transparent',
                }}
                fontWeight={'900'}
                marginBottom={'5px'}
                fontSize={'2em'}
                paddingTop={'50px'}
              >
                Number of milestones *
              </Text>
              <Text
                color={currentColor}
                marginBottom={'10px'}
                fontStyle={'italic'}
                width={{
                  base: '200px',
                  sm: '400px',
                  md: '500px',
                  lg: '500px',
                  xl: '600px',
                }}
              >
                Please give the number of milestones of the staggered release.
              </Text>
              <HStack
                paddingTop={'10px'}
                paddingBottom={'10px'}
                justifyContent={'center'}
                width={{
                  base: '200px',
                  sm: '400px',
                  md: '500px',
                  lg: '500px',
                  xl: '600px',
                }}
              >
                <Button
                  onClick={handleRemoveMilestone}
                  height={'60px'}
                  width={'60px'}
                  borderRadius={'full'}
                  backgroundColor={currentBackground}
                  borderColor={currentBorder}
                  color="rgba(150,150,150,1)"
                >
                  -
                </Button>
                <Input
                  borderRadius={'50px'}
                  _focus={{ outline: 'none !important' }}
                  backgroundColor={currentBackground}
                  borderColor={currentBorder}
                  border={'1px solid'}
                  readOnly={true}
                  height={'60px'}
                  _placeholder={{
                    color: 'rgba(150,150,150,1)',
                    fontWeight: '550',
                  }}
                  type="number"
                  onChange={(_, _val) => setNbMilestones(_val)}
                  value={pctMilestone.length}
                  display={'flex'}
                  textAlign={'center'}
                  width={'120px'}
                  variant={'filled'}
                />
                <Button
                  borderRadius={'full'}
                  backgroundColor={currentBackground}
                  borderColor={currentBorder}
                  height={'60px'}
                  width={'60px'}
                  color="rgba(150,150,150,1)"
                  onClick={handleAddMilestone}
                >
                  +
                </Button>
              </HStack>
              <Text
                paddingTop={'50px'}
                style={{
                  background:
                    '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                  webkitBackgroundClip: 'text',
                  webkitTextFillColor: 'transparent',
                }}
                fontWeight={'900'}
                marginBottom={'5px'}
                fontSize={'2em'}
              >
                Percentage of funds release for each milestone *
              </Text>
              <Text
                color={currentColor}
                marginBottom={'10px'}
                fontStyle={'italic'}
                width={{
                  base: '200px',
                  sm: '400px',
                  md: '500px',
                  lg: '500px',
                  xl: '600px',
                }}
              >
                Please give the percentage of funds released for each milestone.
                Sum must be 100%. Milestone 1 is forced to 20%.
              </Text>
              <SpacerSmall />
              {pctMilestone.map((x, idx) => (
                <>
                  <Text paddingBottom={'10px'}>Milestone {idx + 1}</Text>
                  <Input
                    borderRadius={'50px'}
                    width={{
                      base: '200px',
                      sm: '400px',
                      md: '500px',
                      lg: '500px',
                      xl: '600px',
                    }}
                    backgroundColor={currentBackground}
                    borderColor={currentBorder}
                    border={'1px solid'}
                    height={'60px'}
                    _placeholder={{
                      color: 'rgba(150,150,150,1)',
                      fontWeight: '550',
                    }}
                    readOnly={idx === 0 ? true : false}
                    type={'number'}
                    key={idx}
                    placeholder={`Milestone ${idx + 1}`}
                    colorScheme={'red'}
                    isRequired={'true'}
                    isInvalid={milestoneError}
                    onBlur={validateMilestone}
                    max={100}
                    onChange={(e) => {
                      const list = [...pctMilestone];
                      list[idx] = Number(e.target.value);
                      setPctMilestone(list);
                    }}
                    value={x}
                    variant={x > 0 ? 'filled' : 'outline'}
                    border={x > 0 ? 'none' : 'solid 1px'}
                  ></Input>
                  <SpacerSmall />
                </>
              ))}
              <Text color={'red'}>{milestoneError}</Text>
            </>
          )}

          <Button
            marginTop={'50px'}
            marginRight={'auto'}
            marginLeft={'auto'}
            isDisabled={!isValid || adding}
            onClick={isValid ? handleAddCampaign : null}
            width={{
              base: '200px',
              sm: '400px',
              md: '500px',
              lg: '500px',
              xl: '600px',
            }}
            borderRadius={'50px'}
            background={
              'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))'
            }
            _hover={{
              opacity: 0.8,
              background:
                'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
            }}
            height={'60px'}
          >
            Create your campaign
          </Button>
        </Flex>
      </Box>
    </Screen>
  );
}
export default Submit;

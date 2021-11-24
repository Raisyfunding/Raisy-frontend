import React, { useEffect, useState, useRef, forwardRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useDropzone } from "react-dropzone";
import { Screen, SpacerSmall } from "../../styles/globalStyles";
import { ethers } from "ethers";
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
  useNumberInput,
  Link,
  useToast,
} from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer.jsx";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import "./components/datepicker.scss";

import { useApi } from "../../api";
import { useWeb3React } from "@web3-react/core";
import { getSigner } from "./../../contracts";
import axios from "axios";
import { useCampaignsContract } from "./../../contracts/raisyCampaigns";

function Submit() {
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [staggered, setStaggered] = React.useState(false);
  const [adding, setAdding] = React.useState(false);
  const [description, setDescription] = React.useState(0);
  const [pctMilestone, setPctMilestone] = useState([20, 10]);
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
  const { addCampaign } = useCampaignsContract();

  const toast = useToast();

  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
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
      setAmountError("Invalid amount.");
    }
  };

  const validateMilestone = () => {
    if (pctMilestone.some((val) => val <= 0)) {
      setMilestoneError("No percent can be null");
    } else if (pctMilestone.reduce((acc, cur) => acc + cur, 0) !== 100) {
      setMilestoneError("Sum of each percent must be 100%");
    } else {
      setMilestoneError(null);
    }
  };

  useEffect(() => {
    console.log(pctMilestone);
  }, [pctMilestone]);

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
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
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  const handleAddMilestone = () => {
    if (pctMilestone.length === 5) return;
    setPctMilestone([...pctMilestone, 0]);
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
      textAlign={"center"}
      isRequired={"true"}
      onClick={onClick}
      ref={ref}
      readOnly
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
    const CANVAS_SIZE = 128;
    const canvas = document.createElement("canvas");
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      image,
      clipX,
      clipY,
      clipWidth,
      clipHeight,
      0,
      0,
      CANVAS_SIZE,
      CANVAS_SIZE
    );
    cb(canvas.toDataURL());
  };

  const handleAddCampaign = async () => {
    if (adding) return;
    setAdding(true);

    try {
      // // Triggers on-chain campaign creation
      // const tx = await addCampaign(500, amount, account);

      // const res = await tx.wait();

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
                title: "Error during message signature",
                description: `${error.message}`,
                status: "error",
                duration: 9000,
                isClosable: true,
              });
              setAdding(false);
              return;
            }

            const formData = new FormData();
            formData.append("title", title);
            formData.append("imgData", imgData);

            const result = await axios({
              method: "post",
              url: `${apiUrl}/ipfs/uploadCampaignImage2Server`,
              data: formData,
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${authToken}`,
              },
            });

            const coverImageHash = result.data.data;

            let data = {
              campaignId: 0,
              title,
              description,
              coverImageHash,
              amountToRaise: amount,
              endAt: date,
              signature,
              signatureAddress,
            };

            if (staggered) {
              data = { ...data, nbMilestones };
            }

            await axios({
              method: "post",
              url: `${apiUrl}/campaign/campaigndetails`,
              data: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
              },
            });

            toast({
              title: "Campaign created!",
              description: `Your campaign has successfully been created. Just wait for people to donate now 💲`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });

            setAdding(false);
          } catch (error) {
            toast({
              title: "Error during campaign creation",
              description: `${error}`,
              status: "error",
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
        title: "Error during campaign creation on-chain",
        description: `${err}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setAdding(false);
    }
  };

  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue("var(--white)", "var(--black)"),
      }}
    >
      <Text
        marginRight={"auto"}
        paddingTop={"20px"}
        marginLeft={"auto"}
        fontSize={{ base: "3xl", lg: "4xl", xl: "5xl" }}
        paddingBottom={"40px"}
      >
        Submit a project
      </Text>
      <Flex
        flexDirection={"column"}
        maxWidth={"70vw"}
        paddingLeft={"20px"}
        paddingBottom={"50px"}
        margin={"auto"}
      >
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"5px"}
          fontSize={"1.5em"}
        >
          Title of your campaign *
        </Text>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"10px"}
          fontStyle={"italic"}
        >
          Be concise and to the point
        </Text>
        <Input
          colorScheme={"red"}
          placeholder="Title of the campaign"
          isRequired={"true"}
          isInvalid={titleError}
          onBlur={validateTitle}
          maxLength={30}
          onChange={handleChangeTitle}
          value={title}
          borderColor={useColorModeValue("var(--black)", "var(--white)")}
          variant={title.length > 0 ? "filled" : "outline"}
          border={title.length > 0 ? "none" : "solid 1px"}
        />
        <Flex flexDirection={"row"} paddingBottom={"50px"}>
          <Text color={"red"}>{titleError}</Text>
          <Text
            color={useColorModeValue("var(--black)", "var(--white)")}
            marginLeft={"auto"}
          >
            {title.length}/30
          </Text>
        </Flex>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"5px"}
          fontSize={"1.5em"}
        >
          Description of your project *
        </Text>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"10px"}
          fontStyle={"italic"}
          textAlign={"justify"}
        >
          Please provide a detailed description of your campaign, so that users
          can get an idea of the campaign. Be creative, and precise.
        </Text>
        <MDEditor value={description} onChange={setDescription} />
        <Text
          paddingTop={"50px"}
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"5px"}
          fontSize={"1.5em"}
        >
          Image/Video of presentation*
        </Text>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"10px"}
          fontStyle={"italic"}
          textAlign={"justify"}
        >
          Please provide an Image or a Video to illustrate your campaign
        </Text>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p
              style={{
                border: "dashed 2px",
                borderRadius: "7px",
                paddingTop: "100px",
                paddingBottom: "100px",
                textAlign: "center",
              }}
            >
              Drop the files here ...
            </p>
          ) : (
            <p
              style={{
                border: "dashed 1px",
                borderRadius: "7px",
                paddingTop: "100px",
                paddingBottom: "100px",
                textAlign: "center",
              }}
            >
              Drag and drop some files here, or click to select files
            </p>
          )}
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"5px"}
          paddingTop={"50px"}
          fontSize={"1.5em"}
        >
          Amount to raise *
        </Text>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"10px"}
          fontStyle={"italic"}
          textAlign={"justify"}
        >
          Please provide the amount you want to raise.
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            fontSize="1.2em"
            children="$"
          />
          <Input
            colorScheme={"red"}
            placeholder="Amount to raise"
            isRequired={"true"}
            isInvalid={amountError}
            onBlur={validateAmount}
            maxLength={10}
            onChange={handleChangeAmount}
            value={amount}
            borderColor={useColorModeValue("var(--black)", "var(--white)")}
            variant={amount.length > 0 ? "filled" : "outline"}
            border={amount.length > 0 ? "none" : "solid 1px"}
          />
        </InputGroup>
        <Flex flexDirection={"row"} paddingBottom={"50px"}>
          <Text color={"red"}>{amountError}</Text>
          <Text
            color={useColorModeValue("var(--black)", "var(--white)")}
            marginLeft={"auto"}
          >
            {title.length}/10
          </Text>
        </Flex>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"5px"}
          fontSize={"1.5em"}
        >
          Date of the end of the campaign *
        </Text>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"10px"}
          fontStyle={"italic"}
          textAlign={"justify"}
        >
          Please provide the date you want to end the campaign.
        </Text>
        <DatePicker
          selected={date}
          onChange={(newDate) => setDate(newDate)}
          showTimeSelect
          dateFormat="Pp"
          minDate={new Date()}
          customInput={<CustomInput />}
        />
        <Text
          paddingTop={"50px"}
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"5px"}
          fontSize={"1.5em"}
        >
          Staggered Release *
        </Text>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"10px"}
          fontStyle={"italic"}
          textAlign={"justify"}
        >
          Do you want to enable staggered release? For more info click{" "}
          <Link color={"blue.400"}>here</Link>
        </Text>
        <RadioGroup onChange={() => setStaggered(!staggered)} value={staggered}>
          <Stack direction="row">
            <Radio
              borderColor={useColorModeValue("var(--black)", "var(--white)")}
              value={true}
            >
              Yes
            </Radio>
            <Radio
              value={false}
              borderColor={useColorModeValue("var(--black)", "var(--white)")}
            >
              No
            </Radio>
          </Stack>
        </RadioGroup>
        {staggered && (
          <>
            <Text marginBottom={"5px"} fontSize={"1.5em"} paddingTop={"50px"}>
              Number of milestones *
            </Text>
            <Text
              marginBottom={"10px"}
              fontStyle={"italic"}
              textAlign={"justify"}
            >
              Please give the number of milestones of the staggered release.
            </Text>
            <HStack
              paddingTop={"10px"}
              paddingBottom={"10px"}
              justifyContent={"center"}
            >
              <Button onClick={handleRemoveMilestone}>-</Button>
              <Input
                type="number"
                onChange={(_, _val) => setNbMilestones(_val)}
                value={pctMilestone.length}
                display={"flex"}
                textAlign={"center"}
                width={"80px"}
              />
              <Button onClick={handleAddMilestone}>+</Button>
            </HStack>
            <Text marginBottom={"5px"} fontSize={"1.5em"} paddingTop={"50px"}>
              Percentage of funds release for each milestone *
            </Text>
            <Text
              marginBottom={"10px"}
              fontStyle={"italic"}
              textAlign={"justify"}
            >
              Please give the percentage of funds released for each milestone.
              Sum must be 100%.
            </Text>
            <SpacerSmall />
            {pctMilestone.map((x, idx) => (
              <>
                <Text paddingBottom={"10px"}>Milestone {idx + 1}</Text>
                <Input
                  type={"number"}
                  key={idx}
                  placeholder={`Milestone ${idx + 1}`}
                  colorScheme={"red"}
                  isRequired={"true"}
                  isInvalid={milestoneError}
                  onBlur={validateMilestone}
                  max={100}
                  onChange={(e) => {
                    const list = [...pctMilestone];
                    list[idx] = Number(e.target.value);
                    setPctMilestone(list);
                  }}
                  value={x}
                  variant={x > 0 ? "filled" : "outline"}
                  border={x > 0 ? "none" : "solid 1px"}
                ></Input>
                <SpacerSmall />
              </>
            ))}
            <Text color={"red"}>{milestoneError}</Text>
          </>
        )}

        <Button
          marginTop={"50px"}
          isDisabled={!isValid || adding}
          onClick={isValid ? handleAddCampaign : null}
        >
          Create your campaign
        </Button>
      </Flex>
      <Footer />
    </Screen>
  );
}
export default Submit;

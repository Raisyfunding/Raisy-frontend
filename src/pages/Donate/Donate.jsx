import React, { useState } from 'react';
import {
  Flex,
  Select,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Center,
  Image,
  Link,
  useToast,
  Box,
  CircularProgressLabel,
  CircularProgress,
} from '@chakra-ui/react';
import { Screen } from '../../styles/globalStyles';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useApi } from '../../api';
import { ethers } from 'ethers';
import { useCampaignsContract } from './../../contracts/raisyCampaigns';
import useTokens from './../../hooks/useTokens';
import { useWeb3React } from '@web3-react/core';
import { useTokenContract } from './../../contracts/token';
import { formatError } from '../../utils';
import Loader from 'react-loader-spinner';
import styles from '../Projectpage/components/styles.module.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Donate = () => {
  const { campaignId } = useParams();

  const toast = useToast();

  const { fetchCampaignById } = useApi();

  const [campaign, setCampaign] = useState({});

  const { tokens: payTokens } = useTokens();

  const [tokenPriceInterval, setTokenPriceInterval] = useState();
  const [tokenPrice, setTokenPrice] = useState();

  const [options, setOptions] = useState([]);

  const { getCampaignsContract, donateERC20 } = useCampaignsContract();

  const { account } = useWeb3React();

  useEffect(() => {
    fetchCampaignById(campaignId).then((_campaign) => {
      setCampaign(_campaign.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campaignId]);

  const [currency, setCurrency] = React.useState({});
  const [amount, setAmount] = React.useState();
  const [amountError, setAmountError] = useState(null);
  const [balance, setBalance] = useState(0);

  const [sending, setSending] = useState(false);

  const { getERC20Contract } = useTokenContract();

  const handleChangeCurrency = (event) =>
    setCurrency(options.find((opt) => opt.address === event.target.value));
  const handleChangeAmount = (event) => setAmount(event.target.value);

  // const validAmount = (amount) => /^\d+$/.test(amount);

  const validateAmount = () => {
    if (Number(amount) === 0) {
      setAmountError("Amount can't be null");
    } else if (amount > balance) {
      setAmountError('Not enough funds');
    } else {
      setAmountError(null);
    }
  };

  const getTokenPrice = () => {
    if (tokenPriceInterval) clearInterval(tokenPriceInterval);
    const func = async () => {
      const tk = currency.address || ethers.constants.AddressZero;
      try {
        const campaignsContract = await getCampaignsContract();
        const price = await campaignsContract.getPrice(tk);
        setTokenPrice(parseFloat(ethers.utils.formatUnits(price[0], 18)));
      } catch {
        setTokenPrice(null);
      }
    };
    func();
    setTokenPriceInterval(setInterval(func, 60 * 1000));
  };

  useEffect(() => {
    if (payTokens?.length) {
      setCurrency(payTokens[0]);
      setOptions(payTokens);
    }
  }, [payTokens]);

  useEffect(() => {
    const updateBalance = async () => {
      const erc20 = await getERC20Contract(currency.address);
      const balance = await erc20.balanceOf(account);
      setBalance(balance);
    };

    if (account && currency?.address) {
      updateBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, currency]);

  useEffect(() => {
    if (!currency?.address) return;

    getTokenPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const handleSendDonation = async () => {
    if (sending) return;

    try {
      setSending(true);

      const donationAmount = ethers.utils.parseUnits(amount, currency.decimals);

      // Error out if user balance is unsufficient
      if (balance.lt(donationAmount)) {
        toast({
          title: `Insufficient ${currency.symbol} balance !`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        setSending(false);
        return;
      }

      const erc20 = await getERC20Contract(currency.address);
      const campaignsContract = await getCampaignsContract();
      const allowance = await erc20.allowance(
        account,
        campaignsContract.address
      );

      // Check if users approves the contract to spend their ERC20 tokens
      if (allowance.lt(donationAmount)) {
        const tx = await erc20.approve(
          campaignsContract.address,
          donationAmount
        );
        await tx.wait();
      }

      // Triggers the donation TX
      const tx = await donateERC20(
        campaignId,
        donationAmount,
        currency.address,
        account
      );

      await tx.wait();

      toast({
        title: 'Thank you for your donation ❤',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });

      setSending(false);
    } catch (err) {
      toast({
        title: 'Error during donation on-chain',
        description: formatError(err),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setSending(false);
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
        backgroundImage="/images/yoyoyo.png"
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        height={{ base: '', md: '100vh' }}
        paddingBottom={{ base: '30px', md: 'unset' }}
      >
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          width={'100vw'}
          justifyContent={{ base: 'left', md: 'center' }}
          gridGap={{ base: '30px', md: '0px' }}
        >
          <Flex
            width={{ base: '-webkit-fit-content', md: '50vw' }}
            flexDirection={'column'}
            padding={'40px'}
            margin={'auto'}
          >
            <Text
              marginLeft={'auto'}
              marginRight={'auto'}
              fontSize={{
                base: '5xl',
                sm: '7xl',
                md: '7xl',
                lg: '7xl',
                xl: '8xl',
              }}
              style={{
                background:
                  '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                webkitBackgroundClip: 'text',
                webkitTextFillColor: 'transparent',
              }}
              fontWeight={'900'}
            >
              DONATE.
            </Text>
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
              marginRight={'auto'}
              marginLeft={'auto'}
            >
              Select a currency
            </Text>
            <Text
              color={useColorModeValue('var(--black)', 'var(--white)')}
              marginBottom={'10px'}
              fontStyle={'italic'}
              textAlign={'justify'}
              marginLeft={'auto'}
              marginRight={'auto'}
            >
              A donation using $RSY offers many advantages.{' '}
              <Link color={'var(--blue)'}>Why should I use $RSY?</Link>
            </Text>
            <Select
              borderRadius={'50px'}
              width={{
                base: '200px',
                sm: '400px',
                md: '350px',
                lg: '400px',
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
              _placeholder={{ color: 'rgba(150,150,150,1)', fontWeight: '550' }}
              placeholder="Select currency"
              onChange={handleChangeCurrency}
              value={currency?.address}
              marginLeft={'auto'}
              marginRight={'auto'}
            >
              {options.map((opt) => {
                return <option value={opt?.address}>{opt?.symbol}</option>;
              })}
            </Select>
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
              marginLeft={'auto'}
              marginRight={'auto'}
            >
              Amount of the donation
            </Text>
            <Box
              width={{
                base: '200px',
                sm: '400px',
                md: '350px',
                lg: '400px',
                xl: '600px',
              }}
              textAlign={'right'}
              marginLeft={'auto'}
              marginRight={'auto'}
            >
              <Text paddingBottom={'10px'}>
                Available:{' '}
                {Math.round(
                  ethers.utils.formatUnits(balance, currency?.decimals)
                )}
                {currency?.symbol} ~
                {Math.round(
                  tokenPrice *
                    ethers.utils.formatUnits(balance, currency?.decimals)
                )}
                $
              </Text>
            </Box>
            <InputGroup
              marginLeft={'auto'}
              marginRight={'auto'}
              width={{
                base: '200px',
                sm: '400px',
                md: '350px',
                lg: '400px',
                xl: '600px',
              }}
            >
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
                height={'60px'}
                _placeholder={{
                  color: 'rgba(150,150,150,1)',
                  fontWeight: '550',
                }}
                colorScheme={'red'}
                type="number"
                placeholder="Amount"
                isRequired={'true'}
                isDisabled={!currency}
                isInvalid={amountError}
                onBlur={validateAmount}
                onChange={handleChangeAmount}
                value={amount}
                variant={amount > 0 ? 'filled' : 'outline'}
                border={amount > 0 ? 'none' : 'solid 1px'}
              />
              <InputRightElement width="4.5rem" height={'60px'}>
                <Button
                  height={'40px'}
                  borderRadius={'50px'}
                  backgroundColor={useColorModeValue(
                    'rgba(235, 235, 235, 1)',
                    'rgba(21,21,21,.64)'
                  )}
                  size="sm"
                  onClick={() =>
                    setAmount(
                      ethers.utils.formatUnits(balance, currency?.decimals)
                    )
                  }
                >
                  Max
                </Button>
              </InputRightElement>
            </InputGroup>
            <Flex flexDirection={'row'} paddingBottom={'50px'}>
              <Text color={'red'}>{amountError}</Text>
            </Flex>
            {sending ? (
              <Center>
                <Loader
                  type="Oval"
                  color="#007BFF"
                  height={32}
                  width={32}
                  className={styles.loader}
                />
              </Center>
            ) : (
              <Button
                disabled={amountError || !amount}
                onClick={handleSendDonation}
                width={'200px'}
                height={'60px'}
                margin={'auto'}
                borderRadius={'50px'}
                color={'black'}
                background={
                  'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))'
                }
                _hover={{
                  opacity: 0.8,
                  background:
                    'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                }}
              >
                Send the donation
              </Button>
            )}
          </Flex>
          <Flex
            margin={'auto'}
            backgroundColor={useColorModeValue(
              'rgba(255,255,255,1)',
              'rgba(21,21,21,.64)'
            )}
            borderRadius={'50px'}
            border={'1px solid'}
            borderColor={useColorModeValue(
              'rgba(235, 235, 235, 1)',
              'rgba(25,25,25,1)'
            )}
            padding={'30px'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
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
              {campaign.title}
            </Text>
            <Image
              boxSize="300px"
              src={`https://cloudflare-ipfs.com/ipfs/${campaign.coverImageHash}`}
              paddingBottom={'15px'}
            />
            <Text fontSize={'1xl'} fontWeight={'800'} paddingBottom={'10px'}>
              Campaign Progress
            </Text>
            <CircularProgress
              value={
                campaign.amountRaised / campaign.amountToRaise < 1
                  ? (campaign.amountRaised / campaign.amountToRaise) * 100
                  : '100'
              }
              color="var(--blue)"
              thickness="5px"
              size={'90px'}
              margin={'auto'}
              trackColor={useColorModeValue(
                'rgba(230,230,230,1)',
                'rgba(25,25,25,1)'
              )}
            >
              {' '}
              <CircularProgressLabel margin={'auto'}>
                {campaign.amountRaised / campaign.amountToRaise < 1
                  ? (campaign.amountRaised / campaign.amountToRaise) * 100
                  : '100'}
                %
              </CircularProgressLabel>
            </CircularProgress>
          </Flex>
        </Flex>
      </Box>
    </Screen>
  );
};

export default Donate;

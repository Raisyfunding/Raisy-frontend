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
import { ArrowLeftIcon } from '@chakra-ui/icons';
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
  }, [campaignId]);

  const [currency, setCurrency] = React.useState({});
  const [amount, setAmount] = React.useState(0);
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
  }, [account, currency]);

  useEffect(() => {
    if (!currency?.address) return;

    getTokenPrice();
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
      }}
    >
      <Link
        position="fixed"
        top="10vh"
        left="20vh"
        href={'/campaign/'.concat(campaignId)}
      >
        <ArrowLeftIcon />
      </Link>
      <Text
        textAlign={'center'}
        fontSize={'4xl'}
        paddingBottom={'50px'}
        paddingTop={'10px'}
      >
        Donate
      </Text>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        width={'100vw'}
        justifyContent={'center'}
        gridGap={{ base: '30px', md: '0px' }}
      >
        <Flex
          width={'40vw'}
          flexDirection={'column'}
          style={{ padding: '30px', margin: 'auto ' }}
          // borderColor={useColorModeValue('var(--white)', 'var(--black)')}
          // borderRadius={'7px'}
        >
          <Text textAlign={'center'} fontSize={'4xl'} paddingTop={'10px'}>
            The donation
          </Text>
          <Text
            paddingTop={'50px'}
            color={useColorModeValue('var(--black)', 'var(--white)')}
            marginBottom={'5px'}
            fontSize={'1.5em'}
          >
            Select a currency
          </Text>
          <Text
            color={useColorModeValue('var(--black)', 'var(--white)')}
            marginBottom={'10px'}
            fontStyle={'italic'}
            textAlign={'justify'}
          >
            A donation using $RSY offers many advantages.
            <br />
            <Link color={'var(--blue)'}>Why should I use $RSY?</Link>
          </Text>
          <Select
            placeholder="Select currency"
            borderColor={useColorModeValue('var(--black)', 'var(--white)')}
            onChange={handleChangeCurrency}
            value={currency?.address}
          >
            {options.map((opt) => {
              return <option value={opt?.address}>{opt?.symbol}</option>;
            })}
          </Select>
          <Flex flexDirection={'row'} gridGap={'auto'}>
            <Text
              paddingTop={'50px'}
              color={useColorModeValue('var(--black)', 'var(--white)')}
              marginBottom={'5px'}
              fontSize={'1.5em'}
            >
              Amount of the donation
            </Text>

            <Text
              paddingBottom={'10px'}
              paddingTop={'50px'}
              marginLeft={'auto'}
              marginTop={'auto'}
            >
              Available: {ethers.utils.formatUnits(balance, currency?.decimals)}{' '}
              {currency?.symbol} ({tokenPrice}$)
            </Text>
          </Flex>
          <InputGroup>
            <Input
              colorScheme={'red'}
              type="number"
              placeholder="Amount"
              isRequired={'true'}
              isDisabled={!currency}
              isInvalid={amountError}
              onBlur={validateAmount}
              onChange={handleChangeAmount}
              value={amount}
              borderColor={useColorModeValue('var(--black)', 'var(--white)')}
              variant={amount > 0 ? 'filled' : 'outline'}
              border={amount > 0 ? 'none' : 'solid 1px'}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
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
            >
              Send the donation
            </Button>
          )}
        </Flex>
        <Flex
          width={'40vw'}
          flexDirection={'column'}
          style={{ border: 'solid 1px', padding: '10px', margin: 'auto ' }}
          borderColor={useColorModeValue('var(--white)', 'var(--black)')}
          borderRadius={'7px'}
          justifyContent={'center'}
          gridGap={'20px'}
        >
          <Text
            textAlign={'center'}
            fontSize={'4xl'}
            paddingBottom={'50px'}
            paddingTop={'10px'}
          >
            The project
          </Text>
          <Image
            boxSize="200px"
            src={`https://cloudflare-ipfs.com/ipfs/${campaign.coverImageHash}`}
          />
          <Text>{campaign.title}</Text>
          <Text>{campaign.description}</Text>
        </Flex>
      </Flex>
    </Screen>
  );
};

export default Donate;

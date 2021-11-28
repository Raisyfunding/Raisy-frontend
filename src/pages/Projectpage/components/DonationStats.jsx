/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import useTokens from './../../../hooks/useTokens';
import { useWeb3React } from '@web3-react/core';
import { useCampaignsContract, useChefContract } from '../../../contracts';
import { ethers } from 'ethers';

const DonationStats = ({ campaignId }) => {
  const { tokens: currencies } = useTokens();

  const { account } = useWeb3React();
  const { getPendingRewards } = useChefContract();

  const [endCampaign, setEndCampaign] = useState(false);
  const [enableWithdrawing, setEnableWithdrawing] = useState(true);
  const [amount, setAmount] = useState(100);
  const [pendingRewards, setPendingRewards] = useState(0);

  const [payTokens, setPayTokens] = useState(
    currencies.map((c) => {
      return { ...c, amountDonated: 0 };
    })
  );

  const { getAmountDonated } = useCampaignsContract();

  const updateAmountDonated = async (curr) => {
    if (curr.address) {
      let amountDonated = await getAmountDonated(
        account,
        campaignId,
        curr.address
      );
      amountDonated = ethers.utils.formatUnits(amountDonated, curr.decimals);
      return { ...curr, amountDonated };
    }
  };

  const updateAllTokens = async () => {
    const newCurrencies = await Promise.all(
      currencies.map(async (_curr) => {
        const newCurrency = await updateAmountDonated(_curr);
        return newCurrency;
      })
    );

    setPayTokens(newCurrencies);
  };

  const udpatePendingRewards = async () => {
    const _pending = await getPendingRewards(campaignId, account);
    console.log(_pending);
    setPendingRewards(parseFloat(ethers.utils.formatEther(_pending)));
  };

  useEffect(() => {
    if (campaignId !== undefined && account) {
      updateAllTokens();
      udpatePendingRewards();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies, campaignId, account]);

  return (
    <div>
      <Flex
        justifyContent={'center'}
        flexDirection={'column'}
        marginRight={'auto'}
        marginLeft={'auto'}
      >
        <Text
          fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}
          style={{
            textAlign: 'center',
            background:
              '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
            webkitBackgroundClip: 'text',
            webkitTextFillColor: 'transparent',
          }}
          fontWeight={'900'}
          paddingBottom={'40px'}
          margin={'auto'}
        >
          STATS
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Currency</Th>
              <Th isNumeric>Amount donated</Th>
            </Tr>
          </Thead>
          <Tbody>
            {payTokens.map((token) => (
              <Tr>
                <Td>{token.symbol}</Td>
                <Td isNumeric>{token.amountDonated}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Text
          textAlign={'center'}
          fontSize={'3xl'}
          paddingBottom={'10px'}
          paddingTop={'20px'}
        >
          Get your $RSY rewards !
        </Text>
        {account && (
          <>
            <Text textAlign={'center'}>Pending Rewards : {pendingRewards}</Text>
          </>
        )}
        <Button display={!account ? 'flex' : 'none'} bg="#27292b">
          Connect
        </Button>
        <Flex display={account ? 'flex' : 'none'}>
          <Flex
            display={!endCampaign && !enableWithdrawing ? 'flex' : 'none'}
            width={'100%'}
          >
            <Text textAlign={'center'}>
              Unlocking nor Withdrawing is available. Want to learn more about
              it? Click <Link color={'var(--blue)'}>here.</Link>
            </Text>
          </Flex>
          <Flex
            flexDirection={'column'}
            display={endCampaign ? 'flex' : 'none'}
            width={'100%'}
          >
            <Text padding={'20px'} marginLeft={'auto'} marginRight={'auto'}>
              You can unlock {amount} $RSY out of {amount} $RSY.
            </Text>
            <Button width={'100%'}>Unlock</Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default DonationStats;

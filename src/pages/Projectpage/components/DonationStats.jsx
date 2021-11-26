import React from 'react';
import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import useTokens from './../../../hooks/useTokens';
import { useWeb3React } from '@web3-react/core';
import { useCampaignsContract } from '../../../contracts';
import { ethers } from 'ethers';

const DonationStats = ({ campaignId }) => {
  const { tokens: currencies } = useTokens();

  const { account } = useWeb3React();

  const [endCampaign, setEndCampaign] = useState(false);
  const [enableWithdrawing, setEnableWithdrawing] = useState(true);
  const [amount, setAmount] = useState(100);

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

  useEffect(() => {
    if (campaignId && account) {
      updateAllTokens();
    }
  }, [currencies, campaignId, account]);

  return (
    <div>
      <Flex
        justifyContent={'center'}
        flexDirection={'column'}
        width={'80%'}
        marginRight={'auto'}
        marginLeft={'auto'}
      >
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

import React from 'react';
import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useState } from 'react';
import useTokens from './../../../hooks/useTokens';
import { useWeb3React } from '@web3-react/core';

const DonationStats = () => {
  const { tokens: currencies } = useTokens();

  const { account } = useWeb3React();

  const [endCampaign, setEndCampaign] = useState(false);
  const [enableWithdrawing, setEnableWithdrawing] = useState(true);
  const [amount, setAmount] = useState(100);
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
            {currencies.map((curr) => (
              <Tr>
                <Td>{curr.symbol}</Td>
                <Td isNumeric>25.4</Td>
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

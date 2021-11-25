import React from 'react'
import { Button, Flex, Link, Text } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import { useState } from 'react'

const DonationStats = () => {
  const currencies = ['Ether', 'Raisy', 'Bitcoin']
  const [connected, setConnected] = useState(true)
  const [endCampaign, setEndCampaign] = useState(false)
  const [enableWithdrawing, setEnableWithdrawing] = useState(true)
  const [amount, setAmount] = useState(100)
  return (
    <div>
      <Flex
        justifyContent={'center'}
        flexDirection={'column'}
        width={'80%'}
        marginRight={'auto'}
        marginLeft={'auto'}
      >
        <Text textAlign={'center'} fontSize={'3xl'} paddingBottom={'10px'}>
          Your Stats
        </Text>
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
                <Td>{curr}</Td>
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
          Unlocking & Withdrawing
        </Text>
        <Button display={!connected ? 'flex' : 'none'}>Connect</Button>
        <Flex display={connected ? 'flex' : 'none'}>
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
          <Flex
            flexDirection={'column'}
            display={enableWithdrawing ? 'flex' : 'none'}
            width={'100%'}
          >
            <Text padding={'20px'} marginLeft={'auto'} marginRight={'auto'}>
              The campaign is unsuccessful, or participants voted in majority
              for a refund.
            </Text>
            <Button width={'100%'}>Withdraw your donation</Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default DonationStats

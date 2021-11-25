import {
  Button,
  Flex,
  Text,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

const StakingStats = () => {
  return (
    <div>
      <Flex flexDirection={'column'} width={'100vw'} height={'100vh'}>
        <Text fontSize={'2em'} textAlign={'center'} paddingBottom={'50px'}>
          Staking Stats
        </Text>
        <Flex flexDirection={'row'}>
          <Flex
            width={'40vw'}
            flexDirection={'column'}
            style={{ border: 'solid 1px', padding: '20px', margin: 'auto ' }}
            borderColor={useColorModeValue('var(--white)', 'var(--black)')}
            borderRadius={'7px'}
            justifyContent={'center'}
            gridGap={'20px'}
            height={'70vh'}
          >
            <Text fontSize={'3xl'} textAlign={'center'}>
              Global Stats
            </Text>
            <Flex flexDirection={'row'}>
              <Text paddingBottom={'20px'}>Total Raisy donated ever </Text>
              <Text marginLeft={'auto'}> $</Text>
            </Flex>
            <Flex flexDirection={'row'}>
              <Text paddingBottom={'20px'}>APR on every campaign </Text>
              <Text marginLeft={'auto'}> %</Text>
            </Flex>
            <Flex flexDirection={'row'}>
              <Text paddingBottom={'20px'}>Total Supply </Text>
              <Text marginLeft={'auto'}> $RSY</Text>
            </Flex>
            <Flex flexDirection={'row'}>
              <Text paddingBottom={'20px'}>Price </Text>
              <Text marginLeft={'auto'}> $</Text>
            </Flex>
            <Flex flexDirection={'row'}>
              <Text paddingBottom={'20px'}>MarketCap </Text>
              <Text marginLeft={'auto'}> $</Text>
            </Flex>
            <Flex flexDirection={'row'}>
              <Text paddingBottom={'20px'}>Max Supply </Text>
              <Text marginLeft={'auto'}> $RSY</Text>
            </Flex>
            <Flex flexDirection={'row'}>
              <Text paddingBottom={'20px'}>New $RSY per block</Text>
              <Text marginLeft={'auto'}> $RSY/Block</Text>
            </Flex>
          </Flex>
          <Flex
            width={'40vw'}
            flexDirection={'column'}
            style={{ border: 'solid 1px', padding: '10px', margin: 'auto ' }}
            borderColor={useColorModeValue('var(--white)', 'var(--black)')}
            borderRadius={'7px'}
            justifyContent={'center'}
            gridGap={'20px'}
            height={'70vh'}
          >
            <Text fontSize={'3xl'} textAlign={'center'}>
              Your stats
            </Text>
            <Flex flexDirection={'row'}>
              <Text paddingBottom={'20px'}>Your balance of $RSY</Text>
              <Text marginLeft={'auto'}> $RSY</Text>
            </Flex>
            <Flex flexDirection={'row'}>
              <Text paddingBottom={'20px'}>Your balance of $RSY in $</Text>
              <Text marginLeft={'auto'}> $</Text>
            </Flex>
            <Flex flexDirection={'row'}>
              <Text paddingBottom={'20px'}>Total Raisy donated</Text>
              <Text marginLeft={'auto'}> $RSY</Text>
            </Flex>
            <Flex flexDirection={'row'}>
              <Text paddingBottom={'20px'}>Currently staked</Text>
              <Text marginLeft={'auto'}> $RSY</Text>
            </Flex>
            <Flex flexDirection={'row'}>
              <Text paddingBottom={'20px'}>Currently locked</Text>
              <Text marginLeft={'auto'}> $RSY</Text>
            </Flex>
            <Button>Connect</Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default StakingStats

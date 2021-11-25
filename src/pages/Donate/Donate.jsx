import React, { useState } from 'react'
import {
  Flex,
  Select,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Image,
  Link,
} from '@chakra-ui/react'
import { Screen } from '../../styles/globalStyles'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useApi } from '../../api'

const Donate = () => {
  const { campaignId } = useParams()

  const { fetchCampaignById } = useApi()

  const [campaign, setCampaign] = useState({})

  useEffect(() => {
    fetchCampaignById(campaignId).then((_campaign) => {
      setCampaign(_campaign.data)
    })
  }, [campaignId])

  const [currency, setCurrency] = React.useState('')
  const [amount, setAmount] = React.useState('')
  const [amountError, setAmountError] = useState(null)
  const [maximum, setMaximum] = useState(null)
  const handleChangeCurrency = (event) => setCurrency(event.target.value)
  const handleChangeAmount = (event) => setAmount(event.target.value)

  const validAmount = (amount) => /^\d+$/.test(amount)

  const validateAmount = () => {
    if (amount.length === 0) {
      setAmountError("This field can't be blank")
    } else if (validAmount(amount)) {
      setAmountError(null)
    } else {
      setAmountError('Invalid amount.')
    }
  }
  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue('var(--white)', 'var(--black)'),
      }}
    >
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
          style={{ border: 'solid 1px', padding: '30px', margin: 'auto ' }}
          borderColor={useColorModeValue('var(--white)', 'var(--black)')}
          borderRadius={'7px'}
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
            value={currency}
          >
            <option value="RSY">Raisy</option>
            <option value="BTC">Bitcoin</option>
            <option value="ETH">Ether</option>
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
              Available: {currency}
            </Text>
          </Flex>
          <InputGroup>
            <Input
              colorScheme={'red'}
              type={'number'}
              placeholder="Amount"
              isRequired={'true'}
              isDisabled={currency.length === 0 ? true : false}
              isInvalid={amountError}
              onBlur={validateAmount}
              maxLength={10}
              onChange={handleChangeAmount}
              value={amount}
              borderColor={useColorModeValue('var(--black)', 'var(--white)')}
              variant={amount.length > 0 ? 'filled' : 'outline'}
              border={amount.length > 0 ? 'none' : 'solid 1px'}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={setMaximum}>
                Max
              </Button>
            </InputRightElement>
          </InputGroup>
          <Flex flexDirection={'row'} paddingBottom={'50px'}>
            <Text color={'red'}>{amountError}</Text>
          </Flex>
          <Button>Send the donation</Button>
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
  )
}

export default Donate

import ArchiveBox from '../../../images/ArchiveBox.png'
import {
  SpacerLarge,
  SpacerXSmall,
  SpacerSmall,
} from '../../../styles/globalStyles'
import {
  Flex,
  Text,
  Progress,
  Box,
  Spacer,
  Button,
  useColorModeValue,
  Image,
  Center,
  HStack,
} from '@chakra-ui/react'

import { FiMail, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'

function Campaigninfo({ currentProject }) {
  return (
    <>
      <Flex direction="column">
        <Box bg="#504D4D">
          <Flex direction="column" height="100%" padding="15px">
            <Text textAlign={'justify'} fontSize="15px">
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                {currentProject.amountRaised}${' '}
              </span>{' '}
              Raised of {currentProject.amountToRaise}$ Goal
            </Text>
            <SpacerXSmall />
            <Progress
              colorScheme="gray"
              value={
                currentProject.amountRaised / currentProject.amountToRaise < 1
                  ? (currentProject.amountRaised /
                      currentProject.amountToRaise) *
                    100
                  : '100'
              }
              borderRadius={'10px'}
              height={'4px'}
            />
            <SpacerLarge />
            <Flex direction="row" fontSize="20px">
              <Spacer />
              <Flex direction="column" textAlign="center">
                <Text fontWeight="bold">{currentProject.nbDonations}</Text>
                <Text>Donors</Text>
              </Flex>
              <Spacer />
              <Flex direction="column" textAlign="center">
                <Text fontWeight="bold">
                  ${currentProject.amountToRaise - currentProject.amountRaised}
                </Text>
                <Text>Required</Text>
              </Flex>
              <Spacer />
              <Flex direction="column" textAlign="center">
                <Text fontWeight="bold">
                  {(
                    new Date(currentProject.endAt).getDay() -
                    new Date().getDay()
                  ).toLocaleString()}
                </Text>
                <Text>Days left</Text>
              </Flex>
              <Spacer />
            </Flex>
            <SpacerLarge />
            <Button bg={useColorModeValue('var(--white)', 'var(--black)')}>
              Donate
            </Button>
            <SpacerSmall />
            <Flex direction="row">
              <Box bg="#C4C4C4" width="40%">
                <Center>
                  <Flex direction="row" alignItems="center" margin="3px">
                    <Image src={ArchiveBox} height="30px" />
                    <Text color="#504D4D">Save</Text>
                  </Flex>
                </Center>
              </Box>
              <Spacer />
              <HStack direction="row" alignItems="center">
                <Spacer />
                <FiMail />
                <Spacer />
                <FiTwitter />
                <Spacer />
                <FiInstagram />
                <Spacer />
                <FiFacebook />
                <Spacer />
              </HStack>
            </Flex>
          </Flex>
        </Box>
        <SpacerSmall />
        <Text fontSize="12px" textAlign="justify">
          This project will only be funded if it reaches its minimum Target by{' '}
          {new Date(currentProject.endAt).toLocaleDateString()}.
        </Text>

        <Spacer />
      </Flex>
    </>
  )
}

export default Campaigninfo

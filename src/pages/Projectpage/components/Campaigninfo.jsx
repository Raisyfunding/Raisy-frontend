import ArchiveBox from '../../../images/ArchiveBox.png';
import {
  SpacerLarge,
  SpacerXSmall,
  SpacerSmall,
} from '../../../styles/globalStyles';
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
  Link,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';
import { FiMail, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import { GrValidate } from 'react-icons/gr';

function Campaigninfo({ currentProject, fundingover }) {
  const color = useColorModeValue('var(--white)', 'var(--black)');

  return (
    <>
      {fundingover ? (
        currentProject.amountToRaise - currentProject.amountRaised > 0 ? (
          <Flex direction="column">
            <Box bg="#504D4D">
              <Flex direction="column" height="100%" padding="15px">
                <Text textAlign="center" fontSize="26px" fontWeight="bold">
                  {' '}
                  Campaign's funding didn't reach its goal
                </Text>
                <SpacerSmall />
                <Text fontSize="15px" textAlign="center">
                  <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    {currentProject.amountRaised}${' '}
                  </span>{' '}
                  raised, the target was {currentProject.amountToRaise}$
                </Text>

                <SpacerXSmall />

                <SpacerLarge />

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

            <Spacer />
          </Flex>
        ) : (
          <Flex direction="column">
            <Box bg="#504D4D">
              <Flex direction="column" height="100%" padding="15px">
                <Text textAlign="center" fontSize="26px" fontWeight="bold">
                  {' '}
                  Campaign has been funded !
                </Text>

                <Text fontSize="15px" textAlign="center">
                  Congratulations to all participants,{' '}
                  <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    {currentProject.amountRaised}${' '}
                  </span>{' '}
                  have been raised for a target of{' '}
                  {currentProject.amountToRaise}$
                </Text>

                <SpacerXSmall />
                {/* nbMilestones: 0
pctReleasePerMilestone: [] */}

                <Flex direction="row" fontSize="20px">
                  <Spacer />
                  <Flex direction="column" textAlign="center">
                    <Text fontWeight="bold">{currentProject.nbDonations}</Text>
                    <Text>Donations</Text>
                  </Flex>
                  <Spacer />
                  <Flex direction="column" textAlign="center">
                    <Text fontWeight="bold">
                      ${currentProject.amountRaised}
                    </Text>
                    <Text>Raised</Text>
                  </Flex>
                  <Spacer />
                  <Flex direction="column" textAlign="center">
                    <Text fontWeight="bold">${537222}</Text>
                    <Text>Relesead</Text>
                  </Flex>
                  <Spacer />
                </Flex>

                <SpacerLarge />

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

            <Spacer />
          </Flex>
        )
      ) : (
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
                  <Text>Donations</Text>
                </Flex>
                <Spacer />
                <Flex direction="column" textAlign="center">
                  <Text fontWeight="bold">
                    $
                    {currentProject.amountToRaise - currentProject.amountRaised}
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
              <Link
                as={RouterLink}
                to={`/campaign/${currentProject.campaignId}/donate`}
              >
                <Button bg={color} width="100%">
                  Donate
                </Button>
              </Link>
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
            This project will only be funded if it reaches its minimum Target by
            <br /> {new Date(currentProject.endAt).toString()}.
          </Text>

          <Spacer />
        </Flex>
      )}
    </>
  );
}

export default Campaigninfo;

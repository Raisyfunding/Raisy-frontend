import ArchiveBox from '../../../images/ArchiveBox.png';
import Marquee from 'react-fast-marquee';
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
import decentralizedwhite from '../../../images/decentralized_white.png';
import decentralizedblack from '../../../images/decentralized_black.png';

import { Link as RouterLink } from 'react-router-dom';
import { FiMail, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
// import { GrValidate } from 'react-icons/gr';
// import { useState, useEffect } from 'react';
// import { useApi } from '../../../api';

function Campaigninfo({ currentProject, fundingover, schedule }) {
  const color = useColorModeValue('var(--white)', 'var(--black)');
  const currentBackground = useColorModeValue(
    'rgba(255,255,255,1)',
    'rgba(21,21,21,.64)'
  );
  const currentBorder = useColorModeValue(
    'rgba(235, 235, 235, 1)',
    'rgba(25,25,25,1)'
  );

  return (
    <>
      {fundingover ? (
        currentProject.amountToRaise - currentProject.amountRaised < 0 ? (
          <>
            <Marquee gradient={false}>
              {' '}
              <Flex
                _hover={{ opacity: '0.8' }}
                width={'300 px'}
                height={'200px'}
                backgroundColor={currentBackground}
                borderRadius={'50px'}
                border={'1px solid'}
                borderColor={currentBorder}
                padding={'20px'}
                flexDirection={'row'}
                gridGap={'20px'}
              >
                <Flex
                  backgroundColor={currentBackground}
                  margin="auto"
                  width={'80px'}
                  height={'80px'}
                  borderRadius={'full'}
                >
                  <Image
                    src={decentralizedwhite}
                    width={'50px'}
                    height={'50px'}
                    margin={'auto'}
                  />
                </Flex>
                <Text
                  fontSize={'4xl'}
                  fontWeight={'900'}
                  marginTop={'auto'}
                  marginBottom={'auto'}
                >
                  The fund target <br />{' '}
                  <span
                    style={{
                      textAlign: 'center',
                      background:
                        '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                      webkitBackgroundClip: 'text',
                      webkitTextFillColor: 'transparent',
                    }}
                  >
                    was not met
                  </span>
                </Text>
              </Flex>
              <Flex
                _hover={{ opacity: '0.8' }}
                width={'300 px'}
                height={'200px'}
                backgroundColor={currentBackground}
                borderRadius={'50px'}
                border={'1px solid'}
                borderColor={currentBorder}
                padding={'20px'}
                flexDirection={'row'}
                gridGap={'20px'}
              >
                <Flex
                  backgroundColor={currentBackground}
                  margin="auto"
                  width={'80px'}
                  height={'80px'}
                  borderRadius={'full'}
                >
                  <Image
                    src={decentralizedwhite}
                    width={'50px'}
                    height={'50px'}
                    margin={'auto'}
                  />
                </Flex>
                <Text
                  fontSize={'4xl'}
                  fontWeight={'900'}
                  marginTop={'auto'}
                  marginBottom={'auto'}
                >
                  The fund target <br />{' '}
                  <span
                    style={{
                      textAlign: 'center',
                      background:
                        '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                      webkitBackgroundClip: 'text',
                      webkitTextFillColor: 'transparent',
                    }}
                  >
                    was not met
                  </span>
                </Text>
              </Flex>
            </Marquee>
            <Flex direction="column">
              <Box bg="#27292b" borderRadius="15px">
                <Flex direction="column" height="100%" padding="15px">
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
          </>
        ) : (
          <Flex direction="column">
            <Box bg="#27292b" borderRadius="15px">
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
                </Flex>
                {currentProject.nbMilestones && schedule && (
                  <>
                    <Text pb={2} mt={5}>
                      Funds Released
                    </Text>
                    <Progress
                      value={currentProject.pctReleasePerMilestone.reduce(
                        (acc, cur, idx) =>
                          idx < schedule.currentMilestone ? acc + cur : acc,
                        0
                      )}
                      borderRadius={'10px'}
                      height={'4px'}
                      colorScheme="green"
                    />
                  </>
                )}

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
          <Box bg="#27292b" borderRadius="15px">
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

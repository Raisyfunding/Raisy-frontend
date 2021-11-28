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
// import { GrValidate } from 'react-icons/gr';
// import { useState, useEffect } from 'react';
// import { useApi } from '../../../api';

<<<<<<< Updated upstream
function Campaigninfo({ currentProject, fundingover, schedule }) {
  const color = useColorModeValue('var(--white)', 'var(--black)');
=======
function Campaigninfo({ currentProject, fundingover, schedule, voteSession }) {
  // const color = useColorModeValue('var(--white)', 'var(--black)');
  const currentBackground = useColorModeValue(
    'rgba(255,255,255,1)',
    'rgba(21,21,21,.64)'
  );
  const currentBorder = useColorModeValue(
    'rgba(235, 235, 235, 1)',
    'rgba(25,25,25,1)'
  );
  // const currentIcon = useColorModeValue(
  //   'rgba(250,250,250,1)',
  //   'rgba(25,25,25,1)'
  // );
  const currentProgress = useColorModeValue(
    'rgba(230,230,230,1)',
    'rgba(25,25,25,1)'
  );
>>>>>>> Stashed changes

  return (
    <>
      {fundingover ? (
        currentProject.amountToRaise - currentProject.amountRaised > 0 ? (
          <Flex direction="column">
            <Box bg="#27292b" borderRadius="15px">
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
<<<<<<< Updated upstream
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
=======
          <>
            {voteSession && voteSession.numUnsuccessfulVotes === 3 ? (
              <>
                {' '}
                <Flex
                  _hover={{ opacity: '0.8' }}
                  width={'-webkit-fill-available'}
                  backgroundColor={currentBackground}
                  borderRadius={'50px'}
                  border={'1px solid'}
                  borderColor={currentBorder}
                  padding={'30px'}
                  flexDirection={'column'}
                >
                  <Text
                    fontSize={'4xl'}
                    fontWeight={'900'}
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <span
                      style={{
                        textAlign: 'right',
                        background:
                          '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      Funds released failed.
                    </span>{' '}
                    <br />
                  </Text>
                  <Text
                    fontSize={'1xl'}
                    fontWeight={'900'}
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    All donors are being refunds !
                  </Text>
                </Flex>
                <Flex
                  width={'-webkit-fill-available'}
                  gridGap={'20px'}
                  paddingTop={'20px'}
                  flexDirection={'row'}
                  marginBottom={'30px'}
                >
                  <Flex
                    _hover={{ opacity: '0.8' }}
                    width={'-webkit-fill-available'}
                    background={
                      'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))'
                    }
                    borderRadius={'50px'}
                    padding={'20px'}
                    flexDirection={'column'}
                  >
                    {' '}
                    <Text
                      fontSize={{ base: '5xl', md: '4xl', lg: '5xl' }}
                      fontWeight={'900'}
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      {currentProject.nbDonations}
                      <br />
                    </Text>{' '}
                    <Text
                      fontSize={'1xl'}
                      fontWeight={'900'}
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      Donations
                    </Text>
                  </Flex>
                  <Flex
                    _hover={{ opacity: '0.8' }}
                    width={'-webkit-fill-available'}
                    backgroundColor={currentBackground}
                    borderRadius={'50px'}
                    border={'1px solid'}
                    borderColor={currentBorder}
                    padding={'20px'}
                    flexDirection={'column'}
                  >
                    <Text
                      fontSize={{ base: '5xl', md: '4xl', lg: '5xl' }}
                      fontWeight={'900'}
                      style={{
                        textAlign: 'center',
                        background:
                          '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      {currentProject.amountRaised}$
                      <br />
                    </Text>{' '}
                    <Text
                      fontSize={'1xl'}
                      fontWeight={'900'}
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      Raised
                    </Text>
                    <Text
                      fontSize={'1xl'}
                      fontWeight={'900'}
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      out of {currentProject.amountToRaise}$
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  _hover={{ opacity: '0.8' }}
                  width={'-webkit-fill-available'}
                  height={'-webkit-fit-content'}
                  backgroundColor={currentBackground}
                  borderRadius={'50px'}
                  border={'1px solid'}
                  borderColor={'var(--blue)'}
                  padding={'20px'}
                  flexDirection={'column'}
                  marginBottom={'20px'}
                >
                  {' '}
                  <Text
                    fontSize={'4xl'}
                    fontWeight={'900'}
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    Funds Released
                  </Text>
                  {currentProject.nbMilestones && schedule && (
                    <>
                      <CircularProgress
                        value={currentProject.pctReleasePerMilestone.reduce(
                          (acc, cur, idx) =>
                            idx < schedule.currentMilestone ? acc + cur : acc,
                          0
                        )}
                        color="var(--blue)"
                        thickness="5px"
                        size={{ base: '150px', md: '100px', lg: '150px' }}
                        margin={'auto'}
                        trackColor={currentProgress}
                      >
                        {' '}
                        <CircularProgressLabel margin={'auto'}>
                          {currentProject.pctReleasePerMilestone.reduce(
                            (acc, cur, idx) =>
                              idx < schedule.currentMilestone ? acc + cur : acc,
                            0
                          )}
                          %
                        </CircularProgressLabel>
                      </CircularProgress>
                    </>
                  )}
                </Flex>
              </>
            ) : (
              <>
                {' '}
                <Flex
                  _hover={{ opacity: '0.8' }}
                  width={'-webkit-fill-available'}
                  backgroundColor={currentBackground}
                  borderRadius={'50px'}
                  border={'1px solid'}
                  borderColor={currentBorder}
                  padding={'30px'}
                  flexDirection={'column'}
                >
                  <Text
                    fontSize={'4xl'}
                    fontWeight={'900'}
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <span
                      style={{
                        textAlign: 'right',
                        background:
                          '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      Campaign funded.
                    </span>{' '}
                    <br />
                  </Text>
                  <Text
                    fontSize={'1xl'}
                    fontWeight={'900'}
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    Congratulations to the participants!
                  </Text>
                </Flex>
                <Flex
                  width={'-webkit-fill-available'}
                  gridGap={'20px'}
                  paddingTop={'20px'}
                  flexDirection={'row'}
                  marginBottom={'30px'}
                >
                  <Flex
                    _hover={{ opacity: '0.8' }}
                    width={'-webkit-fill-available'}
                    background={
                      'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))'
                    }
                    borderRadius={'50px'}
                    padding={'20px'}
                    flexDirection={'column'}
                  >
                    {' '}
                    <Text
                      fontSize={{ base: '5xl', md: '4xl', lg: '5xl' }}
                      fontWeight={'900'}
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      {currentProject.nbDonations}
                      <br />
                    </Text>{' '}
                    <Text
                      fontSize={'1xl'}
                      fontWeight={'900'}
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      Donations
                    </Text>
                  </Flex>
                  <Flex
                    _hover={{ opacity: '0.8' }}
                    width={'-webkit-fill-available'}
                    backgroundColor={currentBackground}
                    borderRadius={'50px'}
                    border={'1px solid'}
                    borderColor={currentBorder}
                    padding={'20px'}
                    flexDirection={'column'}
                  >
                    <Text
                      fontSize={{ base: '5xl', md: '4xl', lg: '5xl' }}
                      fontWeight={'900'}
                      style={{
                        textAlign: 'center',
                        background:
                          '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      {currentProject.amountRaised}$
                      <br />
                    </Text>{' '}
                    <Text
                      fontSize={'1xl'}
                      fontWeight={'900'}
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      Raised
                    </Text>
                    <Text
                      fontSize={'1xl'}
                      fontWeight={'900'}
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      out of {currentProject.amountToRaise}$
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  _hover={{ opacity: '0.8' }}
                  width={'-webkit-fill-available'}
                  height={'-webkit-fit-content'}
                  backgroundColor={currentBackground}
                  borderRadius={'50px'}
                  border={'1px solid'}
                  borderColor={'var(--blue)'}
                  padding={'20px'}
                  flexDirection={'column'}
                  marginBottom={'20px'}
                >
                  {' '}
                  <Text
                    fontSize={'4xl'}
                    fontWeight={'900'}
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    Funds Released
                  </Text>
                  {currentProject.nbMilestones && schedule && (
                    <>
                      <CircularProgress
                        value={currentProject.pctReleasePerMilestone.reduce(
                          (acc, cur, idx) =>
                            idx < schedule.currentMilestone ? acc + cur : acc,
                          0
                        )}
                        color="var(--blue)"
                        thickness="5px"
                        size={{ base: '150px', md: '100px', lg: '150px' }}
                        margin={'auto'}
                        trackColor={currentProgress}
                      >
                        {' '}
                        <CircularProgressLabel margin={'auto'}>
                          {currentProject.pctReleasePerMilestone.reduce(
                            (acc, cur, idx) =>
                              idx < schedule.currentMilestone ? acc + cur : acc,
                            0
                          )}
                          %
                        </CircularProgressLabel>
                      </CircularProgress>
                    </>
                  )}
                </Flex>
              </>
            )}
          </>
>>>>>>> Stashed changes
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

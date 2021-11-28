import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { Flex, Text, Button, useColorModeValue, Link } from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';
// import { GrValidate } from 'react-icons/gr';
// import { useState, useEffect } from 'react';
// import { useApi } from '../../../api';

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

  return (
    <>
      {fundingover ? (
        currentProject.amountToRaise - currentProject.amountRaised > 0 ? (
          <>
            <Flex
              _hover={{ opacity: '0.8' }}
              width={'-webkit-fill-available'}
              backgroundColor={currentBackground}
              borderRadius={'50px'}
              border={'1px solid'}
              borderColor={currentBorder}
              padding={'30px'}
              flexDirection={'column'}
              height={{ base: '-webkit-fit-content', lg: '200px' }}
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
                  This Campaign is over
                </span>{' '}
                <br />
              </Text>
              <Text
                fontSize={'1xl'}
                fontWeight={'900'}
                margin={'auto'}
                style={{
                  textAlign: 'center',
                }}
              >
                The fund target was not met.
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
                  {currentProject.amountToRaise - currentProject.amountRaised}$
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
                Were missing.
              </Text>
            </Flex>
          </>
        ) : (
          <>
            {voteSession?.numUnsuccessfulVotes >= 3 ? (
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
                    Funds Release failed.
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
                  All participants can get their funds back.
                </Text>
              </Flex>
            ) : (
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
            )}

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
              {currentProject.nbMilestones && schedule ? (
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
              ) : (
                <CircularProgress
                  value={'100'}
                  color="var(--blue)"
                  thickness="5px"
                  size={{ base: '150px', md: '100px', lg: '150px' }}
                  margin={'auto'}
                  trackColor={currentProgress}
                >
                  {' '}
                  <CircularProgressLabel margin={'auto'}>
                    100 %
                  </CircularProgressLabel>
                </CircularProgress>
              )}
            </Flex>
          </>
        )
      ) : (
        <>
          <Flex
            _hover={{ opacity: '0.8' }}
            width={'-webkit-fill-available'}
            height={'180px'}
            backgroundColor={currentBackground}
            borderRadius={'50px'}
            border={'1px solid'}
            borderColor={'var(--blue)'}
            padding={'20px'}
            flexDirection={'column'}
          >
            {' '}
            <Text
              fontSize={'4xl'}
              fontWeight={'900'}
              style={{
                textAlign: 'center',
              }}
            >
              Funding progression
            </Text>
            <CircularProgress
              value={
                currentProject.amountRaised / currentProject.amountToRaise < 1
                  ? (currentProject.amountRaised /
                      currentProject.amountToRaise) *
                    100
                  : '100'
              }
              color="var(--blue)"
              thickness="5px"
              size={'90px'}
              margin={'auto'}
              trackColor={currentProgress}
            >
              {' '}
              <CircularProgressLabel margin={'auto'}>
                {currentProject.amountRaised / currentProject.amountToRaise < 1
                  ? Math.round(
                      (currentProject.amountRaised /
                        currentProject.amountToRaise) *
                        100
                    )
                  : '100'}
                %
              </CircularProgressLabel>
            </CircularProgress>
          </Flex>
          <Flex
            width={'-webkit-fill-available'}
            gridGap={'20px'}
            paddingTop={'20px'}
            flexDirection={'row'}
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
                fontSize={'5xl'}
                fontWeight={'900'}
                style={{
                  textAlign: 'center',
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
            </Flex>
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
              background={currentBackground}
              border={'1px solid'}
              borderColor={currentBorder}
              borderRadius={'50px'}
              padding={'20px'}
              flexDirection={'column'}
            >
              {' '}
              <Text
                fontSize={'5xl'}
                fontWeight={'900'}
                style={{
                  textAlign: 'center',
                  background:
                    '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                  webkitBackgroundClip: 'text',
                  webkitTextFillColor: 'transparent',
                }}
              >
                {(
                  new Date(currentProject.endAt).getDay() - new Date().getDay()
                ).toLocaleString()}
                <br />
              </Text>{' '}
              <Text
                fontSize={'1xl'}
                fontWeight={'900'}
                style={{
                  textAlign: 'center',
                }}
              >
                Days Left
              </Text>
            </Flex>
            <Flex
              _hover={{ opacity: '0.8' }}
              width={'-webkit-fill-available'}
              backgroundColor={currentBackground}
              borderRadius={'50px'}
              border={'1px solid'}
              borderColor={'var(--blue)'}
              padding={'20px'}
              flexDirection={'column'}
            >
              <Text
                fontSize={'5xl'}
                fontWeight={'900'}
                style={{
                  textAlign: 'center',
                }}
              >
                {currentProject.amountToRaise}$
                <br />
              </Text>{' '}
              <Text
                fontSize={'1xl'}
                fontWeight={'900'}
                style={{
                  textAlign: 'center',
                }}
              >
                Goal
              </Text>
            </Flex>
          </Flex>
          <Link
            as={RouterLink}
            to={`/campaign/${currentProject.campaignId}/donate`}
          >
            <Button
              width={'-webkit-fill-available'}
              height={'60px'}
              margin={'auto'}
              borderRadius={'50px'}
              color={'black'}
              background={
                'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))'
              }
              _hover={{
                opacity: 0.8,
                background:
                  'linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
              }}
            >
              Donate
            </Button>
          </Link>
          <Text fontSize="12px" textAlign="center" marginTop={'20px'}>
            *This project will only be funded if it reaches its minimum Target
            by
            <br /> {new Date(currentProject.endAt).toString()}.
          </Text>
        </>
      )}
    </>
  );
}

export default Campaigninfo;

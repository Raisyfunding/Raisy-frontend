import React, { useEffect } from 'react';
import { Text, Box, Center, HStack, VStack } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import Countdown from 'react-countdown';
import { toLower } from 'lodash';

const VoteSession = ({ currentProject, fundingover }) => {
  const { account } = useWeb3React();

  return (
    <div>
      {currentProject.nbMilestones ? (
        <div>
          {toLower(account) === currentProject.creator ? (
            <div></div>
          ) : (
            <div>
              <Box>
                <Box height="25px" />
                <Text fontSize="3xl" textAlign="center" fontWeight="bold">
                  {' '}
                  The vote session is live
                </Text>
                <Box height="25px" />
                <Center>
                  <Text fontSize="1xl" textAlign="center" width="80%">
                    {' '}
                    The campaign creator asked for a{' '}
                    <span style={{ fontWeight: 'bold' }}>20%</span> funds
                    release, if most of the users vote to interrupt it during
                    the meantime, the request will be canceled. 3 consecutives
                    failed request will give a refund of all donors.
                  </Text>
                </Center>
                <Box height="25px" />
                <Center>
                  <HStack>
                    <Box>
                      <VStack>
                        <Text fontSize="3xl">256</Text>
                        <Text fontSize="2xl">Total Donors</Text>
                      </VStack>
                    </Box>
                    <Box width="50px" />
                    <Box>
                      <VStack>
                        <Text fontSize="3xl">12</Text>
                        <Text fontSize="2xl">Total votes</Text>
                      </VStack>
                    </Box>
                  </HStack>
                </Center>
                <Box height="50px" />
                <Center>
                  <Box bg="gray.800" onClick={{}} width="50%">
                    <Text margin="10px" textAlign="center">
                      Vote here to cancel the funds release request{' '}
                    </Text>
                  </Box>
                </Center>
                <Center>
                  <Text textAlign="center" width="50%" marginTop="10px">
                    Only donation proof owners of this campaign will be able to
                    vote against this funds release request
                  </Text>
                </Center>
                <Box height="20px" />
                <Center>
                  <Countdown date={Date.now() + 10000000} />
                </Center>

                <Box height="50px" />
              </Box>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default VoteSession;

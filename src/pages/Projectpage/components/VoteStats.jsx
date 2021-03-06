import React from 'react';
import { Text, Box, HStack, VStack } from '@chakra-ui/react';

function VoteStats({ voteSession }) {
  if (!voteSession) return <></>;

  return (
    <>
      <HStack spacing="auto">
        <Box>
          <VStack>
            <Text fontSize="3xl">{voteSession.nbVotes}</Text>
            <Text fontSize="2xl">Votes</Text>
          </VStack>
        </Box>
        <Box>
          <VStack>
            <Text fontSize="3xl">{voteSession.numUnsuccessfulVotes}</Text>
            <Text fontSize="2xl">Tries</Text>
          </VStack>
        </Box>

        <VStack>
          <Text fontSize="3xl">{voteSession.voteRatio}</Text>
          <Text fontSize="2xl">Vote Ratio</Text>
        </VStack>
      </HStack>
    </>
  );
}

export default VoteStats;

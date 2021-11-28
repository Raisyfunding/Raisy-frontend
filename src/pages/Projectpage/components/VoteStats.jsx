import React from 'react';
import { Text, Box, HStack, VStack } from '@chakra-ui/react';

function VoteStats({ voteSession }) {
  return (
    <div>
      <HStack spacing="auto">
        <Box>
          <VStack>
            <Text fontSize="3xl">{voteSession.nbVotes}</Text>
            <Text fontSize="2xl">Votes</Text>
          </VStack>
        </Box>
        {/* <Box>
          <VStack>
            <Text fontSize="3xl">256</Text>
            <Text fontSize="2xl">Total Votes</Text>
          </VStack>
        </Box> */}

        <VStack>
          <Text fontSize="3xl">{voteSession.voteRatio}</Text>
          <Text fontSize="2xl">Vote Ratio</Text>
        </VStack>
      </HStack>
    </div>
  );
}

export default VoteStats;

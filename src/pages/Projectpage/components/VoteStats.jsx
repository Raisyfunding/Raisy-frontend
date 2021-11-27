import React from 'react';
import { Text, Box, HStack, VStack } from '@chakra-ui/react';

function VoteStats({ voteSession }) {
  return (
    <div>
      {console.log(voteSession)}
      <HStack spacing="auto">
        <Box>
          <VStack>
            <Text fontSize="3xl">900</Text>
            <Text fontSize="2xl">Donors</Text>
          </VStack>
        </Box>
        <Box>
          <VStack>
            <Text fontSize="3xl">256</Text>
            <Text fontSize="2xl">Vote ratio</Text>
          </VStack>
        </Box>
        {voteSession ? (
          <Box>
            <VStack>
              <Text fontSize="3xl">{voteSession.voteRatio}</Text>
              <Text fontSize="2xl">Vote ratio</Text>
            </VStack>
          </Box>
        ) : (
          <VStack>
            <Text fontSize="3xl">29</Text>
            <Text fontSize="2xl">Vote ratio</Text>
          </VStack>
        )}
      </HStack>
    </div>
  );
}

export default VoteStats;

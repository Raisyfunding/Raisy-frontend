import { Image } from '@chakra-ui/image';
import { Flex, Text, Box, Center, Spacer } from '@chakra-ui/layout';
import { SpacerLarge } from '../../styles/globalStyles';
import React from 'react';
import { Screen } from '../../styles/globalStyles';
import { useColorModeValue } from '@chakra-ui/react';
import cat from '../../images/cryptokitties.jpg';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

function User() {
  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue('var(--white)', 'var(--black)'),
      }}
    >
      <Flex direction="column" marginTop="2%" marginLeft="8%" marginRight="8%">
        <Flex direction="row">
          <Spacer />
          <Flex direction="column" width="400px">
            <Box width="100%">
              <Image src={cat} borderRadius="full" />
            </Box>
            <Box height="20px" />
            <Center>
              <Box>
                <Text fontWeight="bold" fontSize="5xl" textAlign="center">
                  Jerry the Cat
                </Text>
                <Text fontSize="1xl" textAlign="center">
                  0x70f5...EB37
                </Text>
              </Box>
            </Center>
          </Flex>
          <Spacer />
          <Flex direction="column">
            <Box width="400px">
              <Text fontWeight="bold" fontSize="3xl" textAlign="center">
                {' '}
                User Stats
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Total donated</Td>
                    <Td isNumeric>8664$</Td>
                  </Tr>
                  <Tr>
                    <Td>Campaign supported</Td>

                    <Td isNumeric>0</Td>
                  </Tr>
                  <Tr>
                    <Td>Campaign created</Td>

                    <Td isNumeric>0</Td>
                  </Tr>
                  <Tr>
                    <Td>User grade</Td>
                    <Td isNumeric>Gold</Td>
                  </Tr>
                </Tbody>
              </Table>
              <Box height="55px" />
              <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                  <Tab>POD collection</Tab>
                  <Tab>Campaign supported</Tab>
                  <Tab>Collection created</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <p>one!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Flex>
          <Spacer />
        </Flex>
      </Flex>
    </Screen>
  );
}

export default User;

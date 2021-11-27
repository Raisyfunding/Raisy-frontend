import { Image } from '@chakra-ui/image';
import { Text, Center, Spacer } from '@chakra-ui/layout';
import { SpacerLarge } from '../../styles/globalStyles';
import React from 'react';
import { Screen } from '../../styles/globalStyles';
import { useColorModeValue, Flex, HStack, VStack, Box } from '@chakra-ui/react';
import cat from '../../images/cryptokitties.jpg';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { FiMail, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

function User() {
  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue('var(--white)', 'var(--black)'),
      }}
    >
      <Box marginTop="2%" marginLeft="10%" marginRight="10%">
        <Spacer />
        <Flex direction="row">
          <Box width="40%">
            <Image src={cat} borderRadius="full" width="100%" />
            <Center>
              <Box>
                <Text fontWeight="bold" fontSize="4xl" textAlign="center">
                  Jerry the Cat
                </Text>
                <Text fontSize="1xl" textAlign="center">
                  0x70f5...EB37
                </Text>

                <Box height="20px" />
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
                <Box height="20px" />
                <Center>
                  <Flex direction="row" height="10%">
                    <Flex direction="column">
                      <Text textAlign="center">Followers</Text>
                      <Text fontWeight="bold" fontSize="5x1" textAlign="center">
                        114
                      </Text>
                    </Flex>
                    <Box width="30px" />
                    <Flex direction="column">
                      <Text textAlign="center">Following</Text>
                      <Text fontWeight="bold" fontSize="5x1" textAlign="center">
                        8
                      </Text>
                    </Flex>
                  </Flex>
                </Center>
                <Box height="30px" />
                <Text>
                  {' '}
                  Lorem ipsum dolor sit amet. Et deserunt fugit ut velit
                  blanditiis est mollitia assumenda. Ut dolorem labore et
                  repudiandae perferendis rem harum magni id eligendi sequi sed
                  aliquid explicabo et nulla quibusdam et accusamus excepturi.
                </Text>
              </Box>
            </Center>
          </Box>
          <Spacer />
          <Box width="40%">
            <Box>
              <SpacerLarge />
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
              <SpacerLarge />
              <SpacerLarge />
              <SpacerLarge />
              <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                  <Tab>Activity</Tab>
                  <Tab>POD Galery</Tab>
                  <Tab>Collections created</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <p>
                      Donation + lancement de campagne + follwing + commentaires
                    </p>
                  </TabPanel>
                  <TabPanel></TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
          <Spacer />
        </Flex>
        <Box height="10px" />

        <Box height="80px" />
      </Box>
    </Screen>
  );
}

export default User;

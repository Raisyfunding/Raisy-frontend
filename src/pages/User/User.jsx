import { Image } from '@chakra-ui/image';
import { Text, Center, Spacer } from '@chakra-ui/layout';
import { SpacerLarge } from '../../styles/globalStyles';
import React, { useEffect, useState } from 'react';
import { Screen } from '../../styles/globalStyles';
import { useColorModeValue, Flex, HStack, Box } from '@chakra-ui/react';
import cat from '../../images/cryptokitties.jpg';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { FiMail, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import { useWeb3React } from '@web3-react/core';
import { useNftContract } from '../../contracts';
import useTokens from './../../hooks/useTokens';
import { ethers } from 'ethers';
import { shortenAddress } from '../../utils';
import { useHistory } from 'react-router-dom';

function User() {
  const { account } = useWeb3React();

  const [proofsOfDonation, setProofsOfDonation] = useState([]);

  const { getProofsOfDonation } = useNftContract();

  const { tokens } = useTokens();

  const history = useHistory();

  const color = useColorModeValue('rgba(255,255,255,1)', 'rgba(21,21,21,.64)');

  useEffect(() => {
    if (account) {
      getProofsOfDonation(account).then((_pods) => {
        setProofsOfDonation(_pods);
      });
    }
  }, [account]);

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
                  {shortenAddress(account)}
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
          <Box width="50%">
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
                  <Tab>Proofs Of Donation</Tab>
                  <Tab>Activity</Tab>
                  <Tab>Your Campaigns</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Flex _hover={{ cursor: 'pointer' }}>
                      {proofsOfDonation.map((_pod) => (
                        <Flex
                          margin={'auto'}
                          width={'300px'}
                          height={'auto'}
                          backgroundColor={color}
                          borderRadius={'50px'}
                          border={'1px solid'}
                          borderColor={color}
                          padding={'20px'}
                          flexDirection={'column'}
                          _hover={{ opacity: '0.8' }}
                          onClick={() =>
                            history.replace(
                              `/campaign/${parseInt(_pod.campaignId._hex)}`
                            )
                          }
                        >
                          <Text
                            paddingTop={'15px'}
                            textAlign={'justify'}
                            fontSize="xl"
                          >
                            Campaign {parseInt(_pod.campaignId._hex)}
                          </Text>
                          {/* <Text paddingTop={"15px"} textAlign={"justify"}>
                        {campaign.description}
                      </Text> */}
                          <Text paddingTop={'15px'} textAlign={'justify'}>
                            Donated {ethers.utils.formatEther(_pod.amount)} in{' '}
                            {
                              tokens.find(
                                (token) => _pod.tokenUsed === token.address
                              ).symbol
                            }
                          </Text>
                          <Text
                            paddingTop={'15px'}
                            paddingBottom={'15px'}
                            textAlign={'justify'}
                          >
                            Donated at{' '}
                            {new Date(
                              parseInt(_pod.creationTimestamp._hex) * 1000
                            ).toString()}
                          </Text>
                        </Flex>
                      ))}
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <p>User Activity</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Campaigns created by the user</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
          <Spacer />
        </Flex>
      </Box>
    </Screen>
  );
}

export default User;

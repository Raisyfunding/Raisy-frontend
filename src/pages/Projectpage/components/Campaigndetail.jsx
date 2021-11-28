import { Flex, Text, Box, Center } from '@chakra-ui/layout';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from '@chakra-ui/react';
import VoteSession from './VoteSession';
import Campaigninfo from './Campaigninfo';
import React from 'react';
import Fundsrelease from './Fundsrelease';
import DonationStats from './DonationStats';
import ClaimPOD from './ClaimPOD';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Campaigndetail({
  currentProject,
  fundingover,
  schedule,
  voteSession,
}) {
  const markdown = `Just a link: https://reactjs.com.`;
  const currentBackground = useColorModeValue(
    'rgba(255,255,255,1)',
    'rgba(21,21,21,.64)'
  );
  const currentBorder = useColorModeValue(
    'rgba(235, 235, 235, 1)',
    'rgba(25,25,25,1)'
  );
  return (
    <Box width={'100vw'} height="100vh">
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Flex
          direction="column"
          width={{ base: '100vw', md: '40vw' }}
          padding={'40px'}
        >
          <Campaigninfo
            currentProject={currentProject}
            fundingover={fundingover}
            schedule={schedule}
          />
        </Flex>
        <Flex
          padding={{ base: '20ox', md: '15px' }}
          direction="column"
          borderRadius={'50px'}
          width={{ base: '91vw', md: '57vw' }}
          height="88vh"
          marginRight="auto"
          marginLeft="auto"
          background={currentBackground}
          border={'1px solid'}
          borderColor={currentBorder}
        >
          <Tabs
            variant="soft-rounded"
            colorScheme={'grey.500'}
            overflow={'hidden'}
          >
            <Center>
              <TabList width="100%" paddingTop={'5px'}>
                <Tab
                  height={'60px'}
                  _selected={{ color: 'white', bg: 'var(--blue)' }}
                >
                  Story
                </Tab>
                <Tab
                  height={'60px'}
                  _selected={{ color: 'white', bg: 'var(--blue)' }}
                >
                  Rewards
                </Tab>
                <Tab
                  height={'60px'}
                  _selected={{ color: 'white', bg: 'var(--blue)' }}
                >
                  Creator's details
                </Tab>
                <Tab
                  height={'60px'}
                  _selected={{ color: 'white', bg: 'var(--blue)' }}
                >
                  Funds release
                </Tab>
                <Tab
                  height={'60px'}
                  _selected={{ color: 'white', bg: 'var(--blue)' }}
                >
                  Your Stats
                </Tab>
                {fundingover &&
                  currentProject.amountRaised >=
                    currentProject.amountToRaise && (
                    <Tab
                      height={'60px'}
                      _selected={{ color: 'white', bg: 'var(--blue)' }}
                    >
                      Proof of Donation
                    </Tab>
                  )}
                {fundingover && voteSession && (
                  <Tab
                    height={'60px'}
                    _selected={{ color: 'white', bg: 'var(--blue)' }}
                  >
                    Vote
                  </Tab>
                )}
              </TabList>
            </Center>
            <TabPanels>
              <TabPanel>
                <Box>
                  <Text
                    fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}
                    style={{
                      textAlign: 'center',
                      background:
                        '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                      webkitBackgroundClip: 'text',
                      webkitTextFillColor: 'transparent',
                    }}
                    fontWeight={'900'}
                    paddingBottom={'40px'}
                    margin={'auto'}
                  >
                    STORY
                  </Text>
                  <ReactMarkdown
                    children={currentProject.description}
                    remarkPlugins={[remarkGfm]}
                  />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box>
                  <Text
                    fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}
                    style={{
                      textAlign: 'center',
                      background:
                        '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                      webkitBackgroundClip: 'text',
                      webkitTextFillColor: 'transparent',
                    }}
                    fontWeight={'900'}
                    paddingBottom={'40px'}
                    margin={'auto'}
                  >
                    REWARDS
                  </Text>
                  <ReactMarkdown
                    children={markdown}
                    remarkPlugins={[remarkGfm]}
                  />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box>
                  <Text
                    fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}
                    style={{
                      textAlign: 'center',
                      background:
                        '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                      webkitBackgroundClip: 'text',
                      webkitTextFillColor: 'transparent',
                    }}
                    fontWeight={'900'}
                    paddingBottom={'40px'}
                    margin={'auto'}
                  >
                    CREATOR
                  </Text>
                  <ReactMarkdown
                    children={markdown}
                    remarkPlugins={[remarkGfm]}
                  />
                </Box>
              </TabPanel>
              <TabPanel>
                <Text
                  fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}
                  style={{
                    textAlign: 'center',
                    background:
                      '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                    webkitBackgroundClip: 'text',
                    webkitTextFillColor: 'transparent',
                  }}
                  fontWeight={'900'}
                  paddingBottom={'40px'}
                  margin={'auto'}
                >
                  FUNDS RELEASE SCHEDULE
                </Text>
                <Fundsrelease
                  currentProject={currentProject}
                  fundingover={fundingover}
                  schedule={schedule}
                />
              </TabPanel>
              <TabPanel>
                <DonationStats campaignId={currentProject.campaignId} />
              </TabPanel>
              <TabPanel>
                <ClaimPOD campaignId={currentProject.campaignId} />
              </TabPanel>
              <TabPanel>
                <VoteSession
                  currentProject={currentProject}
                  fundingover={fundingover}
                  schedule={schedule}
                  voteSession={voteSession}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Campaigndetail;

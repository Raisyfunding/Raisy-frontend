import { Flex, Text, Box, Spacer, Center } from '@chakra-ui/layout';
import { SpacerLarge, SpacerSmall } from '../../../styles/globalStyles';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
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
  return (
    <Flex direction="column" height="200vh">
      <Box marginLeft="5%" marginRight="10%" marginTop="2%">
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Flex direction="column" width="900px">
            <Tabs>
              <Center>
                <TabList width="80%">
                  <Tab>Story</Tab>
                  <Tab>Rewards</Tab>
                  <Tab>Creator's details</Tab>
                  <Tab>Funds release</Tab>
                  <Tab>Your Stats</Tab>
                  {fundingover && <Tab>Claim POD</Tab>}
                  {fundingover && currentProject.nbMilestones && (
                    <Tab>Vote</Tab>
                  )}
<<<<<<< Updated upstream
                </TabList>
              </Center>
              <TabPanels>
                <TabPanel>
                  <Box paddingLeft="100px" width="700px">
                    <ReactMarkdown
                      children={currentProject.description}
                      remarkPlugins={[remarkGfm]}
                    />
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box paddingLeft="100px" width="700px">
                    <ReactMarkdown
                      children={markdown}
                      remarkPlugins={[remarkGfm]}
                    />
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box paddingLeft="100px" width="700px">
                    <ReactMarkdown
                      children={markdown}
                      remarkPlugins={[remarkGfm]}
                    />
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Fundsrelease
                    currentProject={currentProject}
                    fundingover={fundingover}
                    schedule={schedule}
=======
                {fundingover && voteSession && (
                  <Tab
                    height={'60px'}
                    _selected={{ color: 'white', bg: 'var(--blue)' }}
                  >
                    Vote
                  </Tab>
                )}
                {fundingover &&
                  currentProject.amountRaised >=
                    currentProject.amountToRaise && (
                    <Tab
                      height={'60px'}
                      _selected={{ color: 'white', bg: 'var(--blue)' }}
                    >
                      Refund
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
>>>>>>> Stashed changes
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
                  />
<<<<<<< Updated upstream
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
          <Spacer />

          <Box width="400px" height="2000px">
            <Campaigninfo
              currentProject={currentProject}
              fundingover={fundingover}
            />
          </Box>
=======
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
>>>>>>> Stashed changes
        </Flex>
      </Box>
      <SpacerLarge />
    </Flex>
  );
}

export default Campaigndetail;

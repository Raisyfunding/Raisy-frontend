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
import RefundSession from './RefundSession';

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
                  {fundingover && currentProject.nbMilestones && (
                    <Tab>Vote</Tab>
                  )}
                  {fundingover && currentProject.nbMilestones && (
                    <Tab>Refund</Tab>
                  )}
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
                </TabPanel>
                <TabPanel>
                  <RefundSession
                    currentProject={currentProject}
                    fundingover={fundingover}
                    schedule={schedule}
                  />
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
        </Flex>
      </Box>
      <SpacerLarge />
    </Flex>
  );
}

export default Campaigndetail;

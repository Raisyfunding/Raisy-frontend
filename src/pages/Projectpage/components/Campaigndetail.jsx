import { Flex, Text, Box, Spacer, Center } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { SpacerLarge, SpacerSmall } from '../../../styles/globalStyles'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Campaigninfo from './Campaigninfo'
import React from 'react'

function Campaigndetail({ currentProject, fundingover}) {
  return (
    <Flex direction="column"  height="100vh">
      <Box marginLeft="5%" marginRight="5%" marginTop="2%">
        <Flex direction={{ base: 'column', md: 'row' }}>

          
          <Flex direction="column" width="900px">

          <Tabs>
<Center>
  <TabList width="80%">
    <Tab>Story</Tab>
    <Tab>Rewards</Tab>
    <Tab>Creator's details</Tab>
    <Tab>Funds release</Tab>
    <Tab>FAQs</Tab>
    <Tab>Timeline</Tab>
  </TabList>
</Center>
  <TabPanels>
    <TabPanel>
    <Flex direction="row">
              <Flex direction="column">
                <Text
                  marginTop="30px"
                  textDecoration="underline"
                  fontStyle="italic"
                >
                  Story
                </Text>
                <Text
                  marginTop="30px"
                  textDecoration="underline"
                  fontStyle="italic"
                >
                  Overview
                </Text>
                <Text
                  marginTop="30px"
                  textDecoration="underline"
                  fontStyle="italic"
                >
                  Features
                </Text>
              </Flex>

              <Flex direction="column" paddingLeft="100px" width="700px">
                <Box>
                  <Text fontSize="50px">Story</Text>
                  <SpacerSmall />
                  <Text fontSize="15px">{currentProject.description}</Text>
                </Box>
              </Flex>

            </Flex>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
          

          </Flex>
          <Spacer />

          <Box width="400px">
            <Campaigninfo currentProject={currentProject} fundingover={fundingover} />
          </Box>
        </Flex>
      </Box>
      <SpacerLarge />
    </Flex>
  )
}

export default Campaigndetail

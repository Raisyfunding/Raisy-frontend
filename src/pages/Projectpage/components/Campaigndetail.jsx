import { Flex, Text, Box, Spacer, Center } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { SpacerLarge, SpacerSmall } from '../../../styles/globalStyles'
import Campaigninfo from './Campaigninfo'
import React from 'react'

function Campaigndetail({ currentProject }) {
  return (
    <Flex direction="column"  height="100vh">
      <Box marginLeft="5%" marginRight="5%" marginTop="2%">
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Flex direction="column" width="900px">
            <Center>
              <Box width="100%" bg="#C4C4C440" borderRadius="15px">
                <Flex direction="row" margin="3px">
                  <Spacer />
                  <Button variant="link" fontsize="50px">
                    Campaign
                  </Button>
                  <Spacer />
                  <Button variant="link">Creator's detail</Button>
                  <Spacer />
                  <Button variant="link">Rewards</Button>
                  <Spacer />
                  <Button variant="link">FAQs</Button>
                  <Spacer />
                  <Button variant="link">Timeline</Button>
                  <Spacer />
                </Flex>
              </Box>
            </Center>

            <SpacerLarge />

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
          </Flex>
          <Spacer />
          <Box width="400px">
            <Campaigninfo currentProject={currentProject} />
          </Box>
        </Flex>
      </Box>
      <SpacerLarge />
    </Flex>
  )
}

export default Campaigndetail

// import { Image } from "@chakra-ui/image";
// import { Flex, Text, Box, Center, Spacer } from "@chakra-ui/layout";
// import { SpacerLarge } from "../../../styles/globalStyles";
// import Campaigninfo from "./Campaigninfo";
// import React, {  useState } from "react";
// import { Button } from "@chakra-ui/react"

// function Campaigndetail({ currentProject }) {
//   const [print, setPrint] = useState(0);
//   return (
//     <Flex direction="column" height='100vh'>
//         <Box width="100%" bg="#C4C4C440">
//             <Flex direction="row">
//               <Spacer />
//                 <Button variant="link" fontStyle="italic" fontWeight="bold">Button</Button>
//               <Spacer />
//                 <Button variant="link" fontStyle="italic">Button</Button>
//               <Spacer />
//                 <Button variant="link" fontStyle="italic">Button</Button>
//               <Spacer />
//                 <Button variant="link" fontStyle="italic">Button</Button>
//               <Spacer />
//                 <Button variant="link" fontStyle="italic">Button</Button>
//               <Spacer />
//             </Flex>
//         </Box>
//     </Flex>
//   );
// }

// export default Campaigndetail;

import { Flex, Text, Box, Spacer, Center } from "@chakra-ui/layout";
import { Button,Image } from "@chakra-ui/react";
import { SpacerLarge, SpacerSmall } from "../../../styles/globalStyles";
import Campaigninfo from "./Campaigninfo";
import React  from "react";
import phantom from "../../../images/phantom.png"
import citad from "../../../images/citad.png"
import alien from "../../../images/alien.png"
import { StickyContainer, Sticky } from 'react-sticky';



function Campaigndetail({ currentProject }) {
  return (
      <Flex direction="column" >
        

    <Box marginLeft="5%" marginRight="5%" marginTop="2%">
    <Flex direction={{base: "column", md: "row" }}>
      <Flex direction="column"  width="900px">
      <Center>
<Box width="100%" bg="#C4C4C440" borderRadius="15px">
  
           <Flex direction="row" margin="3px">
           
           <Spacer />
             <Button variant="link"  fontsize="50px">Campaign</Button>
            <Spacer />
              <Button variant="link">Creator's detail</Button>
              <Spacer />
                <Button variant="link" >Rewards</Button>
             <Spacer />
                <Button variant="link">FAQs</Button>
             <Spacer />
                 <Button variant="link" >Timeline</Button>
              <Spacer />
             </Flex>
      </Box>
      </Center>

      <SpacerLarge />

      <Flex direction="row">

        <Flex direction="column">
        <Text marginTop="30px" textDecoration="underline" fontStyle="italic">
          Story
        </Text>
        <Text marginTop="30px" textDecoration="underline" fontStyle="italic">
          Overview
        </Text>
        <Text marginTop="30px" textDecoration="underline" fontStyle="italic">
          Features
        </Text>
        </Flex>
        
        <Flex direction="column" paddingLeft="100px" width="700px">

        <Box >
          <Text fontSize="50px">
            Story 
            </Text>
          <SpacerSmall />
          <Text fontSize="15px">
           Mixware is a high-tech enterprise focusing on the R & D, manufacturing, and sales of innovative 3D printers. Today, we’re very excited to introduce the Mixware Hyper-S, A Desktop High-temperature FDM 3D Printer. Suitable for various types of filaments, Nylon glass fiber, Hi-temp Nylon, Nylon carbon fiber, PLA, ABS, TPU. Hyper-S provides you a more powerful, faster, larger and better printing experience.Today, we’re very excited to introduce the Mixware Hyper-S, A Desktop High-temperature FDM 3D Printer. Suitable for various types of filaments, Nylon glass fiber, Hi-temp Nylon, Nylon carbon fiber, PLA, ABS, TPU. Hyper-S provides you a more powerful, faster, larger and better printing experience
          </Text>

          <Center>
          <Image src={phantom} width="100%" marginTop="20px"/>
          </Center>
          </Box >
        
        <SpacerLarge />

        <Box >
        <Text fontSize="50px">
          Overview 
          </Text>
          <SpacerSmall />
        <Text fontSize="15px">
        Hyper-S is a desktop 3D printer for HI-TEMP & Flexible and Nylon filaments, the maximum printing temperature can reach 350℃, you are able to print with more advanced, engineering-grade materials that require higher temperatures. Making gears, hinges, or other plastic parts with superior resistance.
        </Text>
        <Center>
      <Flex direction="row" marginTop="20px">
        <Image src={alien} width="45%" />
        <Spacer />
        <Image src={citad} width="45%" />
      </Flex>
       </Center>
        </Box >

        </Flex>
        
      </Flex>
      
      </Flex>
      <Spacer />
     
      <StickyContainer >
        <Sticky>
        {() => (
            <Box width="400px">
      <Campaigninfo currentProject={currentProject}/>
      </Box>
          )}
      </Sticky>
      </StickyContainer>

    </Flex>
    </Box>

    <SpacerLarge />
    </Flex>
  );
}

export default Campaigndetail;


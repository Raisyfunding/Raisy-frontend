import { Flex, Text, Progress, Box, Spacer, Button, useColorModeValue, Image, Center } from "@chakra-ui/react";
import ArchiveBox from "../../../images/ArchiveBox.png"
import { SpacerLarge, SpacerXSmall, SpacerSmall } from "../../../styles/globalStyles";
import facebook from "../../../images/facebook.png"
import instagram from "../../../images/instagram.png"
import twitter from "../../../images/twitter.png"
import mail from "../../../images/mail.png"

function Campaigninfo({ currentProject }) {
    return (
    <Flex direction="column">
    <Box bg="#504D4D">
    <Flex direction="column" height='100%' padding="15px">
    <Text textAlign={"justify"} fontSize="15px">
    <span style={{ fontWeight: "bold", fontSize: "20px"  }}>{currentProject.totalraised}$ </span> Raised of {" "}
          {currentProject.totaltoraise}$ Goal 
        </Text>
        <SpacerXSmall />
    <Progress
          colorScheme="gray"
          value={(currentProject.totalraised / currentProject.totaltoraise) < 1 ? (currentProject.totalraised / currentProject.totaltoraise)*100 : ("100") }
          borderRadius={"10px"}
          height={"4px"}
        />
        <SpacerLarge />
        <Flex direction="row" fontSize= "20px">
        <Spacer />
            <Flex direction="column" textAlign="center">
            <Text fontWeight="bold">
            {currentProject.totaldonors}
            </Text>
            <Text>
            Donors
            </Text>
            </Flex>
            <Spacer />
            <Flex direction="column" textAlign="center">
            <Text fontWeight="bold">
            ${currentProject.totaltoraise - currentProject.totalraised}
            </Text>
            <Text>
            Required
            </Text>
            </Flex>
            <Spacer />
            <Flex direction="column" textAlign="center">
            <Text fontWeight="bold">
            {currentProject.dayleft}
            </Text>
            <Text>
            Days left
            </Text>
            </Flex>
            <Spacer />
        </Flex>
        <SpacerLarge />
        <Button bg= {useColorModeValue("var(--white)", "var(--black)")}>
            Donate
        </Button>
        <SpacerSmall />
        <Flex direction="row">
        <Box bg="#C4C4C4" width="40%">
        <Center>
            <Flex direction="row" alignItems="center" margin="3px">
            <Image src={ArchiveBox} height="30px"/>
            <Text color="#504D4D">Save</Text>
            </Flex>
        </Center>
        </Box>
        <Spacer />
        <Flex direction="row" alignItems="center">
        <Image src={twitter} height="25px"/>
        <Spacer />
        <Image src={facebook} />
        <Spacer />
        <Image src={instagram}/>
        <Spacer />
        <Image src={mail} />
        </Flex>
        </Flex>
    </Flex>
    </Box>
    <SpacerSmall />
    <Text fontSize="12px" textAlign="justify">
    This project will only be funded if it reaches its minimum Target by {currentProject.endtime}.
    </Text>
    </Flex>
    );
  }
  
  export default Campaigninfo;
  
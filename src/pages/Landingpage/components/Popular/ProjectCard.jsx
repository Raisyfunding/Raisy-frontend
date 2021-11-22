import { Flex, Image, Text, Progress } from "@chakra-ui/react";
import React from "react";

const ProjectCard = ({ campaign }) => {
  return (
    <div>
      <Flex
        flexDirection={"column"}
        width={"300px"}
        height={"450px"}
        marginLeft={"50px"}
        marginRight={"50px"}
      >
        <Image Width={"300px"} height={"250px"} src={campaign.image} alignSelf="center" />
        <Text paddingTop={"10px"} textAlign={"justify"} fontSize="25px" fontWeight="bold" >
          {campaign.title}
        </Text>
        <Text  textAlign="justify" fontSize="12px" alignSelf="center">
          {campaign.description}
        </Text>
        <Text paddingTop={"1px"} textAlign={"justify"} fontSize="15px">
          category : {campaign.category}
        </Text>
        <Text paddingTop={"10px"} paddingBottom={"2px"}  fontSize="12px" color="var(--blue)">
          Last donation {campaign.lastdonation} min ago
        </Text>
        <Progress
          colorScheme="gray"
          value={campaign.progress}
          borderRadius={"10px"}
          height={"4px"}
        />
        <Text paddingTop={"15px"} textAlign={"center"} >
          {(campaign.amounttoraise * 80) / 100}$ Raised out of{" "}
          {campaign.amounttoraise} $
        </Text>
      </Flex>
    </div>
  );
};

export default ProjectCard;

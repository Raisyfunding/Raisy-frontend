import { Flex, Image, Text, Progress } from "@chakra-ui/react";
import React from "react";

const ProjectCard = ({ campaign }) => {
  return (
    <Flex
      flexDirection={"column"}
      width={"300px"}
      height={"700px"}
      margin="auto"
    >
      <Image width={"300px"} height={"300px"} src={campaign.image} />
      <Text paddingTop={"15px"} textAlign={"justify"}>
        {campaign.title}
      </Text>
      <Text paddingTop={"15px"} textAlign={"justify"}>
        {campaign.description}
      </Text>
      <Text paddingTop={"15px"} textAlign={"justify"}>
        {campaign.category}
      </Text>
      <Text paddingTop={"15px"} paddingBottom={"15px"} textAlign={"justify"}>
        Last donation {campaign.lastdonation} min ago
      </Text>
      <Progress
        colorScheme="blue"
        value={campaign.progress}
        borderRadius={"10px"}
        height={"4px"}
      />
      <Text paddingTop={"15px"} textAlign={"justify"}>
        {(campaign.amounttoraise * 80) / 100}$ Raised out of{" "}
        {campaign.amounttoraise} $
      </Text>
    </Flex>
  );
};

export default ProjectCard;

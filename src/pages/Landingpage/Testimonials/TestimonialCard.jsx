import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div>
      <Flex flexDirection={"row"} maxWidth={"90vw"}>
        {" "}
        <Flex flexDirection={"column"}>
          <Text>{testimonial.title}</Text>
          <Text>{testimonial.description}</Text>
          <Text>{testimonial.conclusion}</Text>
        </Flex>
        <Image Width={"400px"} height={"300px"} src={testimonial.image} />
      </Flex>
    </div>
  );
};

export default TestimonialCard;

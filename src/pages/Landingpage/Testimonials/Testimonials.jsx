import React from "react";
import { TESTIMONIAL } from "./Testimonial";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Center, Flex, Text } from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div>
      <Text fontSize={"2em"} marginLeft={"100px"} marginBottom={"30px"}>
        Popular projects
      </Text>
      <Center>
        <CarouselProvider
          totalSlides={TESTIMONIAL.length}
          visibleSlides={1}
          isIntrinsicHeight={true}
          isPlaying={true}
          interval={4000}
        >
          <Flex maxWidth={"95vw"}>
            <Slider classNameTray="slider-tray">
              {TESTIMONIAL.map((testimonial, n) => (
                <Slide index={n}>
                  <TestimonialCard testimonial={testimonial} />
                </Slide>
              ))}
            </Slider>
          </Flex>
        </CarouselProvider>
      </Center>
    </div>
  );
};

export default Testimonials;

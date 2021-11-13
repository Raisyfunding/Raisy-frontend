import React from "react";
import ProjectCard from "./ProjectCard";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Center, Flex, Text, Box } from "@chakra-ui/react";
import "./styles.css";

import { SUCCESS_CAMP } from "./successCamp";

export default class Popular extends React.Component {
  constructor() {
    super();
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.setTotalSlides = this.setTotalSlides.bind(this);
    this.state = {
      totalSlides: this.computeTotalSlides(),
    };
  }

  componentWillUnmount() {
    window.clearTimeout(this.throttle);
    window.removeEventListener("resize", this.handleWindowResize, false);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize, false);
  }

  computeTotalSlides() {
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );

    if (width < 800) {
      return 1; // show 1 slides
    } else if (width > 1150) {
      return 3; // show 1 slides
    } else {
      return 2;
    }
  }

  setTotalSlides() {
    const totalSlides = this.computeTotalSlides();
    if (this.state.totalSlides !== totalSlides) this.setState({ totalSlides });
  }

  handleWindowResize() {
    window.clearTimeout(this.throttle);
    this.throttle = window.setTimeout(this.setTotalSlides, 400);
  }
  render() {
    return (
      <div>
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          gridGap="50px"
          maxWidth="80vw"
          margin="auto"
        >
          <Text fontSize={"2em"} marginTop="25px">
            Popular projects
          </Text>
          <Box>
            <CarouselProvider
              totalSlides={SUCCESS_CAMP.length}
              visibleSlides={this.state.totalSlides}
              isIntrinsicHeight={true}
              isPlaying={true}
              interval={4000}
            >
              <Flex maxWidth={"95vw"}>
                <Slider classNameTray="slider-tray">
                  {SUCCESS_CAMP.map((campaign, n) => (
                    <Slide index={n}>
                      <ProjectCard campaign={campaign} />
                    </Slide>
                  ))}
                </Slider>
              </Flex>
            </CarouselProvider>
          </Box>
        </Flex>
      </div>
    );
  }
}

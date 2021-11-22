import React from "react";
import ProjectCard from "./ProjectCard";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Center, Flex, Text } from "@chakra-ui/react";
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

    if (width < 1300) {
      return 1; // show 1 slides
    } else {
      return 3;
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
        <Text fontSize={"2em"} marginLeft={"100px"} marginBottom={"30px"}>
          Popular projects
        </Text>
        <Center>
          <CarouselProvider
            totalSlides={SUCCESS_CAMP.length}
            visibleSlides={this.state.totalSlides}
            isIntrinsicHeight={true}
            isPlaying={true}
            interval={4000}
          >
            <Flex maxWidth={"50vw"}>
              <Slider classNameTray="slider-tray">
                {SUCCESS_CAMP.map((campaign, n) => (
                  <Slide index={n}>
                    <ProjectCard campaign={campaign} />
                  </Slide>
                ))}
              </Slider>
            </Flex>
          </CarouselProvider>
        </Center>
      </div>
    );
  }
}

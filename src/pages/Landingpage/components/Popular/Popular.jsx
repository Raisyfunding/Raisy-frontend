import React from 'react'
import ProjectCard from './ProjectCard'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Flex, Text, Box } from '@chakra-ui/react'
import './styles.css'

import { SUCCESS_CAMP } from './successCamp'

export default class Popular extends React.Component {
  constructor(props) {
    super(props)
    this.handleWindowResize = this.handleWindowResize.bind(this)
    this.setTotalSlides = this.setTotalSlides.bind(this)
    this.state = {
      totalSlides: this.computeTotalSlides(),
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.throttle)
    window.removeEventListener('resize', this.handleWindowResize, false)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize, false)
  }

  computeTotalSlides() {
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )

    if (width < 800) {
      return 1 // show 1 slides
    } else if (width > 1150) {
      return 3 // show 1 slides
    } else {
      return 2
    }
  }

  setTotalSlides() {
    const totalSlides = this.computeTotalSlides()
    if (this.state.totalSlides !== totalSlides) this.setState({ totalSlides })
  }

  handleWindowResize() {
    window.clearTimeout(this.throttle)
    this.throttle = window.setTimeout(this.setTotalSlides, 400)
  }
  render() {
    return (
      <div>
        <Box
          height={'100vh'}
          width={'100vw'}
          backgroundImage={'/images/test2.png'}
          backgroundRepeat={'no-repeat'}
          backgroundSize={'cover'}
        >
          <Box
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            gridGap="30px"
            maxWidth="80vw"
            margin="auto"
            height={'100vh'}
          >
            <Text
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              style={{
                textAlign: 'center',
                background:
                  '-webkit-linear-gradient(100deg, rgba(78, 213, 186, 1), rgba(191, 222, 199, 1))',
                webkitBackgroundClip: 'text',
                webkitTextFillColor: 'transparent',
              }}
              fontWeight={'900'}
            >
              POPULAR CAMPAIGNS
            </Text>
            <Text
              fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }}
              style={{ textAlign: 'center' }}
              fontWeight={'400'}
              paddingBottom={'50px'}
            >
              Explore the trending campaigns on Raisy.
            </Text>
            <Box>
              <CarouselProvider
                totalSlides={SUCCESS_CAMP.length}
                visibleSlides={this.state.totalSlides}
                isIntrinsicHeight={true}
                isPlaying={true}
                interval={4000}
              >
                <Flex maxWidth={'95vw'}>
                  <Slider classNameTray="slider-tray">
                    {this.props.popularCampaigns.length > 0 &&
                      this.props.popularCampaigns.map((campaign, n) => (
                        <Slide index={n}>
                          <ProjectCard campaign={campaign} />
                        </Slide>
                      ))}
                  </Slider>
                </Flex>
              </CarouselProvider>
            </Box>
          </Box>
        </Box>
      </div>
    )
  }
}

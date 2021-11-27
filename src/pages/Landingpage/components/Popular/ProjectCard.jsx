import { Flex, Image, Text, Progress } from '@chakra-ui/react';
import React from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useHistory } from 'react-router-dom';

const ProjectCard = ({ campaign }) => {
  const history = useHistory();

  return (
    <Flex
      margin={'auto'}
      width={'300px'}
      height={'450px'}
      backgroundColor={useColorModeValue(
        'rgba(255,255,255,1)',
        'rgba(21,21,21,.64)'
      )}
      borderRadius={'50px'}
      border={'1px solid'}
      borderColor={useColorModeValue(
        'rgba(235, 235, 235, 1)',
        'rgba(25,25,25,1)'
      )}
      padding={'20px'}
      flexDirection={'column'}
      _hover={{ opacity: '0.8' }}
    >
      <Image
        width={'300px'}
        height={'300px'}
        borderRadius={'50px'}
        src={`https://cloudflare-ipfs.com/ipfs/${campaign.coverImageHash}`}
        onClick={() => history.push(`/campaign/${campaign.campaignId}`)}
        _hover={{ cursor: 'pointer' }}
      />
      <Text paddingTop={'15px'} textAlign={'justify'}>
        {campaign.title}
      </Text>
      {/* <Text paddingTop={"15px"} textAlign={"justify"}>
				{campaign.description}
			</Text> */}
      {/* <Text paddingTop={"15px"} textAlign={"justify"}>
        {campaign.category}
      </Text> */}
      <Text paddingTop={'15px'} paddingBottom={'15px'} textAlign={'justify'}>
        {campaign.nbDonations} donations
      </Text>
      <Progress
        value={(campaign.amountRaised / campaign.amountToRaise) * 100}
        borderRadius={'10px'}
        height={'4px'}
        colorScheme="green"
      />
      <Text paddingTop={'15px'} textAlign={'justify'}>
        {campaign.amountRaised} $ Raised out of {campaign.amountToRaise} $
      </Text>
    </Flex>
  );
};

export default ProjectCard;

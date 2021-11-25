import { Flex, Image, Text, Progress } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const ProjectCard = ({ campaign }) => {
  const history = useHistory();

  return (
    <Flex
      flexDirection={'column'}
      width={'300px'}
      height={'auto'}
      onClick={() => {
        history.push(`/campaign/${campaign.campaignId}`);
      }}
      _hover={{ cursor: 'pointer' }}
    >
      <Image
        width={'300px'}
        height={'300px'}
        src={`https://cloudflare-ipfs.com/ipfs/${campaign.coverImageHash}`}
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
        colorScheme="blue"
        value={campaign.amountRaised / campaign.amountToRaise}
        borderRadius={'10px'}
        height={'4px'}
      />
      <Text paddingTop={'15px'} textAlign={'justify'}>
        {campaign.amountRaised} $ Raised out of {campaign.amountToRaise} $
      </Text>
    </Flex>
  );
};

export default ProjectCard;

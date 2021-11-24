import { Image } from "@chakra-ui/image";
import { Flex, Text, Box, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { SpacerLarge } from "../../../styles/globalStyles";
import Campaigninfo from "./Campaigninfo";
import React from "react";
import projectimage from "../../../images/Mixwarepic.png"



function Campaigndetail({ currentProject }) {
  return (
      <Flex direction="column" >
<Box width="100%" bg="#C4C4C440">
           <Flex direction="row">
             <Button variant="link" fontStyle="italic" fontWeight="bold">Button</Button>
            <Spacer />
              <Button variant="link" fontStyle="italic">Button</Button>
              <Spacer />
                <Button variant="link" fontStyle="italic">Button</Button>
             <Spacer />
                <Button variant="link" fontStyle="italic">Button</Button>
             <Spacer />
                 <Button variant="link" fontStyle="italic">Button</Button>
              <Spacer />
             </Flex>
      </Box>

    <Box marginLeft="10%" marginRight="10%" marginTop="5%">
    <Flex direction={{base: "column", md: "row" }}>
      <Flex direction="column"  width="700px">
          <Text fontWeight="bold" fontSize="80px" marginTop="-20px">
          {currentProject.title}
          </Text>
          <Text textTransform="uppercase" textDecoration="underline" fontSize="13px" marginTop="-20px" marginLeft="5px">
              {currentProject.category}
          </Text>
          <Text fontSize="10px" marginLeft="5px">
          Help us out! Don't delay give today!
          </Text>
          <SpacerLarge />
          <Image
        src={projectimage}
        alt="project image"
     maxWidth="100%"
     style={{filter:"grayscale(1)"}}
         />
         <Image
        src={projectimage}
        alt="project image"
     maxWidth="100%"
     style={{filter:"grayscale(1)"}}
         />
         <Image
        src={projectimage}
        alt="project image"
     maxWidth="100%"
     style={{filter:"grayscale(1)"}}
         />
      </Flex>
      <Spacer />
      <Box width="400px">
      <Campaigninfo currentProject={currentProject}/>
      </Box>
    </Flex>
    </Box>
   
    </Flex>
  );
}

export default Campaigndetail;












// import { Image } from "@chakra-ui/image";
// import { Flex, Text, Box, Center, Spacer } from "@chakra-ui/layout";
// import { SpacerLarge } from "../../../styles/globalStyles";
// import Campaigninfo from "./Campaigninfo";
// import React, {  useState } from "react";
// import { Button } from "@chakra-ui/react"


// function Campaigndetail({ currentProject }) {
//   const [print, setPrint] = useState(0);
//   return (
//     <Flex direction="column" height='100vh'>
//         <Box width="100%" bg="#C4C4C440">
//             <Flex direction="row">
//               <Spacer />
//                 <Button variant="link" fontStyle="italic" fontWeight="bold">Button</Button>
//               <Spacer />
//                 <Button variant="link" fontStyle="italic">Button</Button>
//               <Spacer />
//                 <Button variant="link" fontStyle="italic">Button</Button>
//               <Spacer />
//                 <Button variant="link" fontStyle="italic">Button</Button>
//               <Spacer />
//                 <Button variant="link" fontStyle="italic">Button</Button>
//               <Spacer />
//             </Flex>
//         </Box>
//     </Flex>
//   );
// }

// export default Campaigndetail;

import React from 'react'
import {
  Text,
  Box,
  Center,
  HStack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import Countdown from 'react-countdown'

const Fundsrelease = ({ currentProject, fundingover }) => {
  const { account } = useWeb3React()

  return (
    <div>
      <Text textAlign={'center'} fontSize={'3xl'} fontWeight="bold">
        Funds release plan
      </Text>
      {console.log(currentProject)}
      {currentProject.nbMilestones ? (
        <div>
          {console.log('dzeffz')}
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Milestone</Th>
                <Th>% Release</Th>
                <Th> State </Th>
              </Tr>
            </Thead>
            {currentProject.pctReleasePerMilestone.map((element, index) => (
              <Tbody>
                <Tr>
                  <Td>{index}</Td>
                  <Td>{element}%</Td>
                  <Td>25.4</Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </div>
      ) : (
        <div>
          <Text textAlign="center">
            There isn't stagger release for this project, 100% of the collected
            funds have been released !
          </Text>
        </div>
      )}
    </div>
  )
}

export default Fundsrelease

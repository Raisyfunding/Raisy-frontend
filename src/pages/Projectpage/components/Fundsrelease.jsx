import React from 'react';
import { Text } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
// import { useWeb3React } from '@web3-react/core';

const Fundsrelease = ({ currentProject, fundingover, schedule }) => {
  return (
    <div>
      {currentProject.nbMilestones ? (
        <div>
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
                  <Td>
                    {schedule.currentMilestone > index
                      ? 'Released'
                      : 'Not Released'}
                  </Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </div>
      ) : (
        <div>
          {fundingover ? (
            <Text textAlign="center">
              There isn't staggered release for this project, 100% of the
              collected funds have been released !
            </Text>
          ) : (
            <Text textAlign="center">
              There isn't staggered release for this project, 100% of the
              collected funds will be directly released !
            </Text>
          )}
        </div>
      )}
    </div>
  );
};

export default Fundsrelease;

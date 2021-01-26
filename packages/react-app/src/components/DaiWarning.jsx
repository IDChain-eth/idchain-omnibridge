import { Alert, AlertIcon, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

import { isxDaiChain } from '../lib/helpers';

const ERC20DaiAddress = {
  74: '0xE1A400f340bf4eeDbc4Bbb553f1BFf7Ec4656E3e',
  1: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
};

export const isERC20DaiAddress = token => {
  if (!token) {
    return false;
  }

  const isxDai = isxDaiChain(token.chainId);
  return !isxDai && token.address === ERC20DaiAddress[token.chainId];
};

export const DaiWarning = () => {
  return (
    <Flex align="flex-middle" direction="column">
      <Alert status="warning" borderRadius={5} mb={5}>
        <AlertIcon minWidth="20px" />
        <Text fontSize="small">
          Bridges DAI on Ethereum to DAI on IDChain, DOES NOT mint native
          IDChain. If you want native IDchain, use the&nbsp;
          <Link href="https://dai.idchain.one/" color="blue.500" isExternal>
            DAI Bridge
          </Link>
          .
        </Text>
      </Alert>
    </Flex>
  );
};

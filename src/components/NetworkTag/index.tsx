import React, { useContext } from "react";
import styled from "styled-components";

// components
import { Text } from "components/UI";
import { PreferredNetworkContext } from "components/TestTx";

// constants
import { SupportedNetworks, NetworkMap } from "constants/chain";

const TagWrapper = styled.div<{ selected: boolean }>`
  border: ${({ selected }) => selected ? '2px' : '1px'} solid #E7EBEF;
  min-width: 5rem;
  display: inline-block;
  cursor: pointer;
  padding: .3rem .5rem;
  border-radius: 1rem;
  margin: 0 .2rem;
  background-color: ${({ selected }) => selected ? '#ECF0F5' : 'transparent'};
  color: ${({ selected }) => selected ? 'black' : '#858585'};
`;

const SmallText = styled(Text)`
  font-weight: 400;
  font-size: .9rem;
  color: inherit;
`;

interface NetworkTagProps {
  name: SupportedNetworks;
  children?: React.ReactNode;
  setNetwork: React.Dispatch<React.SetStateAction<SupportedNetworks>>;
}

const NetworkTag = ({ name, setNetwork }: NetworkTagProps) => {
  const preferredTxNetwork = useContext(PreferredNetworkContext);

  return (
    <TagWrapper
      onClick={() => setNetwork(name)}
      selected={preferredTxNetwork === name}
    >
      <SmallText>{NetworkMap[name]}</SmallText>
    </TagWrapper>
  );
};

export default NetworkTag;

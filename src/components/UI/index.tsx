import styled from 'styled-components';

export const ImgIcon = styled.img<{ less?: boolean }>`
  overflow: 0;
  height: ${({ less }) => less ? '1.5rem' : '1.8rem'};
  margin-right: ${({ less }) => less ? '.7rem' : '.5rem'};
`;

export const Text = styled.p`
  font-weight: 500;
`;

export const Header = styled.h1`
  color: #242525;
  font-size: 1.5rem;
`;

export const Icon = styled.i`
  font-size: 1.3rem;
  margin-left: .5rem;
`;

export const Divider = styled.div`
  border-top: 1px solid #EAEAF5;
  margin: .5rem 0;
`;

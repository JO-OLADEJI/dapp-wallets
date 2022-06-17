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
  margin: 1rem 0;
`;

export const Icon = styled.i`
  font-size: 1.3rem;
  margin-left: .5rem;
`;

export const Divider = styled.div`
  border-top: 1px solid #EAEAF5;
  margin: .8rem;
`;

export const Input = styled.input`
  border: 1px solid #EAEAF5;
  font-family: inherit;
  border-radius: 1.5rem;
  padding: .5rem 1.5rem;
  margin-bottom: .5rem;

  &:hover,
  &:focus {
    border: 1px solid #242525;
  }
`;

export const Button = styled.button`
  background-color: #7F85FF;
  padding: .5rem 1rem;
  margin-left: .5rem;
  border-radius: 3rem;
  border: none;
  width: 7rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

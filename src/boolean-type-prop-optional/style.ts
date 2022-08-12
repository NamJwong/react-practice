import styled from 'styled-components';

export const Container = styled.article<{ isRed: boolean }>`
  background-color: ${(props) => (props.isRed ? 'red' : 'white')};
`;

import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  padding: 3.25rem;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  min-width: 25rem;
  margin: 5rem;
`;

const Media = styled.div`
  min-width: 400px;
`;

const H1 = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: #7A7A7A
`;

export {
  Container,
  Content,
  Media,
  H1,
  Text
}
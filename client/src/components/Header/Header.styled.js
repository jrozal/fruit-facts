import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  padding: 3.25rem 5rem;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 735px) {
    flex-direction: column-reverse;
    padding: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin-right: 5rem;

  @media only screen and (max-width: 735px) {
    margin: 0;
  }
`;

const Media = styled.div`
  width: 400px;
  min-width: 300px;
  height: auto;

  &:after {
    content: '';
    display: block;
    margin: auto;
    bottom: -30px;
    left: 50%;
    height: 8px;
    width: 85%;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    filter: blur(2px);
  }

  @media only screen and (max-width: 735px) {
    max-width: 200px;
  }
`;

const H1 = styled.h1`
  font-size: 5rem;
  color: #2B562B;
  text-transform: uppercase;
  margin: 2rem 0;

  @media only screen and (max-width: 735px) {
    margin: 1rem 0;
    font-size: 2.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.3rem;
  color: #7A7A7A;

  @media only screen and (max-width: 735px) {

  }
`;

export {
  Container,
  Content,
  Media,
  H1,
  Text
}
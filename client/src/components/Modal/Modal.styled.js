import styled from 'styled-components';

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30rem;
  height: 25rem;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  display: grid;

  @media only screen and (max-width: 735px) {
    width: 80%;
    height: auto;
    padding: 1rem;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  float: right;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
`;

const TopContent = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 1.5rem;
  margin-bottom: 1rem;
  align-items: center;

  @media only screen and (max-width: 735px) {
    grid-gap: 0.5rem;
  }
`;

const BottomContent = styled.div`
  border: 2px solid;
  padding: 1rem;
`;

const Item = styled.div`
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const Image = styled.div`
  height: 100px;
  width: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Heading = styled.h3`
  font-size: 2rem;
  margin-top: 0rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 735px) {
    font-size: 1.5rem;
  }
`;

const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export {
  BottomContent,
  Button,
  Content,
  Heading,
  Image,
  Item,
  Overlay,
  SubContent,
  TopContent,
};
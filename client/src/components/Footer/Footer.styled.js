import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: grid;
  margin-top: 5rem;
  min-height: calc(-100vh - 63px);
`;

const FooterContent = styled.div`
  display: grid;
  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0.5rem;
  justify-content: center;
  align-content: center;
  background-color: #5eaa5f;
`;

export {
  FooterWrapper,
  FooterContent
}
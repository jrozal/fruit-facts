import styled from 'styled-components';

const Gallery = styled.div`
  max-width: 1600px;
  padding: 3.25rem 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 1.5rem;
  justify-items: center;

  @media only screen and (max-width: 735px) {
    padding: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size:cover;
  background-image: url(${props => props.img});
  border-radius: 1.5rem;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    cursor: pointer;
  }

  @media only screen and (max-width: 735px) {
    margin: 0;
    width: 100%;
    padding-bottom: 100%;
  }
`;

export {
  Gallery,
  Card
};
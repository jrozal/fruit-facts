import {
  BottomContent,
  Button,
  Content,
  Heading,
  Image,
  ImageContainer,
  Item,
  Overlay,
  SubContent,
  TopContent,
} from './Modal.styled';
import { record } from '../../temp';

const Modal = ({ isOpen, close, data }) => {
  return (
    <>
      {isOpen && (
        <Overlay>
          <Content>
            <Button onClick={close}>Close</Button>
            <TopContent>
              <ImageContainer>
                <Image src={record.photo} alt=""></Image>
              </ImageContainer>
              <SubContent>
                <Heading>{record.name}</Heading>
                <div><strong>Genus:</strong> {record.genus}</div>
                <div><strong>Family:</strong> {record.family}</div>
                <div><strong>Order:</strong> {record.order}</div>
              </SubContent>
            </TopContent>
            <BottomContent>
              <Heading>Nutrition Facts</Heading>
              <SubContent>
                <Item><strong>Carbohydrates:</strong> {record.nutritions.carbohydrates}g</Item>
                <Item><strong>Protein:</strong> {record.nutritions.protein}g</Item>
                <Item><strong>Fat:</strong> {record.nutritions.fat}g</Item>
                <Item><strong>Calories:</strong> {record.nutritions.calories}g</Item>
                <Item><strong>Sugar:</strong> {record.nutritions.sugar}g</Item>
              </SubContent>
            </BottomContent>
          </Content>
        </Overlay>
      )}
    </>
  )
};

export default Modal;
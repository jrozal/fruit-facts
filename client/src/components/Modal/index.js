import {
  BottomContent,
  Button,
  Content,
  Heading,
  Image,
  Item,
  Overlay,
  SubContent,
  TopContent,
} from './Modal.styled';
import CloseButton from '../Icons/CloseButton';

const Modal = ({ isOpen, close, data }) => {
  return (
    <>
      {isOpen && (
        <Overlay>
          <Content>
            <Button onClick={close}><CloseButton/></Button>
            <TopContent>
              <Image img={data.photo}/>
              <SubContent>
                <Heading>{data.name}</Heading>
                <div><strong>Genus:</strong> {data.genus}</div>
                <div><strong>Family:</strong> {data.family}</div>
                <div><strong>Order:</strong> {data.order}</div>
              </SubContent>
            </TopContent>
            <BottomContent>
              <SubContent>
                <Heading>Nutrition Facts</Heading>
                <Item><strong>Carbohydrates:</strong> {data.nutritions.carbohydrates}g</Item>
                <Item><strong>Protein:</strong> {data.nutritions.protein}g</Item>
                <Item><strong>Fat:</strong> {data.nutritions.fat}g</Item>
                <Item><strong>Calories:</strong> {data.nutritions.calories}g</Item>
                <Item><strong>Sugar:</strong> {data.nutritions.sugar}g</Item>
              </SubContent>
            </BottomContent>
          </Content>
        </Overlay>
      )}
    </>
  )
};

export default Modal;
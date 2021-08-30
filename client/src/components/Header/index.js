import { Container,
  Content,
  Media,
  H1,
  Text }from './Header.styled';
import FruitSvg from './FruitSvg';

const Header = () => {
  return (
    <Container>
      <Content>
        <H1>Fruit Facts</H1>
        <Text>Fruits are nature's grand gift to humanity. They are natural life-enhancing medicines loaded with nutrients, minerals, and antioxidants. Fruit assists the human body with being fit, feeling rejuvenated, and staying free from illnesses.</Text>
        <Text>Check out the fruits below to learn more!</Text>
      </Content>
      <Media>
        <FruitSvg />
      </Media>
    </Container>

  )
};

export default Header;
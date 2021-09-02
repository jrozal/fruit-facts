import GitHub from '../Icons/GitHub';
import { FooterWrapper, FooterContent } from './Footer.styled';

const Footer = () => {

  return (
    <FooterWrapper>
      <FooterContent>
        <span>
          <a href="https://github.com/jrozal/fruit-facts" target="_blank" rel="noopener noreferrer">
            <GitHub/>
          </a>
        </span>
      </FooterContent>
    </FooterWrapper>
  )
};

export default Footer;
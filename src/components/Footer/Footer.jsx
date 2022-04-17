import {
    FaPhoneAlt,
    FaPaperPlane,
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
  import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialContact,
    SocialContactInfo,
    SocialIcons,
    SocialIconLink,
    SocialContactText,
    SocialContactIcon
  } from './style';
  
  const Footer = () => {
    return (
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialContact to='/'>
                <SocialContactInfo>
                  <SocialContactIcon>
                    <FaPhoneAlt />
                  </SocialContactIcon>
                  <SocialContactText>
                    +27 77 123 4567
                  </SocialContactText>
                </SocialContactInfo>
                <SocialContactInfo>
                  <SocialContactIcon>
                    <FaPaperPlane />
                  </SocialContactIcon>
                  <SocialContactText>
                    emzini@gmail.com
                  </SocialContactText>   
                </SocialContactInfo>
                <SocialContactInfo>
                  <SocialContactIcon>
                    <FaMapMarkerAlt />
                  </SocialContactIcon>
                  <SocialContactText>
                    12 Avenue Westdene
                  </SocialContactText>
                </SocialContactInfo>
              </SocialContact>
              <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.twitter.com/briandesignz'
                  target='_blank'
                  aria-label='Twitter'
                  rel='noopener noreferrer'
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
  };
  
  export default Footer;
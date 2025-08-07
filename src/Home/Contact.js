import { Typography, Box, Container } from '@mui/material';
import Contactbackimage from '../Images/Contactbackimage.jpg';
import Coffeecup from '../Image/Coffeecup.png';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export default function Contact() {
  // Stylish card component
  const ContactCard = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: theme.spacing(4),
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)'
    }
  }));

  const ContactItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'scale(1.02)'
    }
  }));

  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Enhanced background with parallax effect */}
      <Box
        component="img"
        src={Contactbackimage}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
          filter: 'brightness(0.7)'
        }}
        alt="Coffee shop background"
      />
      
      {/* Gradient overlay */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(60, 30, 10, 0.7) 0%, rgba(20, 10, 5, 0.9) 100%)',
        zIndex: -1
      }} />

      {/* Main content container */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <ContactCard>
          {/* Logo and title with animation */}
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              mb: 4,
              animation: 'fadeIn 1s ease'
            }}
          >
            <Box 
              component="img"
              src={Coffeecup}
              sx={{ 
                width: 80, 
                height: 80, 
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}
              alt="Coffee cup logo"
            />
            <Typography 
              variant="h3" 
              sx={{ 
                mt: 2,
                fontFamily: 'Brush Script MT, cursive',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontWeight: 'bold'
              }}
            >
              Me With Coffee
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mt: 1,
                color: 'rgba(255,255,255,0.8)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '1.1rem'
              }}
            >
              Get in touch with us
            </Typography>
          </Box>

          {/* Contact items with icons */}
          <Box sx={{ mt: 4 }}>
            <ContactItem>
              <EmailOutlinedIcon sx={{ 
                fontSize: 32, 
                color: 'rgba(255,255,255,0.9)',
                mr: 3 
              }} />
              <Box>
                <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Email Address
                </Typography>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 500 }}>
                  meewithcoffee@gmail.com
                </Typography>
              </Box>
            </ContactItem>

            <ContactItem>
              <LocalPhoneIcon sx={{ 
                fontSize: 32, 
                color: 'rgba(255,255,255,0.9)',
                mr: 3 
              }} />
              <Box>
                <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Phone Number
                </Typography>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 500 }}>
                  +91 9342346548
                </Typography>
              </Box>
            </ContactItem>

            {/* Optional: Add a contact form button */}
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Box
                component="button"
                sx={{
                  background: 'linear-gradient(45deg, #8B5A2B 30%, #D2B48C 90%)',
                  border: 0,
                  borderRadius: '50px',
                  color: 'white',
                  padding: '12px 32px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(139, 90, 43, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(139, 90, 43, 0.6)'
                  }
                }}
              >
                Send Us a Message
              </Box>
            </Box>
          </Box>
        </ContactCard>
      </Container>
    </Box>
  );
}
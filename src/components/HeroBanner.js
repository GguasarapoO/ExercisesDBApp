import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material' 

import HeroBannerImage from '../images/banner.png'

const HeroBanner = () => {
  return (
    <Box 
    sx={{ mt: { lg: '212px', xs: '70px' },
          ml: { sm: '50px' }
    }}
    position="relative"
    p="20px"
    >
      <Typography color="#FF2625" fontWeight={600} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography 
      fontWeight={700}
      sx={{  fontSize: { lg: '44px', xs: '40px' } 
      }}
      mb="23px"
      mt="30px"
      >
        Sudar, Sonreir <br /> y Repetir
      </Typography>
      <Typography 
      fontSize="22px"
      lineHeight="35px"
      mb={4}
      >
        Explora los ejercicios mas efectivos
      </Typography>
      <Button 
      variant="contained" 
      color="error"
      href="#exercises"
      sx={{ backgroundColor: '#FF2625', padding:'19px' }}
      >
        Buscar ejercicio
      </Button>
      <Typography 
      fontweight={600}
      color="#FF2625"
      sx={{
        opacity: 0.1,
        display: { lg: 'block', sx: 'none' }
      }}
      fontSize="200px"
      >
        Ejercitate
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner
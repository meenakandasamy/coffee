import React from "react";
import Box from '@mui/material/Box';
import restaurantcoffee from '../Image/restaurantcoffee.png';
import { Typography } from "@mui/material";

const Home = () => {
    return (
        <Box 
            sx={{
                width: '100%',
                height: 'calc(100vh - 80px)', // Subtract header height
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            <img 
                src={restaurantcoffee} 
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
                alt="Coffee restaurant"
            />
            
            {/* Optional: Add text overlay if needed */}
            {/* <Typography 
                variant="h2" 
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center'
                }}
            >
                Welcome to Our Coffee Shop
            </Typography> */}
        </Box>
    )
}

export default Home;
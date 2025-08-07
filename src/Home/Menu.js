import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menubackground from '../Images/Menubackground.png';

export default function Menu() {
  return (
    <Box sx={{ 
      position: "relative", 
      width: "100%", 
      minHeight: "calc(100vh - 80px)", // Account for header height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Fullscreen Background Image */}
      <Box
        component="img"
        src={Menubackground}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1
        }}
        alt="Menu background"
      />
      
      {/* Dark overlay for better text readability */}
      <Box sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: -1
      }} />

      {/* Main Content Container */}
      <Box sx={{ 
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: { xs: 2, md: 4 },
        boxSizing: "border-box",
        zIndex: 1
      }}>
        <Typography 
          variant="h2" 
          sx={{ 
            textAlign: 'center', 
            fontWeight: 'bold',
            mb: 6,
            color: "white",
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}
        >
          Our Menu
        </Typography>

        <Grid container spacing={4} sx={{ color: "white" }}>
          {/* Coffee & Chai Section */}
          <Grid item xs={12} md={6}>
            <MenuSection 
              title="Coffee & Chai Varieties"
              items={[
                ["Masala Tea", "Green Tea"],
                ["Filter Coffee", "Mint Tea"],
                ["Lemon Tea", "Cardamom Tea"],
                ["Ginger Tea", "Instant Coffee"]
              ]}
            />
          </Grid>

          {/* Milkshakes Section */}
          <Grid item xs={12} md={6}>
            <MenuSection 
              title="Milkshake Varieties"
              items={[
                ["Banana Milkshake", "Berry Milkshake"],
                ["Chocolate Milkshake", "Fig Milkshake"],
                ["Oreo Milkshake", "KitKat Milkshake"],
                ["Dryfruit Milkshake", "Nuts Milkshake"]
              ]}
            />
          </Grid>

          {/* Snacks Section */}
          <Grid item xs={12} md={6}>
            <MenuSection 
              title="Snack Varieties"
              items={[
                ["Paneer Puff", "Mint Puff"],
                ["Veg Cutlet", "Nuggets"],
                ["Aloo Bonda", "Cheese Balls"],
                ["Mini Samosa", "Onion Bajji"],
                ["Mushroom Puff", "Onion Puff"],
                ["Pav Bhaji", "Momos"]
              ]}
            />
          </Grid>

          {/* Noodle & Sandwich Section */}
          <Grid item xs={12} md={6}>
            <MenuSection 
              title="Noodle & Sandwich Varieties"
              items={[
                ["Masala Maggi", "Veg Noodles"],
                ["Chilli Cheese Noodles", "Manchurian"],
                ["Corn Mayo Sandwich", "Corn Sandwich"],
                ["Chilli Cheese Sandwich", "Veg Sandwich"]
              ]}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// Reusable Menu Section Component
function MenuSection({ title, items }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography 
        variant="h3" 
        sx={{ 
          textAlign: 'center', 
          fontWeight: 'bold',
          mb: 3,
          color: "white",
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
        }}
      >
        {title}
      </Typography>
      
      <Grid container spacing={2}>
        {items.map((pair, index) => (
          <React.Fragment key={index}>
            <Grid item xs={6}>
              <Typography 
                variant="h5" 
                sx={{ 
                  textAlign: 'center', 
                  mb: 2,
                  fontWeight: 500
                }}
              >
                {pair[0]}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography 
                variant="h5" 
                sx={{ 
                  textAlign: 'center', 
                  mb: 2,
                  fontWeight: 500
                }}
              >
                {pair[1]}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}
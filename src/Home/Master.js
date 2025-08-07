import React, { useState } from "react";
import "./Master.css";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Home from "./Home";
import Branches from "./Branches";
import Contact from "./Contact";
import Menu from "./Menu";
import Coffeimage from "./Coffeeimage"
import Coffeecup from '../Image/Coffeecup.png';

export default function Master() {
  const [activeLink, setActiveLink] = useState("Home");

  const Item = styled(Paper)(({ theme }) => ({
    background: "transparent",
    boxShadow: "none",
  }));

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      {/* Fixed header with centered content */}
      <div className='master-Screen' style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px', // Fixed height
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center', // Vertically center content
      }}>
        <Box 
          sx={{
            width: '100%',
            margin: 0,
            p: 2,
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            {/* logo and title */}
            <Grid item xs={12} sm={6} md={6}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Coffeecup} style={{ width: 60, marginRight: 10 }} alt="coffee"/>
                <Typography sx={{ color: 'white', fontSize: { xs: '22px', sm: '25px' }, fontFamily: 'Brush Script MT' }}>
                  Mee With Coffee
                </Typography>
              </div>
            </Grid>

            {/* Menu links */}
            <Grid item xs={12} sm={6} md={6} style={{ textAlign: 'right' ,paddingRight: '30px'}}>
              <Grid container justifyContent={{ xs: 'space-between', sm: 'flex-end' }} spacing={3}>
                <Grid item>
                  <Typography sx={{ color: 'white', cursor: 'pointer' }}
                    onClick={() => handleLinkClick("Home")}>Home</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ color: 'white', cursor: 'pointer' }}
                    onClick={() => handleLinkClick("Menu")}>Menu</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ color: 'white', cursor: 'pointer' }}
                    onClick={() => handleLinkClick("Contact")}>Contact</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ color: 'white', cursor: 'pointer' }}
                    onClick={() => handleLinkClick("Branches")}>Image</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>

      {/* Add padding to the content to account for fixed header */}
      <div style={{ paddingTop: '80px' }}>
        {/* Components Render */}
        <div>
          {activeLink === "Home" && <Home />}
          {activeLink === "Menu" && <Menu />}
          {activeLink === "Contact" && <Contact />}
          {activeLink === "Branches" && <Branches />}
          {activeLink === "Coffeeimagemage" && <Coffeimage />}
        </div>
      </div>
    </div>
  )
}
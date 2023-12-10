import React,{useState}from "react"
import "./Master.css"
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
    }));
    
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

    return (
        <div>
        <div className='master-Screen'>
     
                <div >
                    <Box sx={{ width: '100%', margin:"0"}}>
                        <div >
                            <Grid container >
                            <Grid item >
                            <img src={Coffeecup } style={{width:"30%",marginLeft:"40%"}} />
                                </Grid>
                            <Grid item xs={6} style={{marginTop:"1.2%"}}>
                                    <Typography style={{color:"white", fontSize:"25px", fontfamily:'Brush Script MT'}}>Mee With Coffee</Typography>
                                </Grid>
                                <Grid item xs={1} style={{marginTop:"1.5%"}}>
                                    <div  > <Typography onClick={() => handleLinkClick("Home")}style={{color:"white"}}>
                                     Home
                                        </Typography></div>
                                </Grid>
                                <Grid item xs={1} style={{marginTop:"1.5%"}}>
                                <div> <Typography style={{color:"white"}}onClick={() => handleLinkClick("Menu")}>Menu</Typography></div>
                                </Grid>
                                <Grid item xs={1}style={{marginTop:"1.5%"}}>
                                <div>  <Typography
                                onClick={() => handleLinkClick("Contact")} style={{color:"white"}}>Contact
                                    </Typography></div>
                                </Grid>
                                <Grid item xs={1} style={{marginTop:"1.5%"}}>
                              <div>      <Typography style={{color:"white"}} onClick={() => handleLinkClick("Branches")}>Image</Typography></div>
                                </Grid>
                                
                            </Grid>
                        </div>
                    </Box>
                </div>
        </div>
        <div>
        {activeLink === "Home" && <Home />}
         {activeLink === "Menu" && <Menu />} 
        {activeLink === "Contact" && <Contact />}
        {activeLink === "Branches" && <Branches />}
        {activeLink === "Coffeeimagemage" && <Coffeimage />}

        </div>
        </div>
    )

}

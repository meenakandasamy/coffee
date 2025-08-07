
import Grid from '@mui/material/Grid';
import Filtercoffee from "../Image/Filtercoffee.png";
import GingerTea from "../Image/GingerTea.png"
import masalasai from "../Image/masalachai.png"
import Lemontea from "../Image/Lemontea.png"
import blacktea from "../Image/blacktea.png"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import cardamomchai from "../Image/Cradamomchai.png"
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";
import Greenchaii from "../Image/Greenchaii.png"
import Mintchai from "../Image/Minttea.png"
// -------------------------------milk shake----------------------
import chocolatemilk from "../Image/chocolatemilk.avif"
import Bananamilk from "../Image/Bananamilk.jpg"
import berrymilk from "../Image/berrymilk.jpg"
import dryfruitmilk from "../Image/dryfruitmilk.jpeg"
import figmilk from "../Image/figmilk.jpg"
import kitkatmilk from "../Image/kitkatmilk.jpg"
import nutsmilk from "../Image/nutsmilk.jpeg"
import oreomilk from "../Image/oreomilk.jpg"
// ---------------------------sanwich & Noodles--------------
import chillicheese from "../Photo/chillicheese.jpeg"
import cornmayoo from "../Photo/cornmayoo.jpg"
import cornsandwich from "../Photo/cornsandwich.webp"
import vegnoodle from "../Photo/vegnoodle.jpg"
import vegsandwich from "../Photo/vegsandwich.jpg"
import Masalamagg from "../Photo/Masalamagg.jpg"
import manchurian from "../Photo/manchurian.jpg"
import Chillisandwich from "../Photo/Chillisandwich.jpg"
// --------------------------- Snacks image-------------------------------

import Chickenpuff from "../Photo/Chickenpuff.jpg"
import Aloobonda from "../Photo/Aloobonda.jpg"
import Eggpuff from "../Photo/Eggpuff.jpg"
import pannerpuff from "../Photo/Pannerpuff.jpg"
import mushroompuff from "../Photo/mushroompuff.jpg"
import nuggets from "../Photo/nuggets.jpeg"
import potato from "../Photo/potato.jpg"
import vegpuff from "../Photo/vegpuff.jpg"
import Minisomosa from "../Photo/Minisomosa.jpg"
import onionbajji from "../Photo/Onionbajji.jpg"
import momos from "../Photo/momos.jpg"
import cutlet from "../Photo/cutlet.jpeg"
import "./Master.css"
export default function Branches() {

    return (
        <div className='image-scrren'>
        <div>
            <div>
            <Box sx={{ width: '100%', margin: "0" }}>
                
                <div style={{ marginLeft: "3%" }}>
                    <Grid container>
                    <Grid item xs={11}>
                    <div>
                <Typography style={{marginTop:"1%",fontSize:"22px",color:"white"}}>Coffee & Tea</Typography>
                </div>
                </Grid>
             
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                                <img src={masalasai} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%",color:"white",fontSize:"18px" }}>Masala Chai</Typography>
                            </div>
                        </Grid>

                        <Grid item xs={3} style={{ marginTop: "1%" }} >
                            <div>
                                <img src={Filtercoffee} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,color:"white",fontSize:"18px"}}>Filter coffee</Typography>
                            </div>
                        </Grid>

                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                                <img src={Lemontea} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,color:"white",fontSize:"18px"}}>Lemon Tea </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={GingerTea} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%",color:"white" ,fontSize:"18px"}}>Ginger Tea</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={blacktea} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,color:"white"}}>Black tEA</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={Greenchaii} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,color:"white",fontSize:"18px"}}>Green tEA</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={cardamomchai} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%",color:"white",fontSize:"18px" }}>Cardamom tEA</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={Mintchai} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,color:"white",fontSize:"18px"}}>Mint Tea</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            </div>
            <div>
            <Box sx={{ width: '100%', margin: "0" }}>
                
                <div style={{ marginLeft: "3%" }}>
                    <Grid container style={{ marginTop: "1%" }} >
                    <Grid item xs={11}>
                    <div>
                <Typography style={{marginTop:"1%",color:"white",fontSize:"22px"}}>Milk&shake</Typography>
                </div>
                </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                                <img src={chocolatemilk} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "4vw", marginTop: "1%",color:"white",fontSize:"18px" }}>Chocalate shake</Typography>
                            </div>
                        </Grid>

                        <Grid item xs={3} style={{ marginTop: "1%" }} >
                            <div>
                                <img src={Bananamilk} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Filter coffee</Typography>
                            </div>
                        </Grid>

                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                                <img src={berrymilk} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%",fontSize:"18px",color:"white" }}>Berry Shake</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={dryfruitmilk} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Dryfruit  Shake</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={figmilk} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Fig Shake</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={kitkatmilk} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%",fontSize:"18px",color:"white" }}>Kitkat Shake</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={nutsmilk} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Nut Shake</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={oreomilk} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%",fontSize:"18px",color:"white" }}>Oreo shake</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box> 
            </div>
            <div>
            <Box sx={{ width: '100%', margin: "0" }}>
              
                <div style={{ marginLeft: "3%" }}>
                    <Grid container style={{ marginTop: "1%" }} >
                        <Grid item xs={11}>
                    <div>
                <Typography style={{marginTop:"1%" ,fontSize:"22px",color:"white"}}>Snacks</Typography>
                </div>
                </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                                <img src={Chickenpuff} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "4vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Chicken Puff</Typography>
                            </div>
                        </Grid>

                        <Grid item xs={3} style={{ marginTop: "1%" }} >
                            <div>
                                <img src={Aloobonda} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Aloo Bonda </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                                <img src={Eggpuff} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Egg puff</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={pannerpuff} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Panner Puff</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={mushroompuff} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%",fontSize:"18px",color:"white" }}>Mushroom Puff</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={nuggets} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Nuggets</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={potato} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Photo Bajji </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={Minisomosa} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%",fontSize:"18px",color:"white" }}>Mini Somosa </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={onionbajji} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%",fontSize:"18px",color:"white" }}>Onion Bajji</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={momos} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Momos</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={cutlet} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Cutlet</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={vegpuff} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Veg puff</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box> 
            </div>
            <div>
            <Box sx={{ width: '100%', margin: "0" }}>
                
                <div style={{ marginLeft: "3%" }}>
                    <Grid container style={{ marginTop: "1%" }} >
                    <Grid item xs={11}>
                    <div>
                <Typography style={{marginTop:"1%",color:"white",fontSize:"22px"}}>Noodles & Sanwich</Typography>
                </div>
                </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                                <img src={chillicheese} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "4vw", marginTop: "1%",color:"white",fontSize:"18px" }}>Chilli Cheese Noodles</Typography>
                            </div>
                        </Grid>

                        <Grid item xs={3} style={{ marginTop: "1%" }} >
                            <div>
                                <img src={cornmayoo} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>CORN Mayo Sandwich</Typography>
                            </div>
                        </Grid>

                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                                <img src={cornsandwich} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%",fontSize:"18px",color:"white" }}>Corn Sandwish</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={vegnoodle} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Veg Noodles</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={vegsandwich} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Veg Sandwich</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={Masalamagg} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%",fontSize:"18px",color:"white" }}>Masala Maggi</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={manchurian} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%" ,fontSize:"18px",color:"white"}}>Gobi Manchuriyan</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={Chillisandwich} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "6vw", marginTop: "1%",fontSize:"18px",color:"white" }}>Chilli Cheese Sandwich</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box> 
            </div>
        </div>
        </div>
    )
}

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
export default function Branches() {

    return (
        <div>
            <div>
            <Box sx={{ width: '100%', margin: "0" }}>
                <div>
                <Typography style={{marginTop:"1%"}}>Chai&Tea</Typography>
                </div>
                <div style={{ marginLeft: "3%" }}>
                    <Grid container style={{ marginTop: "1%" }} >
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                                <img src={masalasai} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "4vw", marginTop: "1%" }}>Masala Chai</Typography>
                            </div>
                        </Grid>

                        <Grid item xs={3} style={{ marginTop: "1%" }} >
                            <div>
                                <img src={Filtercoffee} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>

                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                                <img src={Lemontea} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={GingerTea} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={blacktea} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={Greenchaii} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={cardamomchai} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={Mintchai} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            </div>
            <div>
            <Box sx={{ width: '100%', margin: "0" }}>
                <div>
                <Typography style={{marginTop:"1%"}}>Milk&shake</Typography>
                </div>
                <div style={{ marginLeft: "3%" }}>
                    <Grid container style={{ marginTop: "1%" }} >
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                                <img src={masalasai} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "4vw", marginTop: "1%" }}>Masala Chai</Typography>
                            </div>
                        </Grid>

                        <Grid item xs={3} style={{ marginTop: "1%" }} >
                            <div>
                                <img src={Filtercoffee} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>

                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                                <img src={Lemontea} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={GingerTea} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={blacktea} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={Greenchaii} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={cardamomchai} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                        <div>
                                <img src={Mintchai} style={{ width: "20vw", height: "30vh" }} />
                                <Typography style={{ marginLeft: "8vw", marginTop: "1%" }}>Filter coffee</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box> 
            </div>
        </div>
    )
}
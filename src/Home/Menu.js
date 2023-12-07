import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import Menubackground from '../Images/Menubackground.png';
// import chai from '../Image/chai.png';
export default function Menu() {
    const Item = styled(Paper)(({ theme }) => ({
    }));

    return (
        <div>
            <div>
                <div>
                    <img src={Menubackground} style={{ width: "100%", height: "89.5vh" }} />
                </div>
                <div style={{ marginTop: "-42%" }}>
                    <Grid container style={{ marginTop: "-28%"}} >
                    <Grid  item xs={5}>
                        </Grid>
                        <Grid item xs={7} style={{margintop:"6%"}}>
                            <div style={{ color: "white", fontSize: "38px",marginLeft:"12%" }}>  Mee with Coffee </div>
                         
                        </Grid>
                        <Grid xs={6} >
                            <div style={{ color: "white", fontSize: "30px" ,marginLeft:"42%",marginTop:"12.5%"}}>Coffee & Chai Varieties </div>
                        </Grid>
                        <Grid xs={6} >
                            <div style={{ color: "white", fontSize: "30px" ,marginLeft:"45%",marginTop:"12.5%"}}> Milkshakes Varieties  </div>
                        </Grid>
                        <Grid xs={4} >
                            <div style={{ color: "#ffffff", fontSize: "25px",marginLeft:"62%",marginTop:"11%"}}>Masala Tea </div>
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"62%",marginTop:"2.5%"}}>Green Tea  </div>
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"62%",marginTop:"2.5%"}}>Filter coffee </div>
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"62%",marginTop:"2.5%"}}>Mint Tea </div>
                            {/* <div style={{ color: "white",color: "white", fontSize: "22px",marginLeft:"30%",marginTop:"1%"}}>Green Tea </div>
                            <div style={{ color: "white",color: "white", fontSize: "22px",marginLeft:"30%",marginTop:"1%"}}>cardamom Tea </div>
                            <div style={{ color: "white",color: "white", fontSize: "22px",marginLeft:"30%",marginTop:"1%"}}>Mint Tea </div>
                            <div style={{ color: "white",color: "white", fontSize: "22px",marginLeft:"30%",marginTop:"1%"}}>B </div> */}

                        </Grid> 
                        <Grid xs={4}  >
                            {/* <div style={{ color: "#ffffff", fontSize: "28px",marginLeft:"30%",marginTop:"4%"}}>Masala Tea </div>
                            <div style={{ color: "white", fontSize: "28px",marginLeft:"30%",marginTop:"1%"}}>Lemon Tea </div>
                            <div style={{ color: "white", fontSize: "28px",marginLeft:"30%",marginTop:"1%"}}>Filter coffee </div>
                            <div style={{ color: "white",color: "white", fontSize: "28px",marginLeft:"30%",marginTop:"1%"}}>Ginger Tea </div> */}
                            <div style={{marginRight:"13%"}}> 
                            <div style={{ color: "white", fontSize: "25px",marginTop:"11%"}}> Lemon Tea</div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"2.5%"}}>Cardamom Tea </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"2.5%"}}>Ginger Tea </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"2.5%"}}>Instant Coffee </div>
                          
                            </div>

                        </Grid> 
                    </Grid>
                    <div>

                    </div>

                </div>
            </div>

        </div>
    )
}
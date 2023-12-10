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
                    <Grid  item xs={4.9}>
                        </Grid>
                        <Grid item xs={6} style={{margintop:"6%"}}>
                            {/* <div style={{ color: "white", fontSize: "38px"}}>  Mee with Coffee </div> */}
                         
                        </Grid>
                        <Grid xs={6} >
                            <div style={{ color: "white", fontSize: "30px" ,marginLeft:"32%",marginTop:"5.5%"}}>Coffee & Chai Varieties </div>
                        </Grid>
                        <Grid xs={6} >
                            <div style={{ color: "white", fontSize: "30px" ,marginLeft:"27%",marginTop:"5.5%"}}> Milkshakes Varieties  </div>
                        </Grid>
                        <Grid xs={3} style={{marginTop:"3%"}}>
                            <div>
                            <div style={{ color: "#ffffff", fontSize: "25px",marginLeft:"60%"}}>Masala Tea </div>
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"60%",marginTop:"3%"}}>Green Tea  </div>
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"60%",marginTop:"3%"}}>Filter coffee </div>
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"60%",marginTop:"3%"}}>Mint Tea </div>
                            {/* <div style={{ color: "white",color: "white", fontSize: "22px",marginLeft:"30%",marginTop:"1%"}}>Green Tea </div>
                            <div style={{ color: "white",color: "white", fontSize: "22px",marginLeft:"30%",marginTop:"1%"}}>cardamom Tea </div>
                            <div style={{ color: "white",color: "white", fontSize: "22px",marginLeft:"30%",marginTop:"1%"}}>Mint Tea </div>
                            <div style={{ color: "white",color: "white", fontSize: "22px",marginLeft:"30%",marginTop:"1%"}}>B </div> */}
</div>
                        </Grid> 
                        <Grid xs={3} style={{marginTop:"3%"}} >
                            
                            <div > 
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"9%"}}> Lemon Tea</div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"9%"}}>Cardamom Tea </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"9%"}}>Ginger Tea </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"9%"}}>Instant Coffee </div>
                          
                            </div>

                        </Grid> 
                        <Grid xs={3} style={{marginTop:"3%"}} >
                            
                            <div > 
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"23%"}}>Banana Milkshakes</div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"23%"}}>Berry Milkshakes </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"23%"}}>Chocolate Milkshakes </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"23%"}}>Fig Milkshakes </div>
                          
                            </div>

                        </Grid> 
                        <Grid xs={3} style={{marginTop:"3%"}} >
                            
                            <div > 
                            <div style={{ color: "white", fontSize: "25px"}}>Oreo Milkshakes</div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%"}}>Kitkatmilk Milkshakes </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%"}}>Dryfruit Milkshakes </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%"}}>Nuts Milkshakes </div>
                          
                            </div>

                        </Grid> 
                        <Grid xs={6} >
                            <div style={{ color: "white", fontSize: "30px" ,marginLeft:"40%",marginTop:"8.5%"}}>Snacks Varieties</div>
                        </Grid>
                        <Grid xs={6} >
                            <div style={{ color: "white", fontSize: "30px" ,marginLeft:"20%",marginTop:"8.5%"}}> Noodle & Sandwish Varieties </div>
                        </Grid>
                        <Grid xs={3} style={{marginTop:"3%"}}>
                            <div style={{marginTop:"-3%"}}>
                            <div style={{ color: "#ffffff", fontSize: "25px",marginLeft:"60%"}}>Paneer Puff </div>
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"60%",marginTop:"3%"}}>Mint Puff </div>
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"60%",marginTop:"3%"}}>Veg coffee </div>
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"60%",marginTop:"3%"}}>Nuggets </div>
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"60%",marginTop:"3%"}}>Aloo Bonda  </div>
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"60%",marginTop:"3%"}}>Cheese Balls </div>
        
</div>
                        </Grid> 
                        <Grid xs={3} style={{marginTop:"3%"}} >
                            
                            <div  style={{marginTop:"-3%"}}> 
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"9%"}}>Mini Samosa</div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"9%"}}>Onion Bajji </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"9%"}}>Mushroom Puff </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"9%"}}>Onion Puff </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"9%"}}>Pav Bajji </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"9%"}}>Momos </div>
                            </div>

                        </Grid> 
                        <Grid xs={3} style={{marginTop:"3%"}} >
                            
                            <div style={{marginTop:"-3%"}}> 
                        
                            <div style={{ color: "white", fontSize: "25px",marginLeft:"23%"}}>Masala Meggi</div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"23%"}}>Veg Noodles</div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"23%"}}>Chilli Chese Noodles </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%",marginLeft:"23%"}}>Manchuriyan </div>
                          
                            </div>

                        </Grid> 
                        <Grid xs={3} style={{marginTop:"3%"}} >
                            
                            <div style={{marginTop:"-3%"}}> 
                           
                            <div style={{ color: "white", fontSize: "25px"}}>Corn Mayo Sandwich</div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%"}}>Corn Sandwich </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%"}}>Chilli Chees Sandwich </div>
                            <div style={{ color: "white", fontSize: "25px",marginTop:"3%"}}>Veg Sandwich </div>
                          
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
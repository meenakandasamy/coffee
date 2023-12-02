import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Contactbackimage from '../Images/Contactbackimage.jpg';
import Coffeecup from '../Image/Coffeecup.png';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function Contact() {

    return (
        <div>
        <div>
        <img src={Contactbackimage} style={{width:"100%",height:"88vh"}}/>
        </div>
        <div>
        <Grid container style={{ marginTop: "-35%",marginLeft:"31%"}} >
        <Grid  >
                            <img src={Coffeecup } style={{width:"50%",Color:"red",marginTop:"-13%",marginLeft:"6%"}} />
                                </Grid>
                            <Grid item xs={8} style={{marginTop:"1%"}}>
                                    <Typography style={{color:"white", fontSize:"25px" , fontfamily:'Brush Script MT',marginRight:"25vw"}}>Me With Coffee</Typography>
                                </Grid>
                        <Grid item xs={15} style={{ marginTop: "1%" }}>
                          <div>
                              <Typography style={{width:"10px",color:"white",fontSize:"15PX"}}><h3>Contact</h3></Typography>
                                </div>
                                </Grid>
                                <Grid item xs={3} style={{ marginTop: "1%" }}>
                                    <div>
                                <Typography style={{width:"10px",color:"white",fontSize:"25PX"}}><div><EmailOutlinedIcon />Mail</div></Typography>
                                </div>
                                    </Grid>
                                    <Grid item xs={1} style={{ marginTop: "1%" }}> 
                                  
</Grid>
                                </Grid>
                               
                           
                              
                            </div>
                            </div>
                            
                           
                            
     
        
    )
}
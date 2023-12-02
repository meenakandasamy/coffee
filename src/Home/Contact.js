import { Typography } from '@mui/material';
import Contactbackimage from '../Images/Contactbackimage.jpg';
import Coffeecup from '../Image/Coffeecup.png';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function Contact() {
    const Item = styled(Paper)(({ theme }) => ({
    }));
    return (
        <div>
        <div>
        <img src={Contactbackimage} style={{width:"100%",height:"88vh"}}/>
        </div>
        <div>
        <Grid container style={{ marginTop: "-28%",marginLeft:"31%"}} >
        <Grid  >
                            <img src={Coffeecup } style={{width:"50%",Color:"red",marginTop:"-13%"}} />
                                </Grid>
                            <Grid item xs={8} style={{marginTop:"1%",marginLeft:"-3vw"}}>
                                    <Typography style={{color:"white", fontSize:"25px" , fontfamily:'Brush Script MT',marginRight:"25vw"}}>Me With Coffee</Typography>
                                </Grid>
                        <Grid item xs={15} style={{ marginTop: "1%" }}>
                          <div>
                              <Typography style={{width:"10px",color:"white",fontSize:"20PX"}}><h3>ContactUs</h3></Typography>
                                </div>
                                </Grid>
                                </Grid>
                                <div>
                                <Grid container style={{marginLeft:"31%"}} >
                            <Grid item xs={0.2} >
                            <Typography style={{width:"10px",color:"white",fontSize:"20PX"}}><EmailOutlinedIcon/></Typography>
                                </Grid>
                                <Grid item xs={0.6}>
                            <Typography style={{width:"10px",color:"white",fontSize:"20PX"}}>Mail</Typography>
                                </Grid>
                                <Grid item xs={0.1}>
                            <Typography style={{width:"10px",color:"white",fontSize:"20PX"}}>:</Typography>
                                </Grid>
                                <Grid item xs={1}>
                            <Typography style={{width:"10px",color:"white",fontSize:"19PX"}}>meewithcoffee@gmail.com</Typography>
                                </Grid>
                                </Grid>
                                </div>
                                <div style={{marginTop:"0.5%"}}>
                                <Grid container style={{marginLeft:"31%"}} >
                            <Grid item xs={0.2} >
                            <Typography style={{width:"10px",color:"white",fontSize:"19PX"}}><LocalPhoneIcon/></Typography>
                                </Grid>
                                <Grid item xs={0.6} >
                            <Typography style={{width:"10px",color:"white",fontSize:"19PX"}}>PhoneNo</Typography>
                                </Grid>
                                <Grid item xs={0.1} >
                            <Typography style={{width:"10px",color:"white",fontSize:"19PX"}}>:</Typography>
                                </Grid>
                                <Grid item xs={0.2} >
                            <Typography style={{width:"10px",color:"white",fontSize:"19PX"}}>9342346548</Typography>
                                </Grid>
                                </Grid>
                                </div>
                               
                               
                           
                              
                            </div>
                            </div>
                            
                           
                            
     
        
    )
}
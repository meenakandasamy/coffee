import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Contactbackimage from '../Images/Contactbackimage.jpg';
export default function Contact() {

    return (
        <div>
        <div>
        <img src={Contactbackimage} style={{width:"100%",height:"98vh"}}/>
        </div>
        <div>
        <Grid container style={{ marginTop: "-10%" }} >
                        <Grid item xs={3} style={{ marginTop: "1%" }}>
                            <div>
                              <Typography style={{width:"10px",color:"white"}}>Contact</Typography>
                            </div>
                            </Grid>
                            </Grid>
        </div>
        </div>
    )
}
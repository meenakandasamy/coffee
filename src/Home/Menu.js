import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
// import chai from '../Image/chai.png';
export default function Menu() {
    const Item = styled(Paper)(({ theme }) => ({
    }));
    
    return (
        <div>
        <Box sx={{ width: '100%', margin:"0"}}>
                        <div style={{}}>
                            <Grid container style={{marginTop:"1%"}} >
                            <Grid item >
                             {/* <img src={chai} style={{width:"40%",marginLeft:"10%"}} /> <br></br> */}
                           <Link to="/" style={{marginLeft:"10%"}}> Chai &Coffee Varieties</Link>
                                </Grid>
                          
                                <Grid item xs={1} style={{marginTop:"1%"}}>
                                  
                                </Grid>
                                <Grid item xs={1} style={{marginTop:"1%"}}>
                              
                                </Grid>
                                <Grid item xs={1}style={{marginTop:"1%"}}>
                              
                                </Grid>
                                <Grid item xs={1} style={{marginTop:"1%"}}>
                             
                                </Grid>
                            </Grid>
                        </div>
                    </Box>
        </div>
    )
}
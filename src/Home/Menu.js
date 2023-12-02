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
<img src={Menubackground } style={{width:"100%",height:"89.5vh"}}/>
            </div>

            {/* <div>
                Coffee&Tea variates

            </div> */}
        </div>
    )
}
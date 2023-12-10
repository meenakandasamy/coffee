import React from "react"
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import restaurantcoffee from '../Image/restaurantcoffee.png';
import { Typography } from "@mui/material";
const preventDefault = (event) => event.preventDefault();

const Home = () => {
    return (
        <div>
<div >
<img src={restaurantcoffee} style={{width:"100%",height: "89vh"}}/>
</div>

</div>
    )

}
export default Home;
import React from "react";
import Navbar from "../navigation/navigation";
import Footer from "../footer/footer";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import One from "../../images/Home.png"
import Two from "../../images/Hospitality.png"
import Three from "../../images/Industrial.png"
import Four from "../../images/Medical.png"
import './home.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Home() {

    return (
        <div className="Home">
            <Navbar />
            <div className="Home-part">
                <div className="home-text">
                    <Typography variant="h2" component="h2" sx={{ fontWeight: 'bold' }}>
                        Africa's Reliable Hygeine Partner
                    </Typography>
                    <Typography variant="h4" component="h2">
                        Elevate Your Standards With Our Premium Cleaning Solutions
                    </Typography>
                </div>
            </div>
            <div className="sector">
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }} className="sectorText">
                    Choose Your Sector and Explore Expert Selected Products
                </Typography>
                <div className="sectorDiv">
                    <Box sx={{ width: '30%' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <img src={Three} alt="one" className="one" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={Two} alt="one" className="one" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={Three} alt="one" className="one" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={Two} alt="one" className="one" />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;

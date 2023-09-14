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
import Collaboration from '../../images/Ellipse 3.png'
import Vision from '../../images/Ellipse 4.png'
import Growth from '../../images/Ellipse 5.png'
import './home.css'

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

function Home() {

    return (
        <div className="Home">
            <div className="Home-part">
                <div className="nav">
                    <Navbar />
                </div>

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
                        <Grid container spacing={10}>
                            <Grid item xs={6}>
                                <img src={One} alt="one" className="one" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={Two} alt="one" className="one" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={Three} alt="one" className="one" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={Four} alt="one" className="one" />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
            <div className="prodDiff">
                <Typography
                    className="prodHeader"
                    variant="h4"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                >
                    What Makes Our Products Different?
                </Typography>
                <div className="image-row">
                    <img src={Collaboration} alt="Image 1" className="image" />
                    <img src={Vision} alt="Image 2" className="image" />
                    <img src={Growth} alt="Image 3" className="image" />
                </div>
                <div className="prodText">
                    <Typography>
                        At AstraChem, we're all about making a difference. We're not just here to provide you with locally
                        developed cleaning solutions for your home and business; we want to be a driving force for
                        positive change in the communities we touch. Through partnerships, educational programs, and
                        philanthropy, we will work to uplift communities, providing them with the chance to thrive and
                        succeed. For us AstraChem provides more than just hygiene – it's a powerful catalyst that changes
                        lives.
                    </Typography>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;

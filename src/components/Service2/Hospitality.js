import React, { useState } from "react";
import "./Hospitality.css";
import CardNavbar from "../CardNav/navigation/navigation";
import Footer from "../footer/footer";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Serv1 from '../../images/Hos.jpg'
// import secondIMG from '../../Images/QA Training pic 2.png'

const Hospitality = () => {

    return (
        <div className="Service1">
            <CardNavbar />
            <Container>
                <div className="Service1-content">
                    <Typography variant="h3" component="h3" className="Serv1-typo">
                    Your Trusted Partner for Top-Quality Hospitality Cleaning Products
                    </Typography>
                    <br />
                    <br />
                    <img src={Serv1} alt="Card" className="serv-image1" />
                    <br />
                    <br />
                    <br />
                    <div className="serv1-article">
                        <Typography>
                        At AstraChem, we provide a comprehensive range of cleaning solutions tailored to the unique 
                        needs of the hospitality industry. From disinfectants to specialized formulations, we 
                        understand the challenges faced by hospitality establishments, and we're here to be your 
                        trusted supplier of top-quality cleaning products that will elevate the cleanliness and 
                        safety of your premises.
                        </Typography>

                        <div className="Serv1-text">
                            <Typography variant="h5" component="h5" className="Serv1-t">
                            Our Commitment to Hospitality Excellence
                            </Typography>
                            <Typography className="training1">
                            AstraChem is more than just a supplier of cleaning products for the hospitality sector; 
                            we're your dedicated partner in ensuring the well-being of your guests and staff. Our unwavering 
                            commitment to your success is evident in every cleaning product and service we offer.
                            </Typography>
                            <Typography variant="h5" component="h5" className="Serv1-t">
                            How We Can Help You Create a Cleaner Hospitality Environment
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>• Customized Solutions</span>We know that one-size-fits-all solutions don't work 
                                in the hospitality industry. Our team works closely with you to understand your specific requirements, 
                                enabling us to provide bespoke cleaning products perfectly suited to your establishment. We're not merely here 
                                to sell products; we're here to discover the right solutions for you.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>• Trustworthy Quality</span>In hospitality, maintaining high standards of 
                                cleanliness is non-negotiable. Our cleaning products undergo rigorous testing to ensure they meet the 
                                industry's highest benchmarks for quality, safety, and compliance. With AstraChem, you can trust that your 
                                facility is in the best hands.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>• Expert Guidance</span> Have questions or need guidance? Our team of experts is 
                                here to assist you every step of the way. Whether you require assistance with product selection, detailed usage instructions, 
                                or compliance concerns, we're just a call or email away. We're here to simplify your tasks and provide the 
                                support you need.
                            </Typography>
                            
                            <br/>
                            {/* <img src={secondIMG} alt="Card" className="serv-image1" /> */}
                            <Typography variant="h5" component="h5" className="Serv1-t">
                            Sectors in the Hospitality Industry We Serve
                            </Typography>
                            <Typography component="div" >
                                {/* <br /> */}
                                <br />
                                • Hotels
                                <br />
                                • Restaurants
                                <br />
                                • Resorts
                                <br/>
                                • Spas
                                <br />
                                <br />
                                • Event Venues
                                <br />
                                • Vacation Rentals
                                <br />
                                • Catering Services
                                <br/>
                                • Bars and Lounges
                                <br />
                               
                            </Typography>
                            <Typography variant="h5" component="h5" className="Serv1-t">
                            What Other Sectors Does AstraChem Serve?
                            </Typography>
                            <Typography className="training1">
                            If you're seeking cleaning solutions for other sectors, AstraChem extends its expertise 
                            to the following industries:
                            </Typography>
                            <Typography component="div" >
                                <br />
                                <br />
                                • Medical
                                <br />
                                • Industrial 
                                <br />
                                • Domestic/Homes
                                <br/>
                               
                            </Typography>
                            <Typography variant="h5" component="h5" className="Serv1-t">
                            Why Choose AstraChem for Your Hospitality Cleaning Needs?
                            </Typography>
                            <Typography className="training1">
                            Are you searching for top-tier cleaning solutions in the hospitality sector? AstraChem 
                            has you covered. We're committed to helping you maintain the highest standards of 
                            cleanliness and safety for your guests. Explore our product range to discover how 
                            AstraChem can be your reliable supplier of cleaning products.
                            </Typography>
                        </div>
                        <div className=" servBtn">
                            <Button
                                variant="contained"
                                size="medium"
                                className="serv1Btn"
                                // href="https://calendly.com/droverton/econoteque-consultation"
                                target="_blank"
                            >
                                Contact Us Today
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>

    )
}

export default Hospitality;
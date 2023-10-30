import React, { useState } from "react";
import "./Domestic.css";
// import Navbar from "../Navigation/Navigation/Nav";
// import Footer from "../Footer/footer";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
// import Serv1 from '../../Images/QA Training.png'
// import secondIMG from '../../Images/QA Training pic 2.png'

const Domestic = () => {

    return (
        <div className="Service1">
            {/* <Navbar /> */}
            <Container>
                <div className="Service1-content">
                    <Typography variant="h3" component="h3" className="Serv1-typo">
                        Your Reliable Partner for Top-Quality Affordable Domestic Cleaning Products
                    </Typography>
                    <br />
                    <br />
                    {/* <img src={Serv1} alt="Card" className="serv-image1" /> */}
                    <br />
                    <br />
                    <br />
                    <div className="serv1-article">
                        <Typography>
                            At AstraChem, we offer a comprehensive selection of cleaning solutions tailored to meet the unique
                            requirements of domestic and home settings. From disinfectants to specialized formulations,
                            we recognize the challenges faced by homeowners, and we're here to serve as your trusted supplier
                            of top-tier cleaning products that enhance cleanliness and safety in your living space.
                        </Typography>

                        <div className="Serv1-text">
                            <Typography variant="h5" component="h5" className="Serv1-t">
                                Our Commitment to Home Excellence
                            </Typography>
                            <Typography className="training1">
                                AstraChem is more than just a supplier of cleaning products for domestic and home use; we're your
                                dedicated ally in ensuring the well-being of your family and the upkeep of your residence.
                                Our unwavering commitment to your satisfaction is evident in every cleaning product and service we
                                provide.
                            </Typography>
                            <Typography variant="h5" component="h5" className="Serv1-t">
                                How We Can Help You Create a Cleaner Home Environment
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>• Customized Solutions</span>We understand that each home is unique, and
                                one-size-fits-all solutions don't suffice. Our team collaborates closely with you to understand your specific
                                needs, allowing us to offer tailored cleaning products perfectly suited to your living space. We're not just
                                here to sell products; we're here to find the right solutions for you.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>• Trusted Quality</span>In the domestic sector, maintaining a 
                                high standard of cleanliness is a priority. Our cleaning products undergo stringent testing to ensure 
                                they meet the highest standards for quality, safety, and compliance. With AstraChem, you can have 
                                confidence that your home is in safe hands.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>• Expert Guidance</span> Do you have questions 
                                or need guidance? Our team of experts is at your service. Whether you need advice on
                                 product selection, detailed usage instructions, or have compliance concerns, we're 
                                 just a call or email away. We're here to make your household tasks easier and 
                                 provide the support you need.

                            </Typography>
                            <br />
                            {/* <img src={secondIMG} alt="Card" className="serv-image1" /> */}
                            <Typography variant="h5" component="h5" className="Serv1-t">
                            Sectors in the Domestic/Home Industry We Serve
                            </Typography>
                            <Typography component="div" >
                                • Family Homes
                                <br />
                                • Apartments and Condos
                                <br />
                                • Townhouses
                                <br />
                                • Vacation Rentals
                                <br />
                                • Residential Communities
                                <br />
                            </Typography>
                            <Typography variant="h5" component="h5" className="Serv1-t">
                            What Other Sectors Does AstraChem Serve?
                            </Typography>
                            <Typography className="training1">
                            If you're in need of cleaning solutions for different sectors, AstraChem also extends 
                            its expertise to the following industries:
                            </Typography>
                            <Typography component="div" >
                                • Medical
                                <br />
                                • Hospitality
                                <br />
                                • Industrial
                                <br />
                            </Typography>
                            <Typography variant="h5" component="h5" className="Serv1-t">
                            Why Choose AstraChem for Your Home Cleaning Needs?
                            </Typography>
                            <Typography className="training1">
                            Are you searching for top-tier cleaning solutions for your home? AstraChem has you covered. We're committed 
                            to helping you maintain the highest standards of cleanliness and safety in your living space. Explore our 
                            product range to discover how AstraChem can be your trusted supplier of cleaning products.
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
            {/* <Footer /> */}
        </div>

    )
}

export default Domestic;
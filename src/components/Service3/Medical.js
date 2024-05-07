import React, { useState } from "react";
import "./Medical.css";
import Navbar from "../navigation/navigation";
import Footer from "../footer/footer";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Serv1 from '../../images/Med.jpg'
// import secondIMG from '../../Images/QA Training pic 2.png'

const Medical = () => {

    return (
        <div className="Service1">
            {/* <Navbar /> */}
            <Container>
                <div className="Service1-content">
                    <Typography variant="h3" component="h3" className="Serv1-typo">
                        AstraChem: Leading the Way in Cleaning Products for the Medical Sector
                    </Typography>
                    <br />
                    <br />
                    <img src={Serv1} alt="Card" className="serv-image1" />
                    <br />
                    <br />
                    <br />
                    <div className="serv1-article">
                        <Typography>
                            AstraChem offers a range of cleaning solutions, including disinfectants and fungi-fighting
                            formulations. We understand the unique challenges faced by various medical facilities, from
                            hospitals and clinics to laboratories. Our mission is to provide tangible cleaning product
                            solutions that make a significant difference in your facility.
                        </Typography>

                        <div className="Serv1-text">
                            <Typography variant="h5" component="h5" className="Serv1-t">
                                Our Commitment to Medical Faciluty
                            </Typography>
                            <Typography className="training1">
                                At AstraChem, we're more than just a supplier of cleaning products for the medical sector;
                                we're your dedicated ally in ensuring the well-being of your patients, staff, and researchers.
                                Our commitment to your success is reflected in every product and service we offer.
                            </Typography>
                            <Typography variant="h5" component="h5" className="Serv1-t">
                                How We Can Help You Create a Cleaner Medical Facility
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}> • Tailored Solutions</span><br />We don't believe in one-size-fits-all
                                solutions. Our team collaborates closely with you to understand your specific needs, allowing us to provide
                                customized cleaning products perfectly suited to your environment. We're not just here to sell you products;
                                we're here to find the right solutions for you.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>• Quality You Can Trust</span><br />In the medical sector, there's no
                                room for compromise. Our cleaning products for the medical sector undergo rigorous testing to ensure they
                                meet the highest standards of quality, safety, and compliance. We provide you with peace of mind that your
                                environment is in the best hands
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>• Expert Support</span> Have questions or need
                                guidance? Our team of experts is at your service. Whether you need advice on product
                                selection, detailed usage instructions, or compliance concerns, we're just a call or email
                                away. We're here to make your job easier.
                            </Typography>

                            {/* <br /> */}
                            {/* <img src={secondIMG} alt="Card" className="serv-image1" /> */}
                            <Typography variant="h5" component="h5" className="Serv1-t">
                                What Other Sectors Does AstraChem Assist With?
                            </Typography>
                            <Typography component="div" >
                                Are you looking for cleaning solutions in other sectors? We serve the following sectors:
                                <br />
                                <br />
                                • Industrial
                                <br />
                                • Hospitality
                                <br />
                                • Domestic and Homes
                            </Typography>
                            <Typography variant="h5" component="h5" className="Serv1-t">
                                Partner with AstraChem Today
                            </Typography>
                            <Typography>
                            Join forces with AstraChem, and together we'll create a cleaner, safer, and more 
                            efficient medical environment. Your success is our success, and we're ready to empower 
                            your journey to the highest standards of medical hygiene.
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

export default Medical;
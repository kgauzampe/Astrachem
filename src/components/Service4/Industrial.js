import React, { useState } from "react";
import "./Industrial.css";
import CardNavbar from "../CardNav/navigation/navigation";
import { Link } from 'react-router-dom';
import Footer from "../footer/footer";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Serv1 from '../../images/Ind.jpg'
// import secondIMG from '../../Images/QA Training pic 2.png'

const Industrial = () => {

    return (
        <div className="Service1">
            <CardNavbar />
            <Container>
                <div className="Service1-content">
                    <Typography variant="h3" component="h3" className="Serv1-typo">
                    AstraChem: Your Source for High-Quality Industrial Cleaning Products
                    </Typography>
                    <br />
                    <br />
                    <img src={Serv1} alt="Card" className="serv-image1" />
                    <br />
                    <br />
                    <br />
                    <div className="serv1-article">
                        <Typography>
                        AstraChem offers a comprehensive range of industrial cleaning solutions, from powerful 
                        disinfectants to specialized formulations designed to tackle tough challenges. We understand 
                        the unique demands faced by industrial facilities, and our dedication lies in providing reliable 
                        cleaning product solutions for your industry.
                        </Typography>
                            <br/>
                        <div className="Serv1-text">
                            <Typography variant="h5" component="h5" className="Serv1-t">
                            Our Commitment to Industry Excellence
                            </Typography>
                            <Typography className="training1">
                            At AstraChem, we're more than just a supplier of industrial cleaning products; we're 
                            your trusted partner in upholding the highest standards of cleanliness and safety in 
                            your industrial facility. Our commitment to your success is evident in every product 
                            and service we deliver.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}> • Customized Solutions</span><br />We believe in tailored 
                                solutions rather than one-size-fits-all approaches. Our team works closely with you to grasp the 
                                specific needs and requirements of your industrial setting. This collaboration allows us to offer you 
                                customized cleaning products perfectly suited to your environment. We're not just here to provide 
                                products; we're here to find the right solutions for your industry.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>• Uncompromised Quality</span><br />In the industrial sector, there's 
                                no room for compromise. Our cleaning products undergo rigorous testing to ensure they meet the highest 
                                standards of quality, safety, and compliance. We provide you with peace of mind, knowing that your environment 
                                is entrusted to the best cleaning products available.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>• Professional Support</span> Do you have questions or need guidance? Our team of 
                                experts is readily available. Whether you require advice on product selection, detailed usage instructions, or compliance 
                                concerns, we're just a call or email away. We're here to simplify your industrial cleaning processes.
                            </Typography>

                            {/* <br/> */}
                            {/* <img src={secondIMG} alt="Card" className="serv-image1" /> */}
                            <Typography variant="h5" component="h5" className="Serv1-t">
                            Sectors in the Industrial Industry We Serve:
                            </Typography>
                            <Typography component="div" >
                            If you're seeking cleaning solutions for other industrial sectors, AstraChem extends its expertise to a wide range of industries, including:
                                <br />
                                <br />
                                • Manufacturing Plants
                                <br />
                                • Warehouses
                                <br />
                                • Logistics and Distribution Centers
                                <br />
                                • Food Processing Facilities
                                <br />
                                <br />
                                • Automotive Workshops
                                <br />
                                • Petrochemical and Refinery Sites
                                <br />
                                • Construction Sites
                                <br />
                                • Agricultural Facilities
                                <br />
                            </Typography>
                            <Typography variant="h5" component="h5" className="Serv1-t">
                            What Other Sectors Does AstraChem Serve?
                            </Typography>
                            <Typography component="div" >
                            If you're seeking cleaning solutions for other sectors, AstraChem extends its expertise to the following industries:
                                <br />
                                <br />
                                • Medical
                                <br />
                                • Hospitality
                                <br />
                                • Domestic/Homes
                                <br />
                            </Typography>
                            <Typography variant="h5" component="h5" className="Serv1-t">
                            Partner with AstraChem Today
                            </Typography>
                            <Typography>
                            Collaborate with AstraChem to create a cleaner, safer, and more efficient industrial 
                            environment. Your success is our success, and we're prepared to support your journey 
                            toward the highest cleanliness standards in the industrial sector.
                        </Typography>
                        </div>
                        <div className=" servBtn">
                        <Button
                                variant="contained"
                                size="medium"
                                className="serv1Btn"
                                component={Link}
                                to="/#contactDiv"
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

export default Industrial;
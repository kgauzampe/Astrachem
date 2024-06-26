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
import Button from '@mui/material/Button';
import Banner from '../../images/banner.png'
import Econo from '../../images/logox.ico'
import Contact from "../Contact/Contact";
import Products from '../../images/newprod.png'
import Prod from '../../images/newbanner.png'
import Card1 from '../Card1/card1'
import Card2 from '../Card2/card2'
import Card3 from '../Card3/card3'
import Card4 from '../Card4/card4'
import Serv1 from '../Serv1Card/Serv1Card'
import Serv2 from '../Serv2Card/Serv2Card'
import Serv3 from '../Serv3Card/Serv3Card'
import Serv4 from '../Serv4Card/Serv4Card'
import GlobalL from '../../images/logo global.png'
import { saveAs } from 'file-saver';
import './home.css'


function Home() {
    const handleDownload = () => {

        const fileUrl = process.env.PUBLIC_URL + '/Assets/product_list.pdf';


        saveAs(fileUrl, 'product_list.pdf');
    };


    return (
        <div className="Home">
            <div className="Home-part">
                <div className="nav">
                    <Navbar />
                </div>

                <div className="home-text">
                    <div className="t1">
                        <Typography variant="h2" component="h2" sx={{ fontWeight: 'bold' }}>
                            Africa's Reliable Hygeine Partner
                        </Typography>
                    </div>
                    <div className="t2">
                        <Typography variant="h5" component="h2">
                            Elevate Your Standards With Our Premium Cleaning Solutions
                        </Typography>
                    </div>

                </div>
                <div className="homeBtns">
                    <button className="learn"     onClick={() => {
                            const abtAstrachem = document.getElementById('abtAstrachem');
                            if (abtAstrachem) {
                                abtAstrachem.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                        Learn More
                    </button>
                    <button className="homeOrderBtn"
                          onClick={() => {
                            const contactDiv = document.getElementById('contactDiv');
                            if (contactDiv) {
                                contactDiv.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                        Order
                    </button>
                </div>
            </div>

            <div className="sector">
                <Typography
                    color="#3473C8"
                    variant="h4"
                    sx={{ fontWeight: 'bold' }}
                    style={{ fontFamily: 'Montserrat' }}>
                    Our Products
                </Typography>
                <div className="prodlistcon">
                    <img src={Products} alt="Card" className="Products" />
                </div>
                <div className="prodListBtn">
                    <button className="ProdList" onClick={handleDownload}>
                        Download Product List
                    </button>
                </div>
                <Typography
                    color="#3473C8"
                    variant="h4"
                    style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
                    Choose Your Sector and Explore Expert Selected Products
                </Typography>
                <div className="about-cards">
                    <div className="card1">
                        <Serv1 />
                    </div>
                    <div className="card2">
                        <Serv2 />
                    </div>
                    <div className="card3">
                        <Serv3 />
                    </div>
                    <div className="card4">
                        <Serv4 />
                    </div>
                </div>

            </div>
            <div className="prodDiff">
                <Typography
                    // className="prodHeader"
                    variant="h4"
                    color="#3473C8"
                    style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}
                >
                    What Makes Our Products Different?
                </Typography>
                <div className="image-row">
                    <img src={Collaboration} alt="Image 1" className="image" />
                    <img src={Vision} alt="Image 2" className="image" />
                    <img src={Growth} alt="Image 3" className="image" />
                </div>
                <div className="centext">
                    <Typography variant="h6" color="#65676A"  style={{fontFamily: 'Montserrat', textAlign: 'center', fontFamily: 'Montserrat' }}>
                        At AstraChem, we're all about making a difference. We're not just here to provide you with locally
                        developed cleaning solutions for your home and business; we want to be a driving force for
                        positive change in the communities we touch. Through partnerships, educational programs, and
                        philanthropy, we will work to uplift communities, providing them with the chance to thrive and
                        succeed. For us AstraChem provides more than just hygiene – it's a powerful catalyst that changes
                        lives.
                    </Typography>
                    
                </div>
                <div className="cater">
                    <Typography
                        variant="h6"
                        color="#65676A"
                        style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}
                    >
                        Sectors We Cater For
                    </Typography>
                    <div style={{ textAlign: 'center' }}>
                        <Typography variant="h6" color="#65676A" style={{ fontFamily: 'Montserrat' }}>
                            ✔ Domestic/Home
                        </Typography>
                        <Typography variant="h6" color="#65676A" style={{ fontFamily: 'Montserrat' }}>
                            ✔ Medical Sector
                        </Typography>
                        <Typography variant="h6" color="#65676A" style={{ fontFamily: 'Montserrat' }}>
                            ✔ Industrial Sector
                        </Typography>
                        <Typography variant="h6" color="#65676A" style={{ fontFamily: 'Montserrat' }}>
                            ✔ Hospitality Sector
                        </Typography>
                    </div>


                    <br />
                    <br />
                    <button className="btnOrder"
                          onClick={() => {
                            const contactDiv = document.getElementById('contactDiv');
                            if (contactDiv) {
                                contactDiv.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                        order
                    </button>
                </div>
                <div className="imgBanner">
                    <img src={Prod} alt="Banner" className="Banner" />
                </div>
                <div id="abtAstrachem" className="abtAstrachem" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <Typography
                        className="aboutAtext"
                        color="white"
                        variant="h3"
                        style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}
                    >
                        About AstraChem
                    </Typography>
             
                    <Typography color="white" className="par1" variant="h6">
                    At AstraChem, we are more than just a detergent company – we are your partner in cleanliness
                        and hygiene. Based in the heart of South Africa, we take pride in delivering top-tier cleaning
                        solutions to a wide range of sectors, including domestic, industrial, medical, and hospitality.
                    </Typography>
                    <br />
                    <br />
                    <Typography
                        color="white"
                        variant="h4"
                        style={{ fontFamily: 'Montserrat' }}
                    >
                        Our Mission
                    </Typography>
                    <Typography color="white" className="par1" variant="h6">
                        Our mission is simple yet profound: to enhance the well-being of individuals and communities by
                        providing cutting-edge cleaning solutions. We believe that a clean environment is the foundation
                        of a healthy and thriving society.
                    </Typography>
                    <br />
                    <br />
                    <Typography
                        color="white"
                        variant="h4"
                        style={{ fontFamily: 'Montserrat' }}
                    >
                        Our Values
                    </Typography>
                    <Typography color="white" className="par1" variant="h6">
                        • Quality Excellence: We are committed to delivering the highest quality cleaning solutions that
                        meet and exceed your expectations.
                        <br />

                        •  Innovation: We continually strive to innovate and improve our products to ensure efficiency
                        and sustainability
                        <br />

                        •  Community Focus: We understand the importance of giving back to the community, and we
                        actively participate in initiatives that uplift and empower those around us.
                    </Typography>
                    <br />
                    <br />
                    <Typography
                        color="white"
                        variant="h4"
                        style={{ fontFamily: 'Montserrat' }}
                    >
                        Why Choose AstraChem?
                    </Typography>
                    <Typography color="white" className="par1" variant="h6">
                        1. Expertise: With years of experience in the cleaning industry, our team comprises experts
                        who understand the unique challenges faced by each sector we serve.
                        <br />
                        <br />
                        2 .Custom Solutions: We tailor our cleaning solutions to suit the specific needs of
                        domestic, industrial, medical, and hospitality sectors.
                        <br />
                        <br />
                        3. Commitment to Sustainability: We prioritize eco-friendly practices in our manufacturing
                        processes, helping you maintain a clean environment while preserving the planet.
                        <br />
                        <br />
                        4. Community Engagement: We believe in the power of community, and our initiatives aim to
                        create a positive impact in South Africa and beyond.
                    </Typography>
                    <Typography
                        color="white"
                        variant="h4"
                        style={{ fontFamily: 'Montserrat' }}
                    >
                        Our Vision
                    </Typography>
                    <Typography color="white" className="par1" variant="h6">
                        Our vision extends beyond being a leading detergent company. We envision a cleaner, safer, and
                        more prosperous South Africa where our products contribute to healthier lives and sustainable
                        communities
                        <br />
                        <br />
                        Join us in our journey to cleaner, healthier environments. Partner with AstraChem and
                        experience the difference in cleanliness.
                    </Typography>
                    <button
                        className="btnPartner"
                        onClick={() => {
                            const contactDiv = document.getElementById('contactDiv');
                            if (contactDiv) {
                                contactDiv.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Partner With AstraChem
                    </button>
                </div>
                <div className="partners">
                    <Typography
                        color="#3473C8"
                        variant="h4"
                        style={{ fontFamily: 'Montserrat' }}>
                        Our Partners
                    </Typography>
                    <div className="partnerlogos">
                        <div className="image-row">
                            <img src={Econo} alt="Image 1" className="image" />
                            <img src={GlobalL} alt="Image 2" className="image" />
                        </div>
                    </div>
                    <div className="contactSection">
                        <Typography
                            color="#3473C8"
                            variant="h4"
                            style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
                            Wish To Order? Contact The AstraChem Team
                        </Typography>
                        <Typography
                            className="interest"
                            variant="h6"
                            style={{ fontFamily: 'Montserrat' }}
                            color="#65676A"
                        >
                            If you interested making your order fill out the form below and one of our agents will contact
                            you back or contact us directly on our WhatsApp
                        </Typography>
                        <div id="contactDiv" className="con">
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;

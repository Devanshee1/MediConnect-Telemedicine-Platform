
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Lab.css";
import React, { useState, useEffect } from 'react';

export const Lab = () => {
  return (
    <div>
      {/* Slide show started */}
      <Container className="slideshow_lab">
        <Carousel interval={4500}>
          <Carousel.Item key="slide-1">
            <img
              className="d-block w-100"
              src={require("./Images/praco1.png")}
              alt=""
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item key="slide-2">
            <img
              className="d-block w-100"
              src={require("./Images/praco2.png")}
              alt=""
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item key="slide-3">
            <img
              className="d-block w-100"
              src={require("./Images/praco3.png")}
              alt=""
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      {/* Slide show ended */}
      {/* The rest of your code remains unchanged */}
    

               {/*-------slide show ended------*/}

               <br />
               <br />

               <Container >
                  <div className="contact_lab">
                      <div className="contact_pic">
                         
                        <img src="https://www.practo.com/tests/public/images/call_to_order.svg" alt="" />
                         
                         <div>
                        <p>Need help with booking your test?</p>
                        <p>Our experts are here to help you</p>
                         </div>
                      </div>
                      <div className="contact_num">
                          
                          <div>
                         <img src = "https://www.practo.com/tests/public/icons/call-to-order.svg" alt="" />
                         </div>
                           <h4>+91 8303446036</h4> 
                      </div>
                 </div> 
               </Container>
               <br />
               <Container>
                   <div className="promo_code">
                   <h4>Coupons for lab tests</h4>
                   
                   <div className="promo_img">
                       <img src={require("./Images/promo1.png")} alt=""/>
                       <img src={require("./Images/promo2.png")} alt=""/>
                   </div>
                   </div>
               </Container>

               <br />
               <Container>
               
               <div className="top_tests">
               <h4>Top Booked Diagnostic Tests</h4>
               <br />
               
               <div className="test_flex">
                   
                   <div className="test_div">
                       <h6>Covid Antibody IGG</h6>
                       <p>Known as Covid Clia blood serum</p>
                       <p>E-Reports in 2 days</p>
                       <h5>₹ 1500</h5>
                       
                       <div></div><p>ADD</p>
                   </div>
                   <div className="test_div">
                   <h6>Fasting Blood Sugar</h6>
                       <p>Known as Glucose fasting blood</p>
                       <p>E-Reports on next day</p>
                       <h5>₹ 150</h5>
                       <div></div>
                       <p>ADD</p>
                   </div>
                   <div className="test_div">
                   <h6>Beta HCG</h6>
                       <p>Known as Beta Hcg Automated Blood</p>
                       <p>E-Reports on next day</p>
                       <h5>₹ 315</h5>
                       <div></div>
                       <p>ADD</p>
                   </div>
                   <div className="test_div">
                   <h6>Vitamin B12</h6>
                       <p>Known as Vitamin B12 Conventional Blood</p>
                       <p>E-Reports on next day</p>
                       <h5>₹ 490</h5>
                       <div></div>
                       <p>ADD</p>
                   </div>
                   <div className="test_div">
                   <h6>HbA1c</h6>
                       <p>Known as Glycosylated Haemoglobin Blood</p>
                       <p>E-Reports on next day</p>
                       <h5>₹ 550</h5>
                       <div></div>
                       <p>ADD</p>
                   </div>
                   <div className="test_div">
                   <h6>Liver Function Test</h6>
                       <p>Known as Liver Function Tests Blood</p>
                       <p>E-Reports on next day</p>
                       <h5>₹ 400</h5>
                       <div></div>
                       <p>ADD</p>
                   </div>
                   
               </div>
               
               </div>
               </Container>
<br />
               <Container>
                   <div className="health_div">
                       <h4>Find Tests by Health Concern</h4>
                       <br />
                       <div className="health_img">
                           <div className="h_img">
                               <img src={require("./Images/fever.png")} alt="" />
                               <p>Fever</p>
                           </div>
                           <div className="h_img"> <img src={require("./Images/diabaties.png")} alt="" />
                           <p>Diabaties</p></div>
                           <div className="h_img"> <img src={require("./Images/skin.png")} alt="" />
                           <p>Skin</p></div>
                           <div className="h_img"> <img src={require("./Images/kidney.png")} alt="" />
                           <p>Kidney</p></div>
                           <div className="h_img"> <img src={require("./Images/digestion.png")} alt="" />
                           <p>Digestion</p></div>
                           <div className="h_img"> <img src={require("./Images/cancer.png")} alt="" />
                           <p>Cancer</p></div>
                       </div>
                   </div>
               </Container>

               <br />

               <div className = "grey_bar">
                   </div>
               <Container >
                   
               

                   <br />
                   {/*
                   <h4 className="left">Top booked Medical tests</h4>
                   <p className="left">Get 10% Health Cashback*<strong>T&C</strong></p>
                   </div>
                   */}
                   <br />
                   <div className="test_medical">
                      <div className="tests">
                      
                          <div className="flex">
                          
                              <img src="https://www.practo.com/tests/public/icons/testprofiles/lipid_profile.png"/>
                             <h5>Lipid Profile</h5>
                             </div>
                             
                             <div><h6>Cholesterol LDL Test</h6>
                             <p>Also known as Cholesterol Ldl Enzymatic Colorimetric Method Blood</p>
                             </div>
                             
                             <div><h6>Cholesterol HDL</h6>
                             <p>Also known as Cholesterol Hdl Enzymatic Colorimetric Method Blood</p>
                             </div>
                             
                             <div><h6>Total Cholesterol Test</h6>
                             <p>Also known as Cholesterol test</p>
                             </div>
                             
                             <div><h6>Triglycerides Test</h6>
                             <p>Also known as Triglycerides Blood</p>
                             </div>
                             <br />
                             <button >BOOK NOW</button>
                          
                      </div>
                      <div className="tests">
                      
                      <div className="flex">
                     

                              <img src="https://www.practo.com/tests/public/icons/testprofiles/liver_profile.png"/>
                             <h5>Liver Profile</h5>
                            
                             </div>
                             
                             <div><h6>Cholesterol LDL Test</h6>
                             <p>Also known as Cholesterol Ldl Enzymatic Colorimetric Method Blood</p>
                             
                             </div>
                             <div><h6>Cholesterol HDL</h6>
                             <p>Also known as Cholesterol Hdl Enzymatic Colorimetric Method Blood</p>
                             
                             </div>
                             <div><h6>Total Cholesterol Test</h6>
                             <p>Also known as Cholesterol test</p>
                             
                             </div>
                             <div><h6>Triglycerides Test</h6>
                             <p>Also known as Triglycerides Blood</p>
                             
                             </div>
                             
                             <br />

                             <button >BOOK NOW</button>
                         
                      </div>
                      <div className="tests">
                      
                      <div className="flex">
                          
                              <img src="https://www.practo.com/tests/public/icons/testprofiles/blood_sugar.png"/>
                             <h5>Blood Sugar</h5>
                            
                             </div>
                         
                             <div><h6>Cholesterol LDL Test</h6>
                             <p>Also known as Cholesterol Ldl Enzymatic Colorimetric Method Blood</p>
                            
                             </div>
                             <div><h6>Cholesterol HDL</h6>
                             <p>Also known as Cholesterol Hdl Enzymatic Colorimetric Method Blood</p>
                             
                             </div>
                             <div><h6>Total Cholesterol Test</h6>
                             <p>Also known as Cholesterol test</p>
                             
                             </div>
                             <div><h6>Triglycerides Test</h6>
                             <p>Also known as Triglycerides Blood</p>
                             </div>
                             <br />

                             <button >BOOK NOW</button>
                          
                      
                   </div>
                   </div>
               </Container>

               
              <br />
              <br />
               <img className="d-block w-100" src= {require("./Images/work_with_us.png")} alt="img" />
               <br />
               <Container>
               <div>
                   <h2>How it works?</h2>
                   <br />
                   
                   <div className="written_flex">
                       <p>Search for tests and packages and seamlessly book a home sample collection.</p>
                       <div className="small_line"></div>
                       <p>We will send a certified professional to your place to assist you with the sample collection</p>
                       <div className="small_line"></div>
                       <p>We will email you the reports. You can also access your reports within your account on the Practo app</p>
                   </div>
                   <br />
               </div>
               </Container>


               

               
        </div>
    )
}
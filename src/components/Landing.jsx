// import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Footer } from "./footer";
import JsonData from "../data/data.json";
import { Testimonials } from "./testimonials";

// const TestimonialCard = ({ children }) => {
//     return (
//         <div className="col-md-4 test-card">
//             {children}
//         </div>
//     );
// };

export const Landing = () => {
    // const [landingPageData, setLandingPageData] = useState({});
    // useEffect(() => {
    //     setLandingPageData(JsonData);
    // }, []);
    return (
        <div>
            <Navigation />
            <div className="landing">
                <Header data={JsonData.Header} />
                <div class="custom-shape-divider-bottom-1648686581">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <h2 className="testimonial">
                <span>TESTIMONIALS</span>
            </h2>
            <div className="container">
                {/* <div className="row">
                    <TestimonialCard>"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae deleniti dolores ratione consequuntur, voluptates tempore ad suscipit sint amet, dolorem iste distinctio culpa veniam unde nobis rerum architecto soluta."</TestimonialCard>
                    <TestimonialCard>"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae deleniti dolores ratione consequuntur, voluptates tempore ad suscipit sint amet, dolorem iste distinctio culpa veniam unde nobis rerum architecto soluta."</TestimonialCard>
                    <TestimonialCard>"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae deleniti dolores ratione consequuntur, voluptates tempore ad suscipit sint amet, dolorem iste distinctio culpa veniam unde nobis rerum architecto soluta."</TestimonialCard>
                </div> */}
                {/* <Testimonials data= {JsonData.Board}></Testimonials> */}
                <h1 style={{'textAlign':'center'}}>COMING SOON</h1>
            </div>
            <Footer data={JsonData.Contact} />
        </div>
    );
};
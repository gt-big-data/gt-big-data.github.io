import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Footer } from "./footer";
import JsonData from "../data/data.json";
import { Testimonials } from "./testimonials";
import { CarouselTest } from "./carousel/CarouselTest";

const TestimonialCard = ({ children }) => {
    return (
        <div className="col-md-4 test-card">
            {children}
        </div>
    );
};

export const Landing = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <Navigation />
            <div className="landing">
                <CarouselTest />
                <Header data={JsonData.Header} />
            </div>
            <h2 className="testimonial">
                <span>TESTIMONIALS</span>
            </h2>
            <div className="container">
                <div className="row">
                    {/* <TestimonialCard>{JsonData.Testimonials[0].text}</TestimonialCard> */}
                    {/* <TestimonialCard>{JsonData.Testimonials[1].text}</TestimonialCard> */}
                    {/* <TestimonialCard>{JsonData.Testimonials[2].text}</TestimonialCard> */}
                </div>
                <Testimonials data= {JsonData.Testimonials}></Testimonials>
                
            </div>
            <Footer data={JsonData.Contact} />
        </div>
    );
};
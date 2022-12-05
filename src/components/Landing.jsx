import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Footer } from "./footer";
import JsonData from "../data/data.json";
import { Testimonials } from "./testimonials";
import { CarouselComponent } from "./carousel/CarouselComponent";

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
        window.scrollTo(0,0);
    }, []);

    return (
        <div>
            <Navigation />
            <div className="landing" style={{"marginBottom": "-2em"}}>
                <Header data={JsonData.Header} />
            </div>
            <h1 className="testimonial-text" style={
                {"textAlign": "center","color": "rgb(51, 51, 51)","margin": "2em 1em 1em"}
            }>
                Testimonials
            </h1>
            <div className="container">
                <Testimonials data= {JsonData.Testimonials}></Testimonials> 
            </div>
            <Footer data={JsonData.Contact} />
        </div>
    );
};

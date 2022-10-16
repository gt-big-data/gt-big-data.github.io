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
    let testimonial1 = JsonData.Board[0]
    // console.log("test:", testimonial1.name ,testimonial1.text)
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
                    <TestimonialCard>"{JsonData.Board[0].text}"</TestimonialCard>
                    <TestimonialCard>"{JsonData.Board[1].text}"</TestimonialCard>
                    <TestimonialCard>"{JsonData.Board[2].text}"</TestimonialCard>
                </div>
                <Testimonials data= {JsonData.Board}></Testimonials>
                <h1 style={{'textAlign':'center'}}>COMING SOON</h1>
            </div>
            <Footer data={JsonData.Contact} />
        </div>
    );
};
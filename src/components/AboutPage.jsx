// import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { About } from "./about";
import { WhyBDBI } from "./whyBDBI";
import { ProjRoles } from "./projRoles";
import { Committees } from "./committees";
import { Events } from "./events";
import { Person } from "./person";
import JsonData from "../data/data.json";

export const AboutPage = () => {
    // const [aboutPageData, setAboutPageData] = useState({});
    // useEffect(() => {
    //     setAboutPageData(JsonData);
    // }, );

    return (
        <div>
            <Navigation />
            <About data={JsonData.About} />
            <WhyBDBI data={JsonData.About.whyBDBI} />
            <ProjRoles data={JsonData.About.projRoles} />
            {/* <Committees data={JsonData}></Committees> */}
            <div className="gradient" style={{ marginBottom: "3em" }}>
                <Events data={JsonData.About.Events}></Events>
                <div className="container">
                    <div className="row">
                        <h1
                            style={{
                                textAlign: "center",
                                margin: "1em 1em 0em 1em",
                                color: "#ffffff",
                            }}
                        >
                            Past speakers
                        </h1>
                        <div>
                            <ul className="speakers">
                                {JsonData.About.Speakers
                                    ? JsonData.About.Speakers.map((d, i) => (
                                          <div className="col-xs-12 personBox">
                                              <Person
                                                  name={d.name}
                                                  title={d.title}
                                                  ld={d.linkedin}
                                                  tw={d.twitter}
                                                  image={d.img}
                                              ></Person>
                                          </div>
                                      ))
                                    : "loading"}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <h1
                        style={{
                            textAlign: "center",
                            margin: "0em 1em 1em 1em",
                            color: "#333",
                        }}>
                        Where our members work
                    </h1>
                    <div className="marquee">
                        <div className="marquee--inner">
                            <div className="companies">
                            {JsonData.About.Companies
                                ? JsonData.About.Companies.map((d, i) => (
                                        <div className="">
                                            <img src={d} alt="img" />
                                        </div>
                                    ))
                                : "loading"}
                            </div>
                            <div className="companies">
                                {JsonData.About.Companies
                                ? JsonData.About.Companies.map((d, i) => (
                                        <div className="">
                                            <img src={d} alt="img" />
                                        </div>
                                    ))
                                : "loading"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer data={JsonData.Contact} />
        </div>
    );
};

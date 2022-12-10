import { Navigation } from "./navigation";
import { Footer } from "./footer";
import JsonData from "../data/data.json";
import { useState, useEffect } from "react";

//add on if necessary - past years
let years = ["2021", "2020", "2019"];

export const AlumniPage = (props) => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [year, setYear] = useState("2021");

  const YearButton = (props) => {
    return (
      // <label className="btn btn-primary">
      //   <input
      //     type="radio"
      //     name={props.year}
      //     value="android"
      //     autoComplete="off"

      //     />{" "}
      //   {props.year}
      // </label>
      <button className='btn btn-custom page-scroll' onClick={setY}>
        {props.year}
      </button>
    )
  };

  function setY(e) {
    setYear(e.target.innerText);
    console.log(JsonData.Alumni[2019]);
  }

  return (
    <div>
      <div id='alumni' className='text-center'>
        <Navigation />
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Alumni</h2>
          <p>
            Check out our alumni from past years!
          </p>
        </div>
        <div className="container">
          <div id='row' className="cardrow">
            {JsonData.Alumni
              ? JsonData.Alumni.map((d, i) => (
                <div className='card col-xs-4'>
                  <img alt="" src={d.img}/>
                  <div className='caption'>
                    <h4>{d.name}</h4>
                    <p>{d.title}</p>
                    <div class="social-links">
                      {/* if linkedin exists, then show the icon */}
                      {d.linkedin ? <a href={d.linkedin} className="linkedin" target={"_blank"}><i class="fa fa-linkedin"></i></a> : ""}
                      {/* {d.instagram ? <a href={d.instagram} className="insta"><i class="fa fa-instagram"></i></a> : ""} */}
                      {/* {d.twitter ? <a href={d.twitter} className="twitter"><i class="fa fa-twitter"></i></a> : ""} */}
                    </div>
                  </div>
                </div>
              ))
              : 'hey'}
          </div>
        </div>
        {/* <h1 style={{ 'textAlign': 'center', 'marginBottom': '2.76em' }}>COMING SOON</h1> */}


      </div>
      <Footer data={JsonData.Contact} />
    </div>
  )
}
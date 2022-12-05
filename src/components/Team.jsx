import { Navigation } from "./navigation";
import { Footer } from "./footer";
import JsonData from "../data/data.json";
import { useEffect } from "react";


export const Team = (props) => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])  

  return (
    <div>
      <div id='team' className='text-center'>
        <Navigation />
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Meet the Team</h2>
          <p>
            The people that make it all possible.
          </p>
        </div>

        <div className="container">
          <div id='row' className="cardrow ">
            {JsonData.Team
              ? JsonData.Team.map((d, i) => (
                <div className='card col-xs-4'>
                  <img alt="" src={d.img} />
                  <div className='caption'>
                    <h4>{d.name}</h4>
                    <p>{d.title}</p>
                    <div class="social-links">
                      {d.linkedin ? <a href={d.linkedin} className="linkedin" target={"_blank"}><i class="fa fa-linkedin"></i></a> : ""}
                      {d.instagram ? <a href={d.instagram} className="insta" target={"_blank"}><i class="fa fa-instagram"></i></a> : ""}
                      {d.twitter ? <a href={d.twitter} className="twitter" target={"_blank"}><i class="fa fa-twitter"></i></a> : ""}
                    </div>
                  </div>
                </div>
              ))
              : 'hey'}
          </div>
        </div>



      </div>
      <Footer data={JsonData.Contact} />
    </div>
  )
}


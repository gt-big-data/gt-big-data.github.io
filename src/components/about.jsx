export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            {" "}
          </div>
          <div className="col-xs-12">
            <h2>About Us</h2>
            <div className="about-text">
              <div>
                <div className="keywords" style={{color: "#194eaa"}}>{props.data ? props.data.keywords : 'loading...'}</div>
                <p className="">{props.data ? props.data.paragraph1 : "loading..."}</p>
                <p className="">{props.data ? props.data.paragraph2 : "loading..."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

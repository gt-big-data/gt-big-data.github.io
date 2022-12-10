export const Person = (props) => {
    return (
        <div className="person">
            <img src={props.image} alt="" className="speaker-img" />
            <div className="person-text">
                <h3>{props.name}</h3>
                <span className="speakerText">{props.title}</span>
            </div>
            <div className="person_links">
                <a
                    href={props.ld ? props.ld : "/"}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa fa-linkedin fa-2x"></i>
                </a>
                {/* <a
                    href={props.tw ? props.tw : "/"}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa fa-twitter fa-2x"></i>
                </a> */}
            </div>
        </div>
    );
};

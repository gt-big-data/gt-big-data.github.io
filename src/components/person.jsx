// reuse for leadership and speakers

// speaker name and social links to right

export const Person = (props) => {
    return (
        <div className="person">
            <img src={props.image} alt="" className="speaker-img" />
            <div className="person-text">
                <h3>{props.name}</h3>
                <span>{props.title}</span>
            </div>
            <a href={props.ld ? props.ld : '/'} target='_blank' rel='noreferrer'>
                <i className='fa fa-linkedin fa-2x'></i>
            </a>
            <a href={props.tw ? props.tw : '/'} target='_blank' rel='noreferrer'>
                <i className='fa fa-twitter fa-2x'></i>
            </a>
        </div>
    );
};



export const Events = (props) => {
    return (
        <div className="container-events">
            <div className="container">
                <div className="row">
                    <h1 style={{textAlign: 'center', margin: '1.5em 1em 1em 1em', color: '#ffffff'}}>Events</h1>
                    <div className="events">
                        <ul className="">
                            {props.data
                            ? props.data.map((d, i) => (
                            <li className="col-xs-6 col-sm-4">
                                <span>{d}</span>
                            </li>
                            ))
                            : 'loading'}
                        </ul>
                        &nbsp;
                    </div>
                </div>
            </div>
        </div>
    );
};


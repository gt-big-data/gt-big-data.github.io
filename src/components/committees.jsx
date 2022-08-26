
//export as own component once done
function CommitteeImage({ title, desc, img, skills}) {
    return (
        <div className="comm-card">
            <div className="comm-team">
                {title}
            </div>
            <div className="flex-comm">
                <div className="comm-img">
                    <div>
                        <h4>What We Do</h4>
                        <div className="desc">{desc}</div>
                        <h4>Skills Gained</h4>
                        <div>{skills}</div>
                    </div>
                    <img src={img} alt={title} />
                </div>
            </div>
        </div>
    );
}

// key={`${d.title}-${i}`}
function CommitteeGallery(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="commItems">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div className='col-sm-12 col-md-6'>
                                <CommitteeImage title={d.title} desc={d.desc} img={d.img} skills={d.skills}/>
                            </div>
                        ))
                        : 'Loading...'}
                </div>
            </div>
        </div>
    )
};


export const Committees = (props) => {
    return (
        <div className="container-comm">
            <div class="custom-shape-divider-top-1648671545">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="container">
                <div className="row">
                    <h1 style={{ textAlign: 'center', margin: '3em 1em 1em 1em', color: '#5ca9fb' }}>Committees</h1>
                    <CommitteeGallery data={props.data.Gallery} />
                </div>
            </div>
        </div>
    )
}
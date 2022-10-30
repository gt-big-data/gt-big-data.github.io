export const Testimonials = (props) => {
  return (
    <div id='testimonials' className="test" style={{marginBottom: '4em'}}>
      <div className='container'>
        <div className='row' style={{width: '100%', textAlign:"-webkit-center"}}>
          {props.data
            ? props.data.map((d, i) => ( //d is data, i is index
                // col-md-4 is deleted
                <div key={`${d.name}-${i}`} style={{width:"33%"}}> 
                  <div className='testimonial'>
                    
                    <div className='testimonial-content'>
                      <p>{d.text}</p>
                      <div className='testimonial-meta'>{d.name} </div>
                      <div className='testimonial-meta'><i style={{fontSize:"15px", color:"#666"}}>{d.role}</i></div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}

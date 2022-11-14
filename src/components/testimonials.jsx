export const Testimonials = (props) => {
  return (
    <div id='testimonials' className="test" style={{marginBottom: '4em'}}>
      <div>
        <div className='testimonials_row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <p>{d.text}</p>
                    <div className='testimonial-content'>
                      <div className='testimonial-meta'> - {d.name} </div>
                      {/* <div className='testimonial-image'>
                        <img src={d.img} alt='' />
                      </div> */}
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

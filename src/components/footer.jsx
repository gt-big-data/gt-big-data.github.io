export const Footer = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
                <ul className="social row">
                  {/* <li className="col-xs-4 col-md-2">
                    <a href={props.data ? props.data.facebook : '/'} target='_blank' rel='noreferrer' style={{margin: "0 0 1em 0"}}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li> */}
                  <li className="col-xs-4 col-md-2">
                    <a href={props.data ? props.data.twitter : '/'} target='_blank' rel='noreferrer'  style={{margin: "0 0 1em 0"}}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  {/* <li className="col-xs-4 col-md-2">
                    <a href={props.data ? props.data.instagram : '/'} target='_blank' rel='noreferrer'  style={{margin: "0 0 1em 0"}}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li> */}
                  <li className="col-xs-4 col-md-2">
                    <a href={props.data ? props.data.linkedin : '/'} target='_blank' rel='noreferrer'  style={{margin: "0 0 1em 0"}}>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                  <li className="col-xs-4 col-md-2">
                    <a href={props.data ? props.data.slack : '/'} target='_blank' rel='noreferrer'  style={{margin: "0 0 1em 0"}}>
                      <i class='fa fa-slack'></i>
                    </a>
                  </li>
                  <li className="col-xs-4 col-md-2">
                    <a href={props.data ? props.data.github : '/'} target='_blank' rel='noreferrer' style={{margin: "0 0 1em 0"}}>
                      <i className='fa fa-github'></i>
                    </a>
                  </li>
                </ul>
        </div>
        <div className='acknowledgement'>
          <div className='container text-center'>
            <p>
              &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
              <a href='http://www.templatewire.com' rel='nofollow'>
                TemplateWire
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

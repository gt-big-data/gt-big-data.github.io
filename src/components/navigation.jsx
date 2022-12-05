let moveToTop = () => {window.scrollTo({
  top: 0,
  left: 0,
  behavior: "auto"
})};

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>

          <a className='navbar-brand page-scroll desc link' href='/'>
            <img src="img/logo.jpg" className="img-responsive logo" alt="" />{" "}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li onClick={moveToTop}>
              <a href='/#/about' className='page-scroll'>
                About
              </a>
            </li>
            <li onClick={moveToTop}>
              <a href='/#/projects' className='page-scroll'>
                Projects
              </a>
            </li>
            <li onClick={moveToTop}>
              <a href='/#/leadership' className='page-scroll'>
                Leadership
              </a>
            </li>
            <li onClick={moveToTop}>
              <a href='/#/alumni' className='page-scroll'>
                Alumni
              </a>
            </li>
            <li onClick={moveToTop}>
              <a href='/#/sponsors' className='page-scroll'>
                Sponsors
              </a>
            </li>
            <li onClick={moveToTop}>
              <a href='/#/contact' className='page-scroll'>
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

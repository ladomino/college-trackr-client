

const pageStyle = {
	color: 'brown',
}

const About = (props) => {


  return(
    <>
        <div>
          <p className="about-text" style={pageStyle}>
            College Trackr is an app for a student and/or parent who wishes to track
            their college application and the tasks associated with the college application
            process.  It is not intended to take the place of the students Naviance school
            application but is intended to supplement it with tracking items they or their 
            parents wish to track.
          </p>

          {/* <footer>
            <a href="">Github</a>
            <a href="">Email</a>
          </footer> */}
        </div>
     </>
  )
}

export default About
import { Link } from 'react-router-dom'

const linkStyle = {
	color: 'brown',
	textDecoration: 'none'
}

const Home = (props) => {
	const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2 className="home-text-header"><Link to='/login/' style={linkStyle}>Start Your Journey</Link></h2>
			<img className="home-image" width="100%" src="https://i.imgur.com/Woa11EW.jpg"></img>
		</>
	)
}

export default Home

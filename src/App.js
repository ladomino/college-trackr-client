// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import About from './components/About'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import IndexCollege from './components/colleges/IndexCollege'
import IndexTrackCollege from './components/colleges/IndexTrackCollege'
import IndexApplication from './components/applications/IndexApplication'
import ShowApplication from  './components/applications/ShowApplication'
import ShowCollegeApplication from  './components/CollegeApplication/ShowCollegeApplication'

const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  console.log('user in app', user)
  console.log('message alerts', msgAlerts)
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
			<Route path='/' 
				element={<Home msgAlert={msgAlert} setUser={setUser} />} />


			<Route path='/collegetkr/colleges/all'
				element={
					<RequireAuth user={user}>
					<IndexCollege msgAlert={msgAlert} user={user} />
					</RequireAuth>
				}
			/>
			<Route path='/collegetkr/colleges/'
				element={
					<RequireAuth user={user}>
					<IndexTrackCollege msgAlert={msgAlert} user={user} />
					</RequireAuth>
				}
			/>
			<Route path='/collegetkr/apps/'
				element={
					<RequireAuth user={user}>
					<IndexApplication msgAlert={msgAlert} user={user} />
					</RequireAuth>
				}
			/>
			<Route path='/collegetkr/collegeapps/one/:appId'
				element={
					<RequireAuth user={user}>
					<ShowCollegeApplication msgAlert={msgAlert} user={user} />
					</RequireAuth>
				}	
			/>
			<Route path='/collegetkr/apps/:appId'
				element={
					<RequireAuth user={user}>
					<ShowApplication msgAlert={msgAlert} user={user} />
					</RequireAuth>
				}
			/>
			<Route
				path='/signup/'
				element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
			/>
			<Route
				path='/login/'
				element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
			/>
			<Route
				path='/logout/'
				element={
				<RequireAuth user={user}>
					<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
				</RequireAuth>
				}
			/>
			<Route
				path='/change-pw/'
				element={
				<RequireAuth user={user}>
					<ChangePassword msgAlert={msgAlert} user={user} />
				</RequireAuth>}
			/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App

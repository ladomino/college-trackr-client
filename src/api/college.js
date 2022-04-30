import apiUrl from '../apiConfig'
import axios from 'axios'

// index function to retrieve all colleges
export const getAllColleges = (user) => {
    return axios({
        url: `${apiUrl}/collegetkr/colleges/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// index function to retrieve all colleges you have not tracked
export const getAllUntrackedColleges = (user) => {
    return axios({
        url: `${apiUrl}/collegetkr/colleges/all/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// show function for one college
export const getOneCollege = (user, collegeId) => {
    return axios({
        url: `${apiUrl}/collegetkr/colleges/${collegeId}/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// POST -> create function to create a college
export const createCollege = (user, newCollege) => {
    console.log('user', user)
    console.log('this is newCollege', newCollege)
    return axios({
        url: `${apiUrl}/collegetkr/colleges/create/`,
        method: 'POST',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { 
            college: {
                name: newCollege.name,
                city: newCollege.city,
                state: newCollege.state,
                image: newCollege.image,
                early_decision: newCollege.earlyDecisionDate,
                early_action: newCollege.earlyActionDate,
                regular_decision: newCollege.regularDecisionDate,
                app_home_link: newCollege.appHomeLink
            }
        }
    })
}

// POST -> create function to collegetrack 
export const createTrackCollege = (user, collegeId) => {
    console.log('user', user)
    console.log('this is collegeId', collegeId)
    return axios({
        url: `${apiUrl}/collegetkr/colleges/${collegeId}/track/`,
        method: 'POST',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { 
            trackcollege: {
            }
        }
    })
}

// index function to retrieve colleges tracked
export const getTrackColleges = (user) => {
    return axios({
        url: `${apiUrl}/collegetkr/collegetrack/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// show function for one tracked college
export const getTrackCollegeDetails = (user, trackId) => {
    return axios({
        url: `${apiUrl}/collegetkr/collegetrack/${trackId}/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}



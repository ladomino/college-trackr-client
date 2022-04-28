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
export const getOnePlace = (user, collegeId) => {
    return axios({
        url: `${apiUrl}/collegetkr/colleges/${collegeId}/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// POST -> create function to create a college
export const createPlace = (user, newCollege) => {
    console.log('user', user)
    console.log('this is newCollege', newCollege)
    return axios({
        url: `${apiUrl}/collegetkr/colleges/create/`,
        method: 'POST',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { college: newCollege }
    })
}

// POST -> create function to collegetrack 
export const createTrack = (user, collegeId) => {
    console.log('user', user)
    console.log('this is collegeId', collegeId)
    return axios({
        url: `${apiUrl}/collegetkr/colleges/${collegeId}/track/`,
        method: 'POST',
        headers: {
            Authorization: `Token ${user.token}`
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



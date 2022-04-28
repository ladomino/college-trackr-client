import apiUrl from '../apiConfig'
import axios from 'axios'

// index function to retrieve all collegetoapplications which 
//    is by application id
export const getAllCollegeApplications = (user, appId) => {
    return axios({
        url: `${apiUrl}/collegetkr/collegeapps/${appId}/all/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// show-details function for one application
export const getOneApplication = (user, appId) => {
    return axios({
        url: `${apiUrl}/collegetkr/collegeapps/${appId}/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// POST -> create function to create a collegetoapplication by assigning a college
//  to an application
export const createCollegeApplication = (user, newCollegeApp, collegeId, appId) => {
    console.log('user', user)
    console.log('this is newApplication', newApplication)
    return axios({
        url: `${apiUrl}/collegetkr/apps/${collegeId}/assign/${appId}/`,
        method: 'POST',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { collegeapplication: newCollegeApp }
    })
}

// PATCH -> update function
export const updateApplication = (user, appId, updatedCollegeApplication) => {
    console.log('user', user)
    console.log('this is updatedPlace', updatedApplication)
    return axios({
        url: `${apiUrl}/collegetkr/collegeapps/${appId}/update/`,
        method: 'PATCH',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { collegeapplication:  updatedCollegeApplication }
    })
}

// DELETE -> remove function
export const removeApplication = (user, collegeAppId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/collegetkr/collegeapps/${collegeAppId}/delete/`,
        method: 'DELETE',
        headers: {
            Authorization: `${user.token}`
        }
    })
}
import apiUrl from '../apiConfig'
import axios from 'axios'

// index function to retrieve all applications
export const getAllApplications = (user) => {
    return axios({
        url: `${apiUrl}/collegetkr/apps/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// show-details function for one application
export const getOneApplication = (user, appId) => {
    return axios({
        url: `${apiUrl}/collegetkr/apps/${appId}/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// POST -> create function to create a college application
export const createApplication = (user, collegeId, newApplication) => {
    console.log('user', user)
    console.log('this is newApplication', newApplication)
    return axios({
        url: `${apiUrl}/collegetkr/apps/${collegeId}/create/`,
        method: 'POST',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { college: newApplication }
    })
}

// PATCH -> update function
export const updateApplication = (user, appId, updatedApplication) => {
    console.log('user', user)
    console.log('this is updatedPlace', updatedApplication)
    return axios({
        url: `${apiUrl}/collegetkr/apps/${appId}/create/`,
        method: 'PATCH',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { place: updatedPlace }
    })
}

// DELETE -> remove function
export const removeApplication = (user, appId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/collegetkr/apps/${appId}/delete/`,
        method: 'DELETE',
        headers: {
            Authorization: `${user.token}`
        }
    })
}
import apiUrl from '../apiConfig'
import axios from 'axios'

// index function to retrieve all collegetoapplications which 
//    is by application id
export const getAllCollegeApplications = (user, appId) => {
    console.log("In getAllCollegeApplications")
    return axios({
        url: `${apiUrl}/collegetkr/collegeapps/${appId}/all/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// show-details function for one collegetoapplication
export const getOneCollegeApplication = (user, appId) => {
    console.log("Inside getOneCollegeApplication")
    return axios({
        url: `${apiUrl}/collegetkr/collegeapps/one/${appId}/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// POST -> create function to create a collegetoapplication by assigning a college
//  to an application
export const createCollegeApplication = (user, newCollegeApplication, collegeId, appId) => {
    console.log('user', user)
    console.log('this is newCollegeApplication', newCollegeApplication)
    return axios({
        url: `${apiUrl}/collegetkr/collegeapps/${collegeId}/assign/${appId}/`,
        method: 'POST',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { 
            collegeapplication: {
                date_submitted: newCollegeApplication.dateSubmitted, 
                in_progress: newCollegeApplication.inProgress,
                hold: newCollegeApplication.onHold,
                early_decision: newCollegeApplication.earlyDecision,
                early_action: newCollegeApplication.earlyAction,
                regular_decision: newCollegeApplication.regularDecision
            }
        }
    })
}

// PATCH -> update function
export const updateCollegeApplication = (user, collegeappId, updatedCollegeApplication) => {
    console.log('user', user)
    console.log('this is updatedCollegeApplication', updatedCollegeApplication)
    return axios({
        url: `${apiUrl}/collegetkr/collegeapps/${collegeappId}/update/`,
        method: 'PATCH',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { 
            collegeapplication: {
                date_submitted: updatedCollegeApplication.dateSubmitted, 
                in_progress: updatedCollegeApplication.inProgress,
                hold: updatedCollegeApplication.onHold,
                early_decision: updatedCollegeApplication.earlyDecision,
                early_action: updatedCollegeApplication.earlyAction,
                regular_decision: updatedCollegeApplication.regularDecision
            }
         }
    })
}

// DELETE -> remove function
export const removeCollegeApplication = (user, collegeAppId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/collegetkr/collegeapps/${collegeAppId}/delete/`,
        method: 'DELETE',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}
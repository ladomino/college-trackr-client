import apiUrl from '../apiConfig'
import axios from 'axios'

// index function to retrieve all applicationstotasks which 
//    is by application id
export const getAllApplicationTasks = (user, appId) => {
    return axios({
        url: `${apiUrl}/collegetkr/apptasks/${appId}/all/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// show-details function for one applicationtotask
export const getOneApplicationTask = (user, appId) => {
    return axios({
        url: `${apiUrl}/collegetkr/apptasks/${appId}/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// POST -> create function to create a applicationtotask by assigning an application
//  to a task
export const createApplicationTask = (user, newApplicationTask, appId, taskId) => {
    console.log('user', user)
    console.log('this is newApplicationTask', newApplicationTask)
    return axios({
        url: `${apiUrl}/collegetkr/apptasks/${appId}/assign/${taskId}/`,
        method: 'POST',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { 
            applicationtask: {
                importance: newApplicationTask.importance, 
                due_date: newApplicationTask.dueDate,
                complete: newApplicationTask.complete,
                working_on: newApplicationTask.workingOn
            }
        }
    })
}

// PATCH -> update function
export const updateApplicationTask = (user, apptaskId, updatedApplicationTask) => {
    console.log('user', user)
    console.log('this is updatedCollegeApplication', updatedApplicationTask)
    return axios({
        url: `${apiUrl}/collegetkr/collegeapps/${apptaskId}/update/`,
        method: 'PATCH',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { 
            applicationtask: {
                importance: updatedApplicationTask.importance, 
                due_date: updatedApplicationTask.dueDate,
                complete: updatedApplicationTask.complete,
                working_on: updatedApplicationTask.workingOn
            } 
         }
    })
}

// DELETE -> remove function
export const removeApplicationTask = (user, appTaskId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/collegetkr/collegeapps/${appTaskId}/delete/`,
        method: 'DELETE',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}
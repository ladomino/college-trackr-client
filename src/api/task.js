import apiUrl from '../apiConfig'
import axios from 'axios'

// index function to retrieve all tasks
export const getAllTasks = (user) => {
    return axios({
        url: `${apiUrl}/collegetkr/tasks/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// show-details function for one task
export const getOneTask = (user, taskId) => {
    return axios({
        url: `${apiUrl}/collegetkr/tasks/${taskId}/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// POST -> create function to create a task
export const createTask = (user, newTask) => {
    console.log('user', user)
    console.log('this is newTask', newTask)
    return axios({
        url: `${apiUrl}/collegetkr/tasks/create/`,
        method: 'POST',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { 
            task: {
                name: newTask.name,
                description: newTask.description,
                mandatory: newTask.mandatory
            }
        }
    })
}

// PATCH -> update function
export const updateTask = (user, taskId, updatedTask) => {
    console.log('user', user)
    console.log('this is updatedTask', updatedTask)
    return axios({
        url: `${apiUrl}/collegetkr/tasks/${taskId}/update/`,
        method: 'PATCH',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { 
            task: {
                name: updatedTask.name,
                description: updatedTask.description,
                mandatory: updatedTask.mandatory
            } 
        }
    })
}

// DELETE -> remove function
export const removeTask = (user, taskId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/collegetkr/tasks/${taskId}/delete/`,
        method: 'DELETE',
        headers: {
            Authorization: `${user.token}`
        }
    })
}
const BASE_URL="http://localhost:3001"

module.exports = {
    getAllUsers:() => {
        return fetch(`${BASE_URL}/api/users`)
        .then(res=> res.json())
    }, 

    verify: (token) => {
        return fetch(`${BASE_URL}/api/users/verifyToken`,{
            headers:{
                authorization:`Bearer ${token}`
            }
        }).then(res=>res.json())
    },

    login: (userData) => {
        return fetch(`${BASE_URL}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    signup: (userData) => {
        return fetch(`${BASE_URL}/api/users`,{
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    getOneUser: (token) => {
        return fetch(`${BASE_URL}/api/users/me`,{
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },

    getUserGoals: (token) => {
        return fetch(`${BASE_URL}/api/goals/user/me`,{
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },

    updateGoals: (token, goalData) => {
        return fetch(`${BASE_URL}/api/goals/user/me`,{
            method:"PUT",
            body:JSON.stringify(goalData),
            headers:{
                authorization:`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    // FITNESS

    getUserFitness: (token) => {
        return fetch(`${BASE_URL}/api/fitness/user/me`,{
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },

    getOneUserFitness: (token, fitnessDate) => {
        return fetch(`${BASE_URL}/api/fitness/user/me/${fitnessDate}`,{
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },

    postFitnessEntry: (token, fitnessObj) => {
        return fetch(`${BASE_URL}/api/fitness`,{
            method:"POST",
            body:JSON.stringify(fitnessObj),
            headers:{
                authorization:`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    updateFitnessEntry: (token, fitnessObj) => {
        return fetch(`${BASE_URL}/api/fitness/update`,{
            method:"PUT",
            body:JSON.stringify(fitnessObj),
            headers:{
                authorization:`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    deleteFitnessEntry: (token, fitnessDate) => {
        return fetch(`${BASE_URL}/api/fitness/user/me/${fitnessDate}`,{
            method:"DELETE",
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },

    // SLEEP

    getUserSleep: (token) => {
        return fetch(`${BASE_URL}/api/sleep/user/me`,{
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },

    getOneUserSleep: (token, formDate) => {
        return fetch(`${BASE_URL}/api/sleep/user/me/${formDate}`,{
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },

    postSleepEntry: (token, formObj) => {
        return fetch(`${BASE_URL}/api/sleep`,{
            method:"POST",
            body:JSON.stringify(formObj),
            headers:{
                authorization:`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    updateSleepEntry: (token, formObj) => {
        return fetch(`${BASE_URL}/api/sleep/update`,{
            method:"PUT",
            body:JSON.stringify(formObj),
            headers:{
                authorization:`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    deleteSleepEntry: (token, formDate) => {
        return fetch(`${BASE_URL}/api/sleep/user/me/${formDate}`,{
            method:"DELETE",
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },

    // HYDRATION

    getUserHydration: (token) => {
        return fetch(`${BASE_URL}/api/hydration/user/me`,{
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },

    getOneUserHydration: (token, waterDate) => {
        return fetch(`${BASE_URL}/api/hydration/user/me/${waterDate}`,{
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },

    postHydrationEntry: (token, waterObj) => {
        return fetch(`${BASE_URL}/api/hydration`,{
            method:"POST",
            body:JSON.stringify(waterObj),
            headers:{
                authorization:`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    updateHydrationEntry: (token, waterObj) => {
        return fetch(`${BASE_URL}/api/hydration/update`,{
            method:"PUT",
            body:JSON.stringify(waterObj),
            headers:{
                authorization:`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    deleteHydrationEntry: (token, waterDate) => {
        return fetch(`${BASE_URL}/api/hydration/user/me/${waterDate}`,{
            method:"DELETE",
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },
}
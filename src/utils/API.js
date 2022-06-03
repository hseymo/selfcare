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

    getUserFitness: (token) => {
        return fetch(`${BASE_URL}/api/fitness/user/me`,{
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },

    updateFitnessEntry: (token, goalData) => {
        return fetch(`${BASE_URL}/api/fitness/:id`,{
            method:"PUT",
            body:JSON.stringify(goalData),
            headers:{
                authorization:`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    deleteFitnessEntry: (token, goalData) => {
        return fetch(`${BASE_URL}/api/fitness/:id`,{
            method:"DELETE",
            body:JSON.stringify(goalData),
            headers:{
                authorization:`Bearer ${token}`,
            }
        }).then(res=>res.json())
    },

    getUserSleep: (token) => {
        return fetch(`${BASE_URL}/api/sleep/user/me`,{
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },

    getUserHydration: (token) => {
        return fetch(`${BASE_URL}/api/hydration/user/me`,{
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    }
}
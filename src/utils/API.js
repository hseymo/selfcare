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
    }
}
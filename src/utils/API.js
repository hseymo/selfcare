// fetch("http://localhost:3001/api/sleep")
export const fitnessGet = (token) => {
    return fetch('/api/fitness', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

export const fitnessGetOne = () => {
    return fetch('/api/fitness/:id', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
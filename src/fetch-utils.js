// const URL = 'http://localhost:7890';
const URL = 'https://fathomless-waters-73143.herokuapp.com'

export async function getToken(signInInfo, type) {

    const authURL = `${URL}/auth/${type}`; 
    const response = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInInfo),
    });
    const data = await response.json();
    localStorage.setItem('TOKEN', data.token);
    return data.token;
}

export async function fetchToDoData(token) {

    const authURL = `${URL}/api/todos`;
    const response = await fetch(authURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorzation': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjI5OTM1NzcwfQ.ZUdS-1-OMBZzxRwf1HOtZe8qfIjqdiF3yr4nRlxV81I'
            'Authorization': token,
        },
        // body: JSON.stringify(signInInfo),
    });
    const data = await response.json();
    // localStorage.setItem('TOKEN', data.token);
    return data;
}

export async function createToDoData(token, todo) {

    const authURL = `${URL}/api/todos`;
    const response = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorzation': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjI5OTM1NzcwfQ.ZUdS-1-OMBZzxRwf1HOtZe8qfIjqdiF3yr4nRlxV81I'
            'Authorization': token,
        },
        body: JSON.stringify(todo),
    });
    const createdData = await response.json();
    return createdData;
}

export async function updateToDoData(token, todo) {

    const authURL = `${URL}/api/todos/${todo.id}`;
    const response = await fetch(authURL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorzation': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjI5OTM1NzcwfQ.ZUdS-1-OMBZzxRwf1HOtZe8qfIjqdiF3yr4nRlxV81I'
            'Authorization': token,
        },
        body: JSON.stringify(todo),
    });
    const updateData = await response.json();
    return updateData;
}


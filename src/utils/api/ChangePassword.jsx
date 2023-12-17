let changePassword = async (e) => {

    let response = await fetch('http://127.0.0.1:8000/api/dj-rest-auth/password/reset/', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({'email':e.target[0].value})
    })
    let data = await response;

    if (response.status === 200) {
        return data;
    } else {
        alert("Something went wrong");
    }
}

export default changePassword;
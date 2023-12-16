let createAccount = async (e) => {

    let response = await fetch('http://127.0.0.1:8000/api/dj-rest-auth/registration/', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        
        body: JSON.stringify({'email':e.target[2].value,'password1':e.target[3].value, 'password2':e.target[4].value,
                                'first_name':e.target[0].value, 'last_name':e.target[1].value
             })
    })
    let data = await response;

    if (response.status === 204) {
        return data;
    } else {
        alert("Something went wrong");
    }
}

export default createAccount;
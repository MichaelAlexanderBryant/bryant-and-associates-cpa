let postNewPassword = async (e, uid, token) => {

    let response = await fetch('http://127.0.0.1:8000/api/dj-rest-auth/password/reset/confirm/', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({'new_password1':e.target[0].value, 'new_password2':e.target[1].value, 'uid':uid, 'token':token})
    })
    let data = await response;
    console.log(response);
    if (response.status === 200) {
        return data;
    } else {
        alert("Something went wrong");
    }
}

export default postNewPassword;
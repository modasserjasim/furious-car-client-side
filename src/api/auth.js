export const setAuthToken = (user) => {
    //apply JWT
    const currentUser = {
        email: user.email
    }
    fetch('https://furious-car.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            // console.log('my data', data);
            //local storage is easiest but not the best place to store the token
            localStorage.setItem('furious-token', data.token);
        })
}
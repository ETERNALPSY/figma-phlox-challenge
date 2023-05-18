const baseUrl = 'https://fakestoreapi.com/auth/login'

const getUser = async (user, pass) => {

    try {
        let response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user,
                password: pass
            })
        })
        let data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

export default getUser
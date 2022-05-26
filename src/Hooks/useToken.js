import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const displayName = user?.user?.displayName;
        const photoURL = user?.user?.photoURL;
        const currentUser = {
            email: email,
            displayname: displayName,
            photoURL: photoURL,

        };

        if (email) {
            fetch(`https://young-sierra-81970.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);

                })
        }

    }, [user]);
    return [token];
}

export default useToken;
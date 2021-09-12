import { wait } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import firebase from './firebase';

function Demo() {

    // console.log(firebase);

    const auth = firebase.auth();
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            console.log(email, " && ", password);
            setLoading(true);
            let res = await auth.signInWithEmailAndPassword(email, password);
            console.log(res.user);
            setUser(res.user);
            setLoading(false);
        }
        catch(e) {
            setError(e.message);
            setTimeout(() => {
                setError('');
            }, 2000);
            setLoading(false);
        }
        setEmail('');
        setPassword('');
    }

    const handleSignOut = async () => {
        try {
            setLoading(true);
            await auth.signOut();
            setUser(null);
            setLoading(false);
        }
        catch(e) {
            setError(e.message);
            setTimeout(()=>{
                setError('');
            },2000);
            setLoading(false);
        }
    }

    return (
        <>
            {
                loading ? <h1>Please wait.....loading</h1> : user === null ?
                    <div>
                        <label htmlFor="email">
                            Email:
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>

                        <label htmlFor="password">
                            Password:
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <button onClick={handleSubmit}>Sign In</button>
                        {error ? <h1>{error}</h1> : <></>}
                    </div>
                    :
                    <div>
                        <h1>{user.uid} is signed in</h1>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
            }
        </>
    )
}

export default Demo;

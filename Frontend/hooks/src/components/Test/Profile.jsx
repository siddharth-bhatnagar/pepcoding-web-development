import React, { useState } from 'react'

function Profile() {
    const [profile, setProfile] = useState({name: '', age: ''});
    return (
        <div>
            <form>
                <input type="text" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} />
                <input type="text" value={profile.age} onChange={(e) => setProfile({...profile, age: e.target.value})} />
                <h2>Name: {profile.name}</h2>
                <h2>Age: {profile.age}</h2>
            </form>
        </div>
    );
}

export default Profile

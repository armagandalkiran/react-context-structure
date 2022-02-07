import {useState } from "react";

import {useUser} from "../context/UserContext";

import React from 'react';

const Profile = () => {

    const { user, setUser } = useUser();
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setTimeout(() => {
            setUser({ id: 1, username: "armagan", bio: "1234567" })
            setLoading(false);
        }, 1500)

        setLoading(true);
    }

    const handleLogout = () => {
        setUser(null);
    }
    return <div>
        {!user && 
        <button onClick={handleLogin}>{loading ? "loading" : "login"}</button>
        }
        <code>
            {JSON.stringify(user)}
        </code>
        {
            user && <button onClick={handleLogout}>Logout</button>
        }
    </div>;
};

export default Profile;

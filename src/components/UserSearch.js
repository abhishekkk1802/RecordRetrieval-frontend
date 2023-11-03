import React, { useEffect, useState } from 'react';
import AddUser from './AddUser';

const UserSearch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/getAllUser", {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                console.log(data);
            })

    }, []);

    return (

        <div>
            <p>WELCOME to userSearch</p>
            <h1>Alumni MAIT</h1>
            {/* <AddUser/> */}
        </div>
    )
}

export default UserSearch
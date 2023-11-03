
import React, { useEffect, useState } from 'react';
import AddUser from './AddUser';
import { useNavigate } from 'react-router-dom';


const UserList = () => {
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

    }, []);// Pass an empty dependency array to useEffect to ensure it only runs once during the initial render.
    const navigate = useNavigate();
    const handleUpdate = (index) => {

        // navigate(<AddUser prop="update" />)
        navigate("/adduser")

    };

    return (
        <>
            <div className='table-content'>
                <div className='table-content1'>
                    <div className='table-content2'>
                        <h3>ALL ALMUNI DATA</h3>
                        <table className='center'>
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>PhoneNumber</th>
                                    <th>PassingYear</th>
                                    <th>CollegeName</th>
                                    <th>CompanyName</th>
                                    <th>HigherstudiesCollege</th>
                                    <th>Update</th>
                                    {/* <th>HigherstudiesCollege</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {/* const count=0; */}
                                {data && data.length > 0 ? (
                                    data.map((i, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{i.name}</td>
                                            <td>{i.email}</td>
                                            <td>{i.phoneNumber}</td>
                                            <td>{i.passingYear}</td>
                                            <td>{i.collegename}</td>
                                            <td>{i.companyname}</td>
                                            <td>{i.higherstudiescollege}</td>
                                            <td>
                                                <button onClick={() => handleUpdate(index)}>Update</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8">No data available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserList;


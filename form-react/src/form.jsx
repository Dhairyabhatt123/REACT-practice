import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    });
// name variable should be same as object coz we are assigning its new value to object state variable by finding name of selected input element by getting its name 
    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;

        setFormData((currData) => ({
            ...currData,
            [event.target.name]:event.target.value
        }));
    };

    let handleSumbit =(event)=>{
        event.preventDefault();
        setFormData({
        fullName: "",
        userName: "",
        password: "",
        })
    }

    return (
        <>
            <label htmlFor="fullname">Full Name:</label>
            <input
                className="w-64 h-12 rounded p-4 m-4"
                name="fullName"
                id="fullname"
                placeholder="Write your name"
                type="text"
                onChange={handleInputChange}
                value={formData.fullName}
            />
            <br /><br />
            
            <label htmlFor="userName">Username:</label>
            <input
                type="text"
                id="userName"
                name="userName"
                className="w-64 h-12 rounded p-4 m-4"
                placeholder="Write your username"
                value={formData.userName}
                onChange={handleInputChange}
            />
            <br /><br />
            
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                className="w-64 h-12 rounded p-4 m-4"
                placeholder="password"
                value={formData.password}
                onChange={handleInputChange}
            />
            <br /><br />
            <button onClick={handleSumbit} className="bg-pink-500 p-2 rounded hover:bg-pink-700">Submit</button>
        </>
    );
}

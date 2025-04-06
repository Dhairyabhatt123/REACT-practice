import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
    let [formData, setFormData] = useState({
        userName: "",
        remarks: "",
        rating: 5,
    });

    let handleInputChange = (event) => {
        setFormData((currData) => ({
            ...currData,
            [event.target.name]: event.target.value
        }));
    };

    let handleSubmitForm = (event) => {
        event.preventDefault();
        addNewComment(formData);

        // Reset form after submission
        setFormData({
            userName: "",
            remarks: "",
            rating: 5,
        });
    };

    return (
        <div className="flex flex-col border-white shadow-sm p-4">
            <h4 className="font-bold text-3xl font-serif mb-4">Comment Box!!</h4>
            
            <input 
                className="w-64 h-12 rounded p-4 m-4 border" 
                type="text" 
                placeholder="Username" 
                name="userName" 
                value={formData.userName} 
                onChange={handleInputChange}
            />

            <textarea 
                className="w-64 rounded p-4 m-4 h-32 border" 
                name="remarks" 
                id="comment" 
                value={formData.remarks} 
                placeholder="Remarks" 
                onChange={handleInputChange}
            />

            <input 
                className="w-64 h-12 rounded p-4 m-4 border" 
                type="number" 
                name="rating" 
                value={formData.rating} 
                placeholder="Add Rating" 
                min={1} 
                max={5} 
                onChange={handleInputChange}
            />

            <button 
                onClick={handleSubmitForm} 
                className="bg-pink-500 p-2 rounded text-white"
            >
                Submit
            </button>
        </div>
    );
}

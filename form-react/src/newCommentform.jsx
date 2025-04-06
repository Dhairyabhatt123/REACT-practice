import { useFormik } from "formik";

export default function newCommentsForm({ addNewComment }) {
    const formik = useFormik({
        initialValues: {
            userName: "",
            remarks: "",
            rating: 5,
        },
        validate: (values) => {
            let errors = {};
            if (!values.userName.trim()) {
                errors.userName = "Username cannot be empty!";
            }
            if (!values.remarks.trim()) {
                errors.remarks = "Remarks cannot be empty!";
            }
            return errors;
        },
        onSubmit: (values, { resetForm }) => {
            if (typeof addNewComment === "function") {
                addNewComment(values);
                resetForm(); // Clears the form after submission
            }
        },
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col border-white shadow-sm p-4"
        >
            <h4 className="font-bold text-3xl font-serif mb-4">Comment Box!!</h4>

            <input
                className="w-64 h-12 rounded p-4 m-4 border"
                type="text"
                placeholder="Username"
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
            />
            {formik.errors.userName && (
                <p className="text-red-500">{formik.errors.userName}</p>
            )}

            <textarea
                className="w-64 rounded p-4 m-4 h-32 border"
                name="remarks"
                placeholder="Remarks"
                value={formik.values.remarks}
                onChange={formik.handleChange}
            />
            {formik.errors.remarks && (
                <p className="text-red-500">{formik.errors.remarks}</p>
            )}

            <input
                className="w-64 h-12 rounded p-4 m-4 border"
                type="number"
                name="rating"
                value={formik.values.rating}
                placeholder="Add Rating"
                min={1}
                max={5}
                onChange={formik.handleChange}
            />

            <button
                type="submit"
                className="bg-pink-500 p-2 rounded text-white"
            >
                Submit
            </button>
        </form>
    );
}

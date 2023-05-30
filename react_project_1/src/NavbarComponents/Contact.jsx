import React, { useState } from "react";
const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: ""
    });

    const update = (event) => {
        const { value, name } = event.target;
        setFormData(pre => {
            return { ...pre, [name]: value }
        })
    }

    const formStore = (e) => {
        e.preventDefault();
        setFormData({fullname: "",
        phone: "",
        email: "",
        message: ""})
        alert(`My Name is ${formData.fullname}, My Contact Number is ${formData.phone}, My Email is ${formData.email} and I want ${formData.message}`);
    }
    return (<>
        <div className="container-fluid mt-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formStore}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="fullname"
                                value={formData.fullname}
                                onChange={update}
                                placeholder="Enter Your Name"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput2" className="form-label">Contact Number</label>
                            <input
                                type="number"
                                className="form-control"
                                id="exampleFormControlInput2"
                                name="phone"
                                value={formData.phone}
                                onChange={update}
                                placeholder="Phone no."
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput3" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput3"
                                name="email"
                                value={formData.email}
                                onChange={update}
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                name="message"
                                value={formData.message}
                                onChange={update}
                            ></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>);
}

export default Contact;
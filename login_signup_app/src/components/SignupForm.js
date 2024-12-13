import React, { useState } from "react";

const SignupForm = ({ toggleForm }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Creating account with:", { name, email, password });
    };

    return (
        <form className="form" onSubmit={handleSignup}>
            <h2>Create Account</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign Up</button>
            <p>
                Already have an account?{" "}
                <span className="link" onClick={toggleForm}>
                    Log in
                </span>
            </p>
        </form>
    );
};

export default SignupForm;
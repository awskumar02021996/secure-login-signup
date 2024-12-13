import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import "./styles.css";

const App = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="app-container">
            <h1>Welcome to My App</h1>
            <div className="form-container">
                {isLogin ? (
                    <LoginForm toggleForm={toggleForm} />
                ) : (
                    <SignupForm toggleForm={toggleForm} />
                )}
            </div>
        </div>
    );
};

export default App;
import React from "react";

const Dashboard = ({ handleLogout }) => {
    return (
        <div>
            <h2>Welcome to your Dashboard!</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
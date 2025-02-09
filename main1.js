import React from "react";

const HomePage = () => {
    return (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f4f6" }}>
            <div style={{ padding: "24px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "16px", backgroundColor: "#fff", textAlign: "center" }}>
                <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "16px" }}>Welcome to My Web Page</h1>
                <p style={{ color: "#666", marginBottom: "24px" }}>This is a simple React-based webpage.</p>
                <button style={{ backgroundColor: "#007BFF", color: "#fff", padding: "10px 16px", borderRadius: "8px", border: "none", cursor: "pointer" }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#007BFF"}>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default HomePage;

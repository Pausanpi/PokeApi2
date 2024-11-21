import React from "react";

const LoginPage: React.FC = () => {
  const clientId = "Ov23lioZpnEEOsKtxdif"; // Reemplaza con tu Client ID de GitHub
  const redirectUri = "http://localhost:5174/callback";

  const handleLogin = () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user`;
    window.location.href = githubAuthUrl;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Inicia sesión con GitHub</h1>
      <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Login with GitHub
      </button>
    </div>
  );
};

export default LoginPage;

import React from 'react';
import { Github } from 'lucide-react';

const LoginPage: React.FC = () => {
  const clientId = 'Ov23lioZpnEEOsKtxdif';
  const redirectUri = 'http://localhost:5174/callback';

  const handleLogin = () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user`;
    window.location.href = githubAuthUrl;
  };

  return (
    <div className="min-h-screen bg-[url('frontend/src/assets/fondov.jpeg')] bg-cover bg-center min-h-screen flex flex-col md:flex-row relative overflow-hidden">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md transform rounded-2xl bg-white p-8 shadow-2xl transition-all">
          {/* Pokemon Logo */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-green-500 to-white p-1">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <div className="h-12 w-12 rounded-full border-4 border-green-500"></div>
              </div>
            </div>
            <h1 className="mb-2 text-3xl font-bold text-gray-900">Poke Api 2.0</h1>
            <p className="text-gray-600">Sign in to create your unique Pokemon!</p>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="group relative flex w-full items-center justify-center space-x-3 rounded-lg bg-gray-900 px-4 py-3 text-white transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <Github className="h-5 w-5" />
            <span className="font-medium">Continue with GitHub</span>
          </button>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            By signing in, you agree to join the world of Pokemon AI generation
          </p>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;

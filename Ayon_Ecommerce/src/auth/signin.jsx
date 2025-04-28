import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_URL = "http://localhost:4000/users/login";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid email or password");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Store token in localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      // Show success message
      setErrorMessage("Login successful!");
      
      // Redirect to home page after successful login
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);

    } catch (error) {
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-[460px] mx-auto bg-white p-6 rounded-lg shadow-md relative mt-8">
        <header className="relative">
          <div className="flex justify-center mt-6">
            <img
              src="/assets/logo.svg"
              alt="Logo"
              className="w-48 h-30 object-contain"
            />
          </div>
        </header>

        <main>
          <h1 className="text-2xl font-bold text-center mb-2">Log in</h1>
          <p className="text-center text-gray-600 mb-6">Continue to Ayon</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-bold mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-9"
              >
                <img
                  src={showPassword ? "/assets/eyeopen.svg" : "/assets/eyeclose.svg"}
                  alt={showPassword ? "Hide password" : "Show password"}
                  className="w-5 h-5 pt-1"
                />
              </button>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded mt-4"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="text-center mt-4">
            <span>New to Ayon?</span>
            <a href="/signup" className="text-blue-600 ml-2">
              Get started →
            </a>
          </div>

          <div className="text-center mt-8 text-sm">
            <p>
              By proceeding, you agree to the
              <a href="#" className="text-blue-600 underline ml-1">
                Terms and Conditions
              </a>
              and
              <a href="#" className="text-blue-600 underline ml-1">
                Privacy Policy
              </a>
            </p>

            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-600 underline">
                Help
              </a>
              <a href="#" className="text-gray-600 underline">
                Privacy
              </a>
              <a href="#" className="text-gray-600 underline">
                Terms
              </a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignupPage() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    reenterPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [reenterPasswordVisible, setReenterPasswordVisible] = useState(false);

  const API_URL = "https://ndkj1lt9-4000.inc1.devtunnels.ms/api/users";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      setError("Mobile number must contain exactly 10 digits.");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.reenterPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if (formData.password.length < 4) {
      setError("Password must be at least 4 characters long.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.mobileNumber,
          password: formData.password,
          address: "",
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        if (response.status === 400 && errorText.includes("User already exists")) {
          alert("User or mobile number already exists. Please try logging in.");
        } else {
          throw new Error(`Error ${response.status}: ${errorText}`);
        }
        setLoading(false);
        return;
      }

      const data = await response.json();
      setSuccess("Signup successful!");
      console.log("Response Data:", data);

      // Navigate to login after signup success (optional)
      setTimeout(() => {
        navigate("/signin");
      }, 1500);

    } catch (err) {
      console.error("Error during signup:", err.message);
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
          <h1 className="text-2xl font-bold text-center mb-2">Signup</h1>
          <p className="text-center text-gray-600 mb-6">Welcome to Ayon</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Mobile Number</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-bold mb-2">Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <img
                src={passwordVisible ? "/assets/eyeopen.svg" : "/assets/eyeclose.svg"}
                alt="Toggle Password Visibility"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer pt-6"
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-bold mb-2">Re-Enter Password</label>
              <input
                type={reenterPasswordVisible ? "text" : "password"}
                name="reenterPassword"
                value={formData.reenterPassword}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <img
                src={reenterPasswordVisible ? "/assets/eyeopen.svg" : "/assets/eyeclose.svg"}
                alt="Toggle Re-Enter Password Visibility"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer pt-6"
                onClick={() => setReenterPasswordVisible(!reenterPasswordVisible)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded mt-4"
              disabled={loading}
            >
              {loading ? "Signing..." : "Signup"}
            </button>
          </form>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && <p className="text-green-500 text-center mt-4">{success}</p>}

          <div className="text-center mt-4">
            <span>Already have an Account?</span>
            <Link to="/signin" className="text-blue-600 ml-2">Login →</Link>
          </div>

          <div className="text-center mt-8 text-sm">
            <p>
              By proceeding, you agree to the
              <Link to="/terms" className="text-blue-600 underline ml-1">
                Terms and Conditions
              </Link>{" "}
              and
              <Link to="/privacy" className="text-blue-600 underline ml-1">
                Privacy Policy
              </Link>
            </p>

            <div className="flex justify-center space-x-4 mt-4">
              <Link to="/help" className="text-gray-600 underline">Help</Link>
              <Link to="/privacy" className="text-gray-600 underline">Privacy</Link>
              <Link to="/terms" className="text-gray-600 underline">Terms</Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

import React, { useState } from "react";
import axios from "axios";

const GenerateOTP = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const generateOTP = async () => {
    try {
      const response = await axios.post("http://localhost:5000/generate-otp", {
        phone,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error generating OTP", error);
      setMessage("Error generating OTP");
    }
  };

  return (
    <div>
      <h2>Generate OTP</h2>
      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={generateOTP}>Generate OTP</button>
      <p>{message}</p>
    </div>
  );
};

export default GenerateOTP;

import React, { useState } from "react";
import axios from "axios";

const VerifyOTP = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const verifyOTP = async () => {
    try {
      const response = await axios.post("http://localhost:5000/verify-otp", {
        phone,
        otp,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error verifying OTP", error);
      setMessage("Verification failed");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOTP}>Verify OTP</button>
      <p>{message}</p>
    </div>
  );
};

export default VerifyOTP;

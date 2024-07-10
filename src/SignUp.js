import React, { useState } from 'react';

const SignUp = ({ onSignUp }) => {
  const [walletAddress, setWalletAddress] = useState('');

  const handleSignUp = () => {
    // Save wallet address in local storage (or send it to your backend)
    localStorage.setItem('walletAddress', walletAddress);
    onSignUp(walletAddress);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your wallet address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;

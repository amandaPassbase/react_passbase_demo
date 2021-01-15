import React from 'react';
import logo from './logo.svg';
import './App.css';
import VerifyButton from "@passbase/button/react"

function App() {
  
  return (
    <div className="App">
      <img
        class="img-fluid passbase"
        src="https://passbase.com/assets/images/logo.png"
        alt="Passbase"
      />
    <div class="container">
      <p class="title">Please open the demo in a new window</p>
      <p class="subtitle">
        Click the button below to start a new verification.
      </p>

      <VerifyButton
        apiKey={"YOUR_OWN_PUBLISHABLE_API_KEY"}
        onFinish={(identityAccessKey) => {
          console.log(identityAccessKey)
          console.log("passbase finished")
          // open new window when end user completes verification
          window.location.href =("https://passbase.com/")
        }}
        onError={(errorCode) => {}}
        onStart={() => {
          console.log("passbase start")
        }}
        // prefillAttributes={{
        //   email: "prefillemail@passbase.com",
        // }}
      />
      </div>
     
    </div>
  );
}

export default App;

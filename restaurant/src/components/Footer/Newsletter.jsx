// import React from "react";
// import SubHeading from "../SubHeading/SubHeading";
// import "./Newsletter.css";

// const Newsletter = () => (
//   <div className="app__newsletter">
//     <div className="app__newsletter-heading">
//       <SubHeading title="Newletter" />
//       <h1
//         className="headtext__comorant"
//         style={{ color: "#DCCA87", zIndex: "2",fontSize:'39px' }}
//       >
//         Subscribe to Our Newsletter
//       </h1>
//       <p className="p__opensans" style={{ color: "#fff" ,fontSize:'23px'}}>
//         And never miss latest Updates!
//       </p>
//       <div className="app__newsletter-input flex__center">
//         <input type="email" placeholder="Enter your e-mail address" />
//         <button type="" className="custom__button"style={{color: "#0C0C0C",
//           borderColor: "#DCCA87",
//           backgroundColor: "#DCCA87",
//           borderRadius:'3px',
//           width:'180px',color: "#0C0C0C",
//           borderColor: "#DCCA87",
//           backgroundColor: "#DCCA87",
//           padding: "0.5rem 1rem",
//          marginTop:"1.5px",
//           textAlign:'center'}}>
//           Subscribe
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default Newsletter;



import React, { useState } from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  // State to manage email input and subscription status
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  // Function to handle email input change
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear any previous error messages
  };

  // Function to handle form submission
  const handleSubscribe = () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate successful subscription
    setIsSubscribed(true);
    setEmail(""); // Clear the input field after subscribing
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1
          className="headtext__comorant"
          style={{ color: "#DCCA87", zIndex: "2", fontSize: "39px" }}
        >
          Subscribe to Our Newsletter
        </h1>
        <p className="p__opensans" style={{ color: "#fff", fontSize: "23px" }}>
          And never miss the latest updates!
        </p>
        {/* Show a success message if subscribed */}
        {isSubscribed ? (
          <p className="p__opensans" style={{ color: "#DCCA87", fontSize: "20px" }}>
            🎉 Thank you for subscribing!
          </p>
        ) : (
          <>
            <div className="app__newsletter-input flex__center">
              <input
                type="email"
                placeholder="Enter your e-mail address"
                value={email}
                onChange={handleInputChange}
                style={{ padding: "0.5rem", borderRadius: "3px", marginRight: "10px" }}
              />
              <button
                type="button"
                className="custom__button"
                onClick={handleSubscribe}
                style={{
                  color: "#0C0C0C",
                  borderColor: "#DCCA87",
                  backgroundColor: "#DCCA87",
                  padding: "0.5rem 1rem",
                  borderRadius: "3px",
                  width: "180px",
                  textAlign: "center",
                }}
              >
                Subscribe
              </button>
            </div>
            {/* Show an error message if the email is invalid */}
            {error && <p style={{ color: "red", fontSize: "16px" }}>{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default Newsletter;

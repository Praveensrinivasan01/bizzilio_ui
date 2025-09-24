import React, { useState, useEffect } from "react";
import Captcha from "react-captcha-code";

const FileDownloadWithCaptchaModal = ({
  type = "",
  email,
  isEmailValid,
  isCaptchaVerified,
  onCaptchaVerified,
  showCaptcha,
}) => {
  const [captcha, setCaptcha] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [captchaKey, setCaptchaKey] = useState(0); // to force refresh
  const [showVerified, setShowVerified] = useState(false);

  // Reset captcha state when email changes
  useEffect(() => {
    setInputValue("");
    setCaptcha("");
    setCaptchaKey((prev) => prev + 1);
    setShowVerified(false);
  }, [email]);

  const fileType = (type) => {
    switch (type) {
      case "ecommerce":
        return {
          name: "Bizzilo - eCommerce Checklist.pdf",
          fileUrl: "/assets/pdf/ecommerce.pdf",
        };
      case "playbook":
        return {
          name: "Bizzilo - D2C Playbook.pdf",
          fileUrl: "/assets/pdf/playbook.pdf",
        };
      default:
        return null;
    }
  };

  const handleCaptchaVerify = () => {
    if (inputValue !== captcha) {
      alert("CAPTCHA is incorrect. Please try again.");
      setInputValue("");
      setCaptchaKey((prev) => prev + 1); // refresh captcha
      return;
    }
    setInputValue("");
    setCaptcha("");
    setShowVerified(true);
    onCaptchaVerified(); // Call the onCaptchaVerified prop
  };

  const handleDownload = () => {
    const fileDetails = fileType(type);
    if (!fileDetails) return;

    const link = document.createElement("a");
    link.href = fileDetails.fileUrl;
    link.setAttribute("download", fileDetails.name);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div>
      {/* Show captcha if email is entered */}
      {isEmailValid && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "60px",
            gap: "10px",
            minHeight: "32px",
          }}
        >
          <Captcha
            key={captchaKey}
            charNum={5}
            onChange={(val) => setCaptcha(val)}
            height={45}
            width={160}
            fontSize={26}
          />
          {/* Only show refresh if not verified */}
          {!(isCaptchaVerified || showVerified) && (
            <span
              style={{
                cursor: "pointer",
                fontSize: "12px",
                userSelect: "none",
              }}
              onClick={() => setCaptchaKey((prev) => prev + 1)}
            >
              🔄
            </span>
          )}
          {/* Show input and verify button if not verified */}
          {!isCaptchaVerified && !showVerified && (
            <>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter Ca..."
                style={{
                  width: "90px",
                  padding: "4px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                  outline: "none",
                  boxShadow: "none",
                  transition: "all 0.2s",
                }}
              />
              <button
                onClick={handleCaptchaVerify}
                style={{
                  padding: "4px 10px",
                  backgroundColor: "#3b8c42",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "13px",
                  transition: "all 0.2s",
                }}
              >
                Verify
              </button>
            </>
          )}
          {/* Show verified text if verified */}
          {(isCaptchaVerified || showVerified) && (
            <span
              style={{
                color: "#3b8c42",
                fontWeight: "bold",
                fontSize: "18px",
                marginLeft: "8px",
                opacity: 1,
                animation: "fadeInVerified 0.7s",
              }}
            >
              Verified
            </span>
          )}
        </div>
      )}
      <div className="smallInputCheckbox mb_24">
        <input type="checkbox" id="Subscribefutureposts" />
        <label htmlFor="Subscribefutureposts">
          <div>Subscribe if you’d like to be notified o future posts</div>
        </label>
      </div>
      <button
        className="sherwoodGreenbtn"
        onClick={handleDownload}
        disabled={!isEmailValid || !isCaptchaVerified}
        style={{
          backgroundColor:
            !isEmailValid || !isCaptchaVerified ? "#ccc" : undefined,
          color: !isEmailValid || !isCaptchaVerified ? "#666" : undefined,
          cursor:
            !isEmailValid || !isCaptchaVerified ? "not-allowed" : "pointer",
        }}
      >
        Download Now
      </button>
      {/* Add fade-in animation for verified text */}
      <style>
        {`
          @keyframes fadeInVerified {
            0% { opacity: 0; transform: scale(0.8);}
            60% { opacity: 1; transform: scale(1.05);}
            100% { opacity: 1; transform: scale(1);}
          }
        `}
      </style>
    </div>
  );
};

export default FileDownloadWithCaptchaModal;

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
  const [showSplash, setShowSplash] = useState(false); // new state for splash

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
            position: "relative",
          }}
        >
          {/* Show captcha only if not verified and not splash */}
          {!showSplash && !isCaptchaVerified && !showVerified && (
            <Captcha
              key={captchaKey}
              charNum={5}
              onChange={(val) => setCaptcha(val)}
              height={45}
              width={160}
              fontSize={30  }
            />
          )}
          {/* Splash loader */}
          {showSplash && (
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(59,140,66,0.12)",
                borderRadius: "8px",
                animation: "splashFadeIn 0.3s",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "#3b8c42",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 18px 6px #3b8c42",
                  animation: "splashPulse 2s infinite",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <circle
                    cx="11"
                    cy="11"
                    r="9"
                    stroke="#fff"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.7"
                  />
                </svg>
              </div>
            </div>
          )}
          {/* Only show refresh if not verified and not splash */}
          {!showSplash && !isCaptchaVerified && !showVerified && (
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
          {/* Show input and verify button if not verified and not splash */}
          {!showSplash && !isCaptchaVerified && !showVerified && (
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
                  color: "#333",
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
          {!showSplash && (isCaptchaVerified || showVerified) && (
            <span
              style={{
                color: "#fff",
                background: "linear-gradient(90deg,#3b8c42 60%,#5ad67d 100%)",
                fontWeight: "bold",
                fontSize: "16px",
                marginLeft: "8px",
                padding: "6px 18px",
                borderRadius: "16px",
                boxShadow: "0 2px 8px 0 rgba(91,214,125,0.18)",
                letterSpacing: "1px",
                display: "inline-block",
                opacity: 1,
                animation: "verifiedSlideIn 0.7s cubic-bezier(.68,-0.55,.27,1.55)",
              }}
            >
              <svg
                style={{
                  verticalAlign: "middle",
                  marginRight: "7px",
                  marginBottom: "2px",
                }}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="9" fill="#fff" opacity="0.18" />
                <path
                  d="M5 9l2.5 2.5L13 6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Captcha Verified
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
          @keyframes verifiedSlideIn {
            0% { opacity: 0; transform: translateY(16px) scale(0.8);}
            60% { opacity: 1; transform: translateY(-2px) scale(1.08);}
            100% { opacity: 1; transform: translateY(0) scale(1);}
          }
        `}
      </style>
    </div>
  );
};

export default FileDownloadWithCaptchaModal;

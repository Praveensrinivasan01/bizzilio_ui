import React, { useState } from "react";
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
            gap: "8px",
          }}
        >
          <Captcha
            key={captchaKey} // force refresh when key changes
            charNum={5}
            onChange={(val) => setCaptcha(val)}
            height={35}
            width={120}
            fontSize={18}
          />
          {/* Small refresh icon */}
          <span
            style={{
              cursor: "pointer",
              fontSize: "18px",
              userSelect: "none",
            }}
            onClick={() => setCaptchaKey((prev) => prev + 1)}
          >
            🔄
          </span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter CAPTCHA"
            style={{
              width: "110px",
              padding: "6px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "14px",
              outline: "none",
              boxShadow: "none",
            }}
          />
          <button
            onClick={handleCaptchaVerify}
            style={{
              padding: "6px 12px",
              backgroundColor: "#3b8c42",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Verify
          </button>
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
    </div>
  );
};

export default FileDownloadWithCaptchaModal;

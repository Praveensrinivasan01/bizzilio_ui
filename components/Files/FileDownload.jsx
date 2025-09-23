import React, { useState } from "react";
import Captcha from "react-captcha-code";

const FileDownloadWithCaptchaModal = ({ type = "" }) => {
  const [showModal, setShowModal] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [captchaKey, setCaptchaKey] = useState(0); // to force refresh

  const fileType = (type) => {
    switch (type) {
      case "ecommerce":
        return {
          name: "Bizzilo - eCommerce Checklist.pdf",
          fileUrl: "/assets/pdf/playbook.pdf",
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

  const handleDownloadClick = () => setShowModal(true);

  const handleCaptchaVerify = () => {
    if (inputValue !== captcha) {
      alert("CAPTCHA is incorrect. Please try again.");
      setInputValue("");
      setCaptchaKey((prev) => prev + 1); // refresh captcha
      return;
    }

    const fileDetails = fileType(type);
    if (!fileDetails) return;

    const link = document.createElement("a");
    link.href = fileDetails.fileUrl;
    link.setAttribute("download", fileDetails.name);
    document.body.appendChild(link);
    link.click();
    link.remove();

    // Reset
    setInputValue("");
    setCaptcha("");
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setInputValue("");
    setCaptcha("");
  };

  return (
    <div>
      <button
        className="sherwoodGreenbtn"
        onClick={handleDownloadClick}
      >
        Download Now
      </button>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleCloseModal} // close when clicked outside
        >
          <div
            style={{
              background: "#fff",
              padding: "15px 20px",
              borderRadius: "8px",
              textAlign: "center",
              width: "260px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
          >
            {/* Close icon */}
            <span
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
              onClick={handleCloseModal}
            >
              ×
            </span>

            <h4 style={{ marginBottom: "10px" }}>Verify CAPTCHA</h4>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
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
                  marginLeft: "5px",
                  fontSize: "18px",
                  userSelect: "none",
                }}
                onClick={() => setCaptchaKey((prev) => prev + 1)}
              >
                🔄
              </span>
            </div>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter CAPTCHA"
              style={{
                width: "100%",
                padding: "6px",
                marginBottom: "12px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />

            <button
              onClick={handleCaptchaVerify}
              style={{
                width: "100%",
                padding: "8px",
                backgroundColor: "#3b8c42",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Verify & Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileDownloadWithCaptchaModal;

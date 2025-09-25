import React, { useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_ONE;

const FileDownloadWithCaptchaModal = ({
  type = "",
  email,
  isEmailValid,
  isCaptchaVerified,
  onCaptchaVerified,
  showCaptcha,
}) => {
  const recaptchaRef = useRef(null);
 console.log("isCaptchaVerified", onCaptchaVerified);
  // Reset captcha verification when email changes
  useEffect(() => {
    // Always reset captcha verification when email changes
    onCaptchaVerified(false);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
    // eslint-disable-next-line
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

  const handleRecaptcha = (token) => {
    // Google Recaptcha will call this function with a token string when the user successfully verifies the captcha.
    // The token is proof that the user passed the "I'm not a robot" check.
    // You can send this token to your backend for verification if needed.
    if (token) {
      // This means Google has verified the user.
      onCaptchaVerified(true); // Enable download
    } else {
      onCaptchaVerified(false); // Not verified
    }
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
      {/* Show recaptcha if email is valid */}
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
          { (
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={handleRecaptcha}
              theme="light"
            />
          )}
        </div>
      )}
      <div className="smallInputCheckbox mb_24">
        <input type="checkbox" id="Subscribefutureposts" />
        <label htmlFor="Subscribefutureposts">
          <div>Subscribe if you’d like to be notified on future posts</div>
        </label>
      </div>
      <button
        className="sherwoodGreenbtn"
        onClick={handleDownload}
        disabled={!isCaptchaVerified}
        style={{
          backgroundColor:
            !isCaptchaVerified ? "#ccc" : undefined,
          color: !isCaptchaVerified? "#666" : undefined,
          cursor:
            !isCaptchaVerified? "not-allowed" : "pointer",
        }}
      >
        Download Now
      </button>
      <style>
        {`
          @keyframes splashFadeIn {
            0% { opacity: 0;}
            100% { opacity: 1;}
          }
          @keyframes splashPulse {
            0% { box-shadow: 0 0 18px 6px #3b8c42;}
            50% { box-shadow: 0 0 28px 12px #3b8c42;}
            100% { box-shadow: 0 0 18px 6px #3b8c42;}
          }
        `}
      </style>
    </div>
  );
};

export default FileDownloadWithCaptchaModal;

// Google Recaptcha is shown only if not verified, and download is enabled after verification.
// No further changes needed for your requested flow.
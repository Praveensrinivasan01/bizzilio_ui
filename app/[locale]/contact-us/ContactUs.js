'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { ReCAPTCHA } from 'react-google-recaptcha'


const ContactUs = () => {
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    mobile: '',
    scheduleDemo: 'interested',
    preferredDate: ''
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
    
    if (errors.captcha) {
      setErrors(prev => ({
        ...prev,
        captcha: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    }
    
    if (formData.scheduleDemo === 'interested' && !formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }
    
    if (!captchaValue) {
      newErrors.captcha = 'Please complete the captcha';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      console.log('Form submitted:', formData);
      
      // Simulate API call
      setTimeout(() => {
        alert('Demo request submitted successfully! We will contact you soon.');
        setIsSubmitting(false);
        
        // Reset form
        setFormData({
          name: '',
          organization: '',
          email: '',
          mobile: '',
          scheduleDemo: 'interested',
          preferredDate: ''
        });
        setCaptchaValue(null);
        recaptchaRef.current.reset();
      }, 1500);
    }
  };

  return (
    <section className="accountCreation_sec">
      <div className="container">
        <div className="row alignItem_center ">
          <div className="col-lg-6">
            <div className="balljumbingFrame">
              <div className="ball">
                <img src="/assets/images/ball_jump.png" alt="ball_jump" />
              </div>
              <div className="ballshadow"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accountCreationFrame">
              <Link
                href="#"
                className="mb_32 displayInlineFlex alignItem_center gap12  blackText_Clr fontSize16 fontWeight600 textDecoration_unset"
              >
                <img
                  className="blackFilter width14px"
                  src="/assets/images/leftarrow.svg"
                  alt="leftarrow"
                />
                <span>Back</span>
              </Link>

              <h2 className="ruinedSmoresText_clr fontSize18 fontWeight700 mb_8">
                Schedule Demo
              </h2>
              <p className="midnightSkyText_clr fontSize14 fontWeight400 mb_34">
                Request a demo by filling the form
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb_24">
                  <label className="labeltext">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`mainInput ${errors.name ? 'input-error' : ''}`} 
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="mb_24">
                  <label className="labeltext">
                    Organisation Name (Optional)
                  </label>
                  <input 
                    type="text" 
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="mainInput" 
                  />
                </div>

                <div className="mb_24">
                  <label className="labeltext">Email ID *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mainInput ${errors.email ? 'input-error' : ''}`} 
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="mb_24">
                  <label className="labeltext">Mobile *</label>
                  <input 
                    type="tel" 
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className={`mainInput ${errors.mobile ? 'input-error' : ''}`} 
                  />
                  {errors.mobile && <span className="error-text">{errors.mobile}</span>}
                </div>

                <div className="mb_24">
                  <label className="labeltext mb_16">Schedule Demo</label>

                  <div className="displayFlex alignItem_center gap20">
                    <div className="prefer_method">
                      <input
                        type="radio"
                        id="interested"
                        name="scheduleDemo"
                        value="interested"
                        checked={formData.scheduleDemo === 'interested'}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="interested">Yes I'm Interested</label>
                    </div>

                    <div className="prefer_method">
                      <input
                        type="radio"
                        id="notIntrested"
                        name="scheduleDemo"
                        value="notInterested"
                        checked={formData.scheduleDemo === 'notInterested'}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="notIntrested">I'm Not Interested</label>
                    </div>
                  </div>
                </div>
                
                {formData.scheduleDemo === 'interested' && (
                  <div className="mb_24">
                    <label className="labeltext mb_8">
                      Select Preferred Date *
                    </label>
                    <input 
                      type="date" 
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className={`mainInput ${errors.preferredDate ? 'input-error' : ''}`} 
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.preferredDate && <span className="error-text">{errors.preferredDate}</span>}
                  </div>
                )}

                <div className="mb_24">
                  <ReCAPTCHA
                    ref={recaptchaRef}
  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Google's test key
                    onChange={handleCaptchaChange}
                  />
                  {errors.captcha && <span className="error-text">{errors.captcha}</span>}
                </div>
                
                <button 
                  type="submit" 
                  className="loginBtn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .input-error {
          border-color: #ff4d4f !important;
        }
        
        .error-text {
          color: #ff4d4f;
          font-size: 12px;
          display: block;
          margin-top: 4px;
        }
        
        .loginBtn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}

export default ContactUs
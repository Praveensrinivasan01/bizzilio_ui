const SafeSupportedSection = () => {
  return (
    <section className="safeSupported_sec" id="Support">
      <div className="container">
        <div className="sectionheader">
          <h2 className="textalign_center">Your Business, Safe & Supported</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 mobspaceMb_24">
            <div className="safeSupported_item">
              <img
                src="/assets/images/gethelp.png"
                alt="Get help whenever you need it"
              />
              <h4>We got you</h4>
              <p>
                Our support team is always ready to assist you with setup,
                troubleshooting, or day-to-day questions.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mobspaceMb_24">
            <div className="safeSupported_item">
              <img
                src="/assets/images/adminPortal.png"
                alt="Do it Yourself Admin Portal"
              />

              <h4>Do it Yourself Portal</h4>
              <p>
                Manage your store settings, products, users, and configurations
                without relying on support. Make quick changes anytime.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="safeSupported_item">
              <img src="/assets/images/datasafe.png" alt="data safe" />

              <h4>Keep your data safe</h4>
              <p>
                Protect sensitive data with enterprise-grade security and stay
                compliant with tax, invoicing, and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeSupportedSection;

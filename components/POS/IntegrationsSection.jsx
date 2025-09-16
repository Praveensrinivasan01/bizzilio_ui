import Marquee from "react-fast-marquee";

const IntegrationsSection = () => {
  return (
    <section className="integrations_sec posIntegrations_sec" id="integrations">
      <div className="container-fluid">
        <h2>Integrations</h2>
        <div className="integrationsframe">
          <Marquee speed={50} direction="left" gradient={false} minWidth={0}>
            <div className="integrationsParent">
              <div className="integrationsIconframe">
                <img src="/assets/images/phonepe.png" alt="Phonepe" />
              </div>
              <div className="integrationsIconframe">
                <img src="/assets/images/razorpay.svg" alt="Razorpay" />
              </div>
              <div className="integrationsIconframe">
                <img src="/assets/images/hotjar.png" alt="Hotjar" />
              </div>
              <div className="integrationsIconframe">
                <img src="/assets/images/meta.png" alt="Meta" />
              </div>
              <div className="integrationsIconframe">
                <img src="/assets/images/shiprocket.png" alt="Shiprocket" />
              </div>
            </div>
          </Marquee>
          <Marquee speed={50} direction="right" gradient={false}>
            <div className="integrationschild">
              <div className="integrationsIconframe">
                <img
                  src="/assets/images/googleAnalytics.png"
                  alt="GoogleAnalytics"
                />
              </div>
              <div className="integrationsIconframe">
                <img
                  src="/assets/images/googleTagmanager.png"
                  alt="GoogleTagmanager"
                />
              </div>
              <div className="integrationsIconframe">
                <img src="/assets/images/mail.png" alt="Mail" />
              </div>
              <div className="integrationsIconframe">
                <img src="/assets/images/message.png" alt="Message" />
              </div>
              <div className="integrationsIconframe">
                <img src="/assets/images/shiprocket.png" alt="Shiprocket" />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;

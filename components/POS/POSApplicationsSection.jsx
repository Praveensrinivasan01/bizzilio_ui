const POSApplicationsSection = () => {
  return (
    <section className="posApplications_sec" id="applications">
      <div className="container">
        <div className="sectionheader">
          <h2 className="textalign_center">POS Applications</h2>
        </div>

        <div className="row">
          <div className="col-lg-6 mobspaceMb_24">
            <div className="posApplications_item">
              <h5>Point of Sale Billing Application</h5>
              <p>
                Bizzilo POS makes billing fast and seamless on Windows, iOS, and
                Android. Scan items, add customers, accept payments, and even
                bill offline. keeping queues moving effortlessly.
              </p>

              <img
                src="/assets/images/posbillingApp.png"
                alt="Point of Sale Billing Application"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="posApplications_item">
              <h5>Back Office Web Application</h5>
              <p>
                Easily handle all back-office operations with the Bizzilo web
                app. Track inventory, sales, purchases, and customers, and
                access reports and dashboards to uncover insights and run your
                store more efficiently.
              </p>

              <img
                className="width100per"
                src="/assets/images/backOfficeWebapp.png"
                alt="Back Office Web Application"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default POSApplicationsSection;

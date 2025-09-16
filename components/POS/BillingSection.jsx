const BillingSection = () => {
  return (
    <section className="billing_sec" id="billing">
      <div className="container">
        <div className="sectionheader">
          <h2 className="textalign_center">
            Turn Queues into Profits with Swift Billing
          </h2>
        </div>

        <div className="row mb_16">
          <div className="col-lg-6">
            <div className="billingItem  mobspaceMb_24 billingfirstrowEqHeight">
              <h3>
                Bill Customers Offline <br className="brHideOnMobile" />
                (Without Internet)
              </h3>

              <p>
                Continue selling without interruptions by generating invoices
                offline. All transactions sync automatically once you're back
                online
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="billingItem billingfirstrowEqHeight">
              <h3>Stay on top of every cash transaction</h3>

              <p>
                Record, monitor, and reconcile all cash payments with ease.
                Maintain clear visibility of daily collections and reduce
                errors.
              </p>
            </div>
          </div>
        </div>

        <div className="billingItem mb_16" style={{ background: "#EFEFEF" }}>
          <div className="row">
            <div className="col-lg-8 mobspaceMb_24">
              <h3>Scan to add items to cart</h3>
              <p>
                Use barcode or QR code scanning to add items instantly to the
                cart or billing screen. Speed up checkout, reduce errors, and
                give customers a smooth shopping experience.
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="width100per"
                src="/assets/images/scanAdditems_cart.png"
                alt="scanToAddItems"
              />
            </div>
          </div>
        </div>

        <div className="billingItem mb_16">
          <div className="row">
            <div className="col-lg-8 mobspaceMb_24">
              <h3>Bill Customers in Local Languages</h3>
              <p>
                Generate invoices and receipts in regional languages your
                customers understand best. Build trust, improve transparency,
                and create a more personalized buying experience at checkout.
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="width100per"
                src="/assets/images/localLanguages.png"
                alt="localLanguages"
              />
            </div>
          </div>
        </div>

        <div className="row mb_16">
          <div className="col-lg-6">
            <div className="billingItem billinglastrowEqHeight  mobspaceMb_24">
              <h3>Hold and re-open cart</h3>

              <p>
                Put a customer's cart on hold and reopen it later without losing
                items. Manage multiple checkouts smoothly, speed up billing, and
                keep queues moving efficiently.
              </p>

              <div>
                <img
                  className="width100per"
                  src="/assets/images/bizzilo-hold-and-reopen-cart.png"
                  alt="bizzilo-hold-and-reopen-cart"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="billingItem billinglastrowEqHeight"
              style={{ background: "#EFEFEF" }}
            >
              <h3>Customize bills with ready-made templates</h3>

              <p>
                Choose from multiple billing formats and personalize them with
                your logo, business details, and tax information. Create
                professional invoices that reflect your brand while saving time
                on every transaction.
              </p>

              <div className="customizebills_img">
                <img
                  src="/assets/images/customizebills_template.png"
                  alt="customizebills_template"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingSection;

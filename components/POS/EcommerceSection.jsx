import Link from "next/link";

const EcommerceSection = () => {
  return (
    <section className="ecomOnlineStore_sec" id="ecommerce">
      <div className="container">
        <div className="row alignItem_center">
          <div className="col-lg-5">
            <div className="mobspaceMb_24">
              <h2 className="fontSize44 fontWeight700 sootytext_clr mb_24">
                Back your business with the ultimate online store
              </h2>

              <p className="fontSize18 fontWeight400 caviarText_clr mb_34">
                With hundreds of themes designed for commerce and optimized for
                conversion, it's no wonder the world's best online stores are
                built on Shopify.
              </p>

              <h5 className="fontSize24 fontWeight700 blackText_Clr ">
                Drag & Drop Store-front
              </h5>
              <p className="fontSize18 fontWeight400 blackText_Clr mb_24">
                Create an online store to support your business with the
                drag-and-drop builder.
              </p>

              <h5 className="fontSize24 fontWeight700 blackText_Clr ">
                24 x 7 Online Store
              </h5>
              <p className="fontSize18 fontWeight400 blackText_Clr mb_60">
                With omnichannel selling, let your customers shop from your
                store anytime, anywhere, without leaving the comfort of their
                homes.
              </p>

              <Link
                href="/features/ecommerce"
                className="blackText_Clr fontWeight500 fontSize18"
              >
                {" "}
                Explore Bizzilo Commerce
              </Link>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <img
              src="/assets/images/ultimateOnline_store.png"
              alt="ultimateOnline_store"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;

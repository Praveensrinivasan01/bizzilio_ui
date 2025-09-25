const ProductCatalogue = () => {
  return (
    <section className="productCatalogue_sec" id="Catalogue">
      <div className="container">
        <div className="sectionheader">
          <h2
            className="textalign_center whiteText_Clr"
            style={{ color: "#fff" }}
          >
            Product Catalogue
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="productCatalogueItem  mobspaceMb_24">
              <h5>Sell smarter with product variations</h5>
              <p>
                Offer your customers multiple choices of size, color, or style
                under one product listing. Manage them easily without
                duplicating items, and keep inventory accurate across every
                variation in real time.
              </p>

              <img
                src="/assets/images/productVariations.png"
                alt="productVariations"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="productCatalogueItem">
              <h5>Boost sales with smart Product Bundles</h5>
              <p>
                Group items into attractive bundles and combo offers that
                delight your customers. Increase average order value, move
                inventory faster, and keep stock counts updated automatically
                across every sale.
              </p>

              <img
                src="/assets/images/productBundles.png"
                alt="productBundles"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogue;

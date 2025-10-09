const InventorySection = () => {
  return (
    <section className="inventory_sec" id="Inventory">
      <div className="container">
        <div className="sectionheader">
          <h2 className="textalign_center" style={{ color: "#fff" }}>
            Smart Inventory Features
          </h2>
        </div>

        <div className="row mb_16">
          <div className="col-lg-4">
            <div className="inventoryItem  mobspaceMb_24">
              <h3>Manage inventory in one place</h3>
              <p>
                Maintain a single repository of items across your stores and
                warehouses. Track stock with real-time syncs.
              </p>

              <img
                src="/assets/images/inventory_in_one_place.png"
                alt="inventory_in_one_place"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="inventoryItem  mobspaceMb_24">
              <h3>Track every item - serials & batches</h3>
              <p>
                Assign serial numbers or batch IDs to your products for complete
                traceability. Monitor expiry dates and returns with ease.
              </p>

              <img
                src="/assets/images/serialsbatches.png"
                alt="serialsbatches"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="inventoryItem  mobspaceMb_24">
              <h3>Never run out of stock again</h3>
              <p>
                Set minimum stock levels and get instant alerts when inventory
                runs low. Reorder at the right time to avoid stockouts.
              </p>

              <img src="/assets/images/stockAgain.png" alt="stockAgain" />
            </div>
          </div>
        </div>

        <div className="row mb_16">
          <div className="col-lg-6">
            <div className="inventoryItem inventoryEqualheight  mobspaceMb_24">
              <h3>Easily adjust and correct your stock</h3>
              <p>
                Update inventory counts in real time to fix damages, losses, or
                mismatches. Keep your records accurate and ensure your stock
                always reflects what's actually available for sale.
              </p>

              <img
                src="/assets/images/easilyAdjust_correctyourstock.png"
                alt="easilyAdjust_correctyourstock"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="inventoryItem inventoryEqualheight  mobspaceMb_24">
              <div className="inventoryColumnRev">
              <div className="mb_24">
                <img
                  src="/assets/images/multiplebranches_warehouses.png"
                  alt="multiplebranches_warehouses"
                />
              </div>
              <div>
                <h3>
                  Seamlessly manage stock across multiple branches and warehouses
                </h3>
                <p className="mbZero">
                  Move items between your warehouses, stores, or branches with
                  complete visibility. Track every transfer in real time to keep
                  inventory accurate and ensure products are always available
                  where they're needed.
                </p>
              </div>
              </div>
          
            </div>
          </div>
        </div>

        <div className="row mb_16">
          <div className="col-lg-4">
            <div className="inventoryItem  mobspaceMb_24">
              <h3>Smarter stock refill recommendations</h3>
              <p>
                Get AI-driven recommendations for reordering based on sales
                trends, purchase history and stock levels.
              </p>

              <img
                src="/assets/images/smarterrecom_stockRefills.png"
                alt="smarterrecom_stockRefills"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="inventoryItem  mobspaceMb_24">
              <h3>Generate SKUs for every product</h3>
              <p>
                Automatically generate unique SKU codes for your items to
                simplify cataloging and tracking.
              </p>

              <img
                src="/assets/images/skus_effortlessly.png"
                alt="skus_effortlessly"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="inventoryItem">
              <h3>Optimized shipping choices</h3>
              <p>
                Compare rates across multiple courier partners and choose the
                most cost-effective option for every order.
              </p>

              <img
                src="/assets/images/smartershippingchoices.png"
                alt="smartershippingchoices"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;

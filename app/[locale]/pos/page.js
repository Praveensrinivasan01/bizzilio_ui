export async function generateMetadata() {
  const title =
    "Bizzilo POS | Smart Point of Sale for Retail & Omnichannel Success";
  const description =
    "Manage sales effortlessly with Bizzilo POS-available on desktop and mobile, online and offline. Handle billing, inventory, and customer data seamlessly, fully integrated with your e-commerce store.";

  const metaData = MetaTags({ title, description });

  return metaData;
}

export const dynamic = "force-static";
export const revalidate = 7200;

import { MetaTags } from "../../../components/MetaTags";

import React from "react";
import {
  POSHero,
  OnePOSEveryIndustry,
  POSFeaturesTabs,
  ProductCatalogue,
  BillingSection,
  InventorySection,
  HardwareSection,
  EcommerceSection,
  ProcurementSalesSection,
  POSApplicationsSection,
  IntegrationsSection,
  SafeSupportedSection,
  StartTrialSection,
  POSAnimations,
} from "../../../components/POS";
import StickyPaymentsSection from "../../../components/StickyPaymentsSection";

const page = () => {
  return (
    <>
      <POSHero />
      <OnePOSEveryIndustry />
      <POSFeaturesTabs />
      <ProductCatalogue />
      <BillingSection />
      <InventorySection />
      <StickyPaymentsSection />
      <HardwareSection />
      <EcommerceSection />
      <ProcurementSalesSection />
      <POSApplicationsSection />
      <IntegrationsSection />
      <SafeSupportedSection />
      <StartTrialSection />
      <POSAnimations />
    </>
  );
};

export default page;

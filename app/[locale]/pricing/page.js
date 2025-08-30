export const dynamic = 'force-static';
export const revalidate = 7200;
export const fetchCache = 'force-cache';

import React from 'react'

import PricingComponent from '../../../components/PricingComponent';

export const metadata = {
  title: "Pricing Details | Bizzilo - Accelerate Plan & Add-ons",
  description: "View detailed pricing for Bizzilo’s Accelerate plan, including users, stores, POS, sales features, and add-ons like extra users, locations, and POS terminals.",
  keywords: "Bizzilo pricing, Accelerate plan, ERP subscription cost, add-ons, users, locations, POS, cloud ERP plans",
  openGraph: {
    title: "Pricing Details | Bizzilo",
    description: "Explore Bizzilo’s Accelerate plan details and add-ons including additional users, locations, and POS at affordable monthly rates.",
    type: "website",
  },
}

const page = () => {

    return (
      <PricingComponent/>
    )
}

export default page

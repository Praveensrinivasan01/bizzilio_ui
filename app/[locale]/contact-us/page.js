export const dynamic = 'force-static';
export const revalidate = 7200;
export const fetchCache = 'force-cache';
import React from 'react'

import ContactUs from './ContactUs'

export const metadata = {
  title: 'Schedule Demo | Bizzilio - Cloud ERP Solutions',
  description: 'Request a personalized demo of Bizzilio\'s cloud ERP solutions. See how our platform can transform your business operations and streamline processes.',
  keywords: 'schedule demo, Bizzilio demo, cloud ERP, business software, enterprise resource planning',
  openGraph: {
    title: 'Schedule Demo | Bizzilio',
    description: 'Request a personalized demo of Bizzilio\'s cloud ERP solutions.',
    type: 'website',
  },
}

const Page = () => {


  return (
    <ContactUs />
  );
}

export default Page
export const dynamic = 'force-static';
export const revalidate = 7200; 
export const fetchCache = 'force-cache';

export const metadata = {
  title: "Refund Policy | Bizzilo - Hassle-Free Subscription Cancellations",
  description: "Read Bizzilo's refund policy for monthly and annual subscriptions. Learn about eligibility, timelines, pro-rated refunds, and cancellation flexibility.",
  keywords: "Bizzilo refund policy, subscription refunds, cancellation policy, annual subscription, monthly subscription, pro-rated refund",
  openGraph: {
    title: "Refund Policy | Bizzilo",
    description: "Understand Bizzilo’s refund and cancellation policy for monthly and annual subscriptions, including pro-rated refund details.",
    type: "website",
  },
}

import React from 'react'

const page = () => {
  return (
    <section className='legalPolicy_sec'>
      <div className='container'>
        <div>
          <h3><strong>Bizzilo's Refund Policy</strong></h3>
          <p>At Bizzilo, we are dedicated to crafting high-quality software tailored to enhance your business or professional endeavours. With numerous options available, we are grateful for your patronage. Thank you for choosing us. In the event that our service falls short of your expectations, we have established this policy to outline our commitment to address any shortcomings.</p>

          <p>Monthly Subscriptions: Should you encounter dissatisfaction with our service within your first month of use, please reach out to us. We will diligently work to resolve your concerns, offer alternatives, or provide a timeline for a suitable solution. If your concerns persist, we are pleased to offer a full refund within 15 days for your purchase and downgrade your account to the free trial for that service.</p>

          <p>Annual Subscriptions: Bizzilo prioritizes flexibility, hence we do not mandate annual subscriptions. Instead, we empower you to choose what suits you best. Opting for an annual commitment upfront grants you a significant discount compared to the already-affordable monthly subscription cost. If within the initial 45 days of using our service you find it unsatisfactory, contact us, and we will strive to address your concerns. Should you remain dissatisfied, we will gladly offer a full refund for your purchase and downgrade your account to the free trial.</p>

          <p>Our commitment to your satisfaction extends beyond the initial 15 or 45 days, depending on your subscription type. If at any point during your contract we remove, impair, or discontinue functionality available at the time of sign-up, please notify us promptly. Failure to address these issues within promised timelines or provide a satisfactory workaround will entitle you to a pro-rated refund for the remainder of your contract.</p>

          <p>Cancellation Flexibility on renewals: Recognizing that oversights happen, we allow cancellation up to five business days after the renewal date for monthly subscriptions, and up to fifteen days after the renewal date for annual subscriptions, with eligibility for a full refund. However, refund requests, including pro-rated refunds, will not be honored beyond these periods.</p>

          <p>Please note that the free plan has restrictions as per Bizzilo’s terms of service.</p>

          <p>Note: If the refund is approved, the refund amount will  be automatically refunded on your original payment method/account within 5-8 business days.</p>

          <p>For inquiries, please email <a href="mailto:payments@bizzilo.com">payments@bizzilo.com</a>.</p>

          <p>Exception to Our Refund Policy: No refunds, whether full or pro-rated, will be granted if your account is terminated, suspended, or blocked by Bizzilo due to violations of our Terms of Service, including but not limited to phishing, impersonation, fraud, or breaches of applicable laws.</p>

        </div>
      </div>
      </section>
  )
}

export default page

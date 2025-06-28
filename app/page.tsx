"use client"

import Image from 'next/image'
import { useState } from 'react'

export default function Page() {
  // Pricing toggle state (monthly/annual)
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  const plans = [
    {
      name: 'Starter',
      monthly: 4,
      annual: 36,
      features: [
        '100 screenshots/month',
        'Basic API access',
        'Email support',
      ],
    },
    {
      name: 'Pro',
      monthly: 16,
      annual: 168,
      features: [
        '1,000 screenshots/month',
        'Priority API access',
        'Email & Chat support',
      ],
    },
    {
      name: 'Business',
      monthly: 77,
      annual: 924,
      features: [
        '10,000 screenshots/month',
        'Premium API access',
        'Dedicated support',
      ],
    },
    {
      name: 'Enterprise',
      monthly: 257,
      annual: 3084,
      features: [
        'Unlimited screenshots',
        'Enterprise API access',
        'Account manager',
      ],
    },
  ]

  const testimonials = [
    {
      name: 'Alice Johnson',
      title: 'Product Manager, Acme Inc.',
      image: '/static/images/avatar.png',
      quote:
        'ScreenAPI has completely streamlined our reporting workflow. The reliability and speed are unmatched! Highly recommended.',
    },
    {
      name: 'Carlos Mendes',
      title: 'Lead Developer, DevWorks',
      image: '/static/images/sparrowhawk-avatar.jpg',
      quote:
        'We integrated ScreenAPI in minutes. The API is super easy to use and the support team is fantastic.',
    },
    {
      name: 'Emily Chen',
      title: 'Founder, SaaSly',
      image: '/static/images/ocean.jpeg',
      quote:
        'Our marketing team loves the automated screenshots. It saves us hours every week and the image quality is superb.',
    },
  ]

  return (
    <>
      <section
        className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] py-16 gap-8 bg-gray-50 dark:bg-gray-900"
        style={{ maxWidth: '100vw' }}
      >
        {/* Left: Headline and CTA */}
        <div className="flex-1 flex flex-col items-start justify-center px-6 md:px-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Instantly Capture <span className="text-blue-600 dark:text-blue-400">Screenshots</span> with Our API
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
            The fastest, most reliable way to automate screenshots for your apps, dashboards, and workflows. Start saving time and boost your productivity today.
          </p>
          <a href="#get-started" className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition text-lg">
            Get Started Free
          </a>
        </div>
        {/* Right: Product Image */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-16">
          <Image
            src="/static/images/github-traffic.png"
            alt="Product Screenshot"
            width={520}
            height={340}
            className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 bg-white"
            priority
          />
        </div>
      </section>

      {/* How it works section */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">How it works</h2>
        <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl px-6 md:px-0">
          {/* Step 1 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8zm6 8a6 6 0 10-12 0v2a2 2 0 002 2h8a2 2 0 002-2v-2z" /></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Sign Up & Get API Key</h3>
            <p className="text-gray-600 dark:text-gray-300">Create your free account and instantly receive your personal API key to start capturing screenshots.</p>
          </div>
          {/* Step 2 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Make a Screenshot Request</h3>
            <p className="text-gray-600 dark:text-gray-300">Send a simple API request with the URL you want to capture. Our service processes it instantly.</p>
          </div>
          {/* Step 3 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Get Your Image Instantly</h3>
            <p className="text-gray-600 dark:text-gray-300">Receive your screenshot image in seconds—ready to use in your app, dashboard, or workflow.</p>
          </div>
        </div>
      </section>

      {/* Use Cases section */}
      <section
        className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen flex flex-col items-center justify-center py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
        style={{ maxWidth: '100vw' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">Use Cases</h2>
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl px-6 md:px-16">
          {/* Use Case 1 */}
          <div className="flex-1 flex flex-col items-center text-center bg-white dark:bg-gray-950 rounded-xl shadow p-8 border border-gray-200 dark:border-gray-800">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900">
              <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Automated Reports</h3>
            <p className="text-gray-600 dark:text-gray-300">Generate and embed up-to-date screenshots in your scheduled reports for clients or teams.</p>
          </div>
          {/* Use Case 2 */}
          <div className="flex-1 flex flex-col items-center text-center bg-white dark:bg-gray-950 rounded-xl shadow p-8 border border-gray-200 dark:border-gray-800">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900">
              <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Website Monitoring</h3>
            <p className="text-gray-600 dark:text-gray-300">Keep visual records of your websites or landing pages to detect changes, errors, or downtime.</p>
          </div>
          {/* Use Case 3 */}
          <div className="flex-1 flex flex-col items-center text-center bg-white dark:bg-gray-950 rounded-xl shadow p-8 border border-gray-200 dark:border-gray-800">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900">
              <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0zM5 15a7 7 0 0014 0v-2a7 7 0 00-14 0v2z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Social Proof & Testimonials</h3>
            <p className="text-gray-600 dark:text-gray-300">Show real screenshots of your product, reviews, or user activity to boost trust and conversions.</p>
          </div>
          {/* Use Case 4 */}
          <div className="flex-1 flex flex-col items-center text-center bg-white dark:bg-gray-950 rounded-xl shadow p-8 border border-gray-200 dark:border-gray-800">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900">
              <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1a2 2 0 00-2 2v4a2 2 0 002 2h1a2 2 0 002-2v-4a2 2 0 00-2-2z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
            <p className="text-gray-600 dark:text-gray-300">Integrate screenshots into your automation tools to streamline documentation, QA, or onboarding.</p>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section
        className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
        style={{ maxWidth: '100vw' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">Pricing</h2>
        {/* Billing toggle */}
        <div className="flex items-center mb-12">
          <button
            className={`px-6 py-2 rounded-l-lg font-semibold border border-gray-300 dark:border-gray-700 transition ${billing === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-r-lg font-semibold border-t border-b border-r border-gray-300 dark:border-gray-700 transition ${billing === 'annual' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
            onClick={() => setBilling('annual')}
          >
            Annual
          </button>
        </div>
        {/* Plans */}
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl px-6 md:px-16">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className="flex-1 flex flex-col items-center text-center bg-gray-50 dark:bg-gray-900 rounded-xl shadow p-8 border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">{plan.name}</h3>
              <div className="mb-2 flex items-baseline justify-center">
                <span className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                  ${billing === 'monthly' ? plan.monthly : plan.annual}
                </span>
                <span className="ml-2 text-lg text-gray-600 dark:text-gray-400 font-medium">
                  /{billing === 'monthly' ? 'mo' : 'yr'}
                </span>
              </div>
              {billing === 'annual' && (
                <span className="mb-3 text-xs text-green-600 dark:text-green-400">Save {Math.round(100 - (plan.annual / (plan.monthly * 12)) * 100)}%</span>
              )}
              <ul className="my-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-700 dark:text-gray-300 text-sm flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof section */}
      <section
        className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
        style={{ maxWidth: '100vw' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">Social Proof</h2>
        <p className="mb-12 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl">See what our users are saying about ScreenAPI and how it’s transforming their workflow.</p>
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl px-6 md:px-0">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="flex-1 flex flex-col items-center text-center bg-gray-50 dark:bg-gray-900 rounded-xl shadow p-8 border border-gray-200 dark:border-gray-800"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={64}
                height={64}
                className="rounded-full mb-4 object-cover"
              />
              <blockquote className="italic text-gray-800 dark:text-gray-200 mb-4">“{t.quote}”</blockquote>
              <div className="font-semibold text-gray-900 dark:text-white">{t.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section
        className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen py-16 flex flex-col items-center justify-center bg-blue-600 dark:bg-blue-500 border-t border-gray-200 dark:border-gray-800"
        style={{ maxWidth: '100vw' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Ready to get started?</h2>
        <p className="mb-8 text-lg text-blue-100 dark:text-blue-50 text-center max-w-2xl">Create your free account and start capturing screenshots with our powerful API in minutes.</p>
        <a href="#get-started" className="px-10 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-100 transition text-lg">
          Get Started Now
        </a>
      </section>
    </>
  )
}

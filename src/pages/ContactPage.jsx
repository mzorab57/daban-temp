import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="tw-bg-[#F8FAFC] tw-min-h-screen tw-pt-32 tw-pb-24 tw-px-6 md:tw-px-12 lg:tw-px-24">
      <div className="tw-max-w-6xl tw-mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="tw-text-center tw-mb-20"
        >
          <h1 className="tw-text-5xl md:tw-text-7xl tw-text-[#112D6B] tw-font-[800] tw-leading-tight tw-mb-6">
            Get in touch
          </h1>
          <p className="tw-text-[#112D6B]/70 tw-text-xl md:tw-text-2xl tw-font-medium tw-leading-relaxed tw-max-w-3xl tw-mx-auto">
            We are here to help. Reach out to our teams below and we will get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 lg:tw-gap-12">
          
          {/* Emails Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="tw-bg-white tw-p-10 tw-rounded-[32px] tw-shadow-2xl tw-shadow-[#112D6B]/5 tw-border tw-border-gray-100 tw-transition-transform hover:-tw-translate-y-2 tw-duration-300"
          >
            <div className="tw-w-14 tw-h-14 tw-bg-[#112D6B]/5 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#112D6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <h3 className="tw-text-3xl tw-text-[#112D6B] tw-font-bold tw-mb-8">Emails</h3>
            <ul className="tw-flex tw-flex-col tw-gap-6 tw-text-gray-600 tw-text-lg">
              <li className="tw-flex tw-flex-col">
                <span className="tw-text-sm tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider tw-mb-1">General Inquiries</span>
                <a href="mailto:info@dabangroup.com" className="tw-text-[#112D6B] tw-font-semibold hover:tw-text-blue-500 tw-transition-colors">info@dabangroup.com</a>
              </li>
              <li className="tw-flex tw-flex-col">
                <span className="tw-text-sm tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider tw-mb-1">Business</span>
                <a href="mailto:business@dabancompany.com" className="tw-text-[#112D6B] tw-font-semibold hover:tw-text-blue-500 tw-transition-colors">business@dabancompany.com</a>
              </li>
              <li className="tw-flex tw-flex-col">
                <span className="tw-text-sm tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider tw-mb-1">Sales</span>
                <a href="mailto:sales@dabancompany.com" className="tw-text-[#112D6B] tw-font-semibold hover:tw-text-blue-500 tw-transition-colors">sales@dabancompany.com</a>
              </li>
              <li className="tw-flex tw-flex-col">
                <span className="tw-text-sm tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider tw-mb-1">Support</span>
                <a href="mailto:support@dabancompany.com" className="tw-text-[#112D6B] tw-font-semibold hover:tw-text-blue-500 tw-transition-colors">support@dabancompany.com</a>
              </li>
              <li className="tw-flex tw-flex-col">
                <span className="tw-text-sm tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider tw-mb-1">Direct</span>
                <a href="mailto:mohammed@dabancompany.com" className="tw-text-[#112D6B] tw-font-semibold hover:tw-text-blue-500 tw-transition-colors">mohammed@dabancompany.com</a>
              </li>
            </ul>
          </motion.div>

          {/* Phones Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="tw-bg-white tw-p-10 tw-rounded-[32px] tw-shadow-2xl tw-shadow-[#112D6B]/5 tw-border tw-border-gray-100 tw-transition-transform hover:-tw-translate-y-2 tw-duration-300"
          >
            <div className="tw-w-14 tw-h-14 tw-bg-[#112D6B]/5 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#112D6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <h3 className="tw-text-3xl tw-text-[#112D6B] tw-font-bold tw-mb-8">Phones</h3>
            <ul className="tw-flex tw-flex-col tw-gap-8 tw-text-gray-600 tw-text-lg">
              <li className="tw-flex tw-flex-col">
                <span className="tw-text-sm tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider tw-mb-1">Head Office</span>
                <a href="tel:+9647504055084" className="tw-text-[#112D6B] tw-font-semibold tw-text-xl hover:tw-text-blue-500 tw-transition-colors">+964 750 405 5084</a>
              </li>
              <li className="tw-flex tw-flex-col">
                <span className="tw-text-sm tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider tw-mb-1">Asia</span>
                <a href="tel:+9647704492000" className="tw-text-[#112D6B] tw-font-semibold tw-text-xl hover:tw-text-blue-500 tw-transition-colors">+964 770 449 2000</a>
              </li>
            </ul>
          </motion.div>

          {/* Location Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:tw-col-span-2 tw-bg-white tw-p-10 tw-rounded-[32px] tw-shadow-2xl tw-shadow-[#112D6B]/5 tw-border tw-border-gray-100 tw-transition-transform hover:-tw-translate-y-2 tw-duration-300"
          >
            <div className="tw-w-14 tw-h-14 tw-bg-[#112D6B]/5 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#112D6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 className="tw-text-3xl tw-text-[#112D6B] tw-font-bold tw-mb-8">Location</h3>
            <div className="tw-flex tw-flex-col tw-mb-8">
              <span className="tw-text-sm tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider tw-mb-1">Erbil</span>
              <p className="tw-text-[#112D6B] tw-font-semibold tw-text-lg">English Village, No. 126<br/>Kurdistan Region, Iraq</p>
            </div>
            <div className="tw-rounded-2xl tw-overflow-hidden tw-border tw-border-gray-100 tw-shadow-inner tw-aspect-video md:tw-aspect-[21/9]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.1776994791557!2d43.9829993!3d36.1866388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722e0325f0bbd%3A0xa19f50bf8ea75c40!2sEnglish%20Village%2C%20Erbil!5e0!3m2!1sen!2siq!4v1700000000000!5m2!1sen!2siq" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function RelatedModels({ relatedProducts }) {
  if (!relatedProducts || relatedProducts.length === 0) return null;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="tw-relative tw-w-full tw-bg-white tw-pb-24 tw-px-6 md:tw-px-12 lg:tw-px-24 tw-z-10">
      <div className="tw-max-w-7xl tw-mx-auto tw-bg-white tw-rounded-[28px] tw-p-8 md:tw-p-12 tw-shadow-sm tw-border tw-border-[rgba(17,45,107,0.06)]">
  
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4"
        >
          <motion.span variants={itemVariants} className="tw-inline-block tw-text-6xl tw-mb-6 tw-text-[#214c9a] tw-font-bold tw-uppercase">
            More Related models 
          </motion.span>
          
          {relatedProducts.map((item) => (
            <motion.div variants={itemVariants} key={item.id} className="tw-w-full tw-h-full">
              <Link
                to={`/products/${item.id}`}
                className="tw-flex tw-flex-col tw-items-center tw-gap-4 tw-p-4 tw-rounded-[20px] tw-no-underline tw-border tw-border-[rgba(17,45,107,0.06)] tw-transition-all tw-duration-250 hover:-tw-translate-y-1 hover:tw-bg-[rgba(17,45,107,0.05)] hover:tw-border-[rgba(17,45,107,0.12)] tw-h-full"
              >
                <div className="lg:tw-size-[30rem] tw-size-[20rem] tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-p-2 tw-shrink-0">
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="tw-w-full tw-h-full tw-object-cover tw-rounded-lg"
                    />
                  ) : (
                    <img
                      src={item.detailImage || item.specificationImage}
                      alt={item.shortName}
                      className="tw-w-full tw-h-full tw-object-cover tw-rounded-lg"
                    />
                  )}
                </div>
                <div className="tw-flex tw-flex-col tw-gap-1 tw-text-center">
                  <span className="tw-text-[#112d6b] tw-text-base tw-font-extrabold">{item.shortName}</span>
                  <small className="tw-text-[rgba(17,45,107,0.64)] tw-text-[0.84rem] tw-tracking-[0.06em] tw-uppercase">
                    {item.navLabel}
                  </small>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

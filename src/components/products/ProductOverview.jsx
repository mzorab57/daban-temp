import React from 'react';

export default function ProductOverview({ description }) {
  if (!description) return null;
  
  return (
    <section className="tw-relative tw-w-full tw-bg-white tw-pt-24 tw-pb-12 tw-px-6 md:tw-px-12 lg:tw-px-24 tw-z-10 tw-border-t tw-border-[rgba(0,0,0,0.06)]">
      <div className="tw-max-w-6xl tw-mx-auto tw-bg-white tw-rounded-[28px] tw-p-8 md:tw-p-12 tw-shadow-sm tw-border tw-border-[rgba(17,45,107,0.06)] tw-text-center tw-flex tw-flex-col tw-items-center">
        <h2 className="tw-m-0 tw-text-[#112d6b] tw-font-[800] tw-leading-[0.95] tw-tracking-[-0.06em] tw-mb-8 tw-text-[clamp(2.5rem,13vw,4rem)] md:tw-text-[clamp(2.9rem,6vw,5rem)]">
          Overview
        </h2>
        <p className="tw-text-[#112d6b] tw-text-lg md:tw-text-2xl tw-leading-relaxed tw-font-medium tw-max-w-4xl">
          {description}
        </p>
      </div>
    </section>
  );
}

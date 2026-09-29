import React from "react";
import { Marquee } from "./marquee";

const equipmentList = [
  "Dynapac and Demag pavers",
  "Ammann rollers",
  "Caterpillar and Comatso bulldozers",
  "Atlas large excavators",
  "25-ton cranes",
  "Mercedes and MAN mixers",
  "Heavy trucks and tankers",
  "Grader (605) Comatso Track"
];

const firstRow = equipmentList.slice(0, equipmentList.length / 2);
const secondRow = equipmentList.slice(equipmentList.length / 2);

const EquipmentCard = ({ name }) => {
  return (
    <div className="tw-relative tw-h-full tw-w-40 md:tw-w-72 tw-cursor-pointer tw-overflow-hidden tw-rounded-xl md:tw-rounded-2xl tw-border-2 tw-border-[#f1f5f9] tw-bg-white tw-shadow-sm tw-p-4 md:tw-p-8 hover:tw-shadow-lg hover:tw-border-light-blue hover:tw--translate-y-1 tw-transition-all tw-duration-300">
      <div className="tw-flex tw-flex-col tw-h-full tw-justify-center tw-items-center tw-text-center">
        <h3 className="tw-text-deep-blue tw-font-bold tw-text-sm md:tw-text-xl tw-leading-tight">{name}</h3>
      </div>
    </div>
  );
};

export default function EquipmentMarquee() {
  return (
    <div className="tw-relative tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-overflow-hidden tw-py-24 tw-bg-white">
      <div className="tw-text-center tw-mb-12 tw-px-6 tw-z-10">
        <h2 className="tw-text-deep-blue tw-font-black tw-text-4xl md:tw-text-5xl tw-mb-4 tw-uppercase tw-tracking-tight">
          A Modern Equipment Fleet
        </h2>
        <p className="tw-text-dark-navy tw-text-lg md:tw-text-xl tw-font-medium tw-opacity-80 tw-max-w-2xl tw-mx-auto">
          Equipped with industry-leading machinery to deliver precision, scale, and excellence on every project.
        </p>
      </div>

      <Marquee pauseOnHover style={{ "--duration": "30s" }} className="tw-py-4">
        {firstRow.map((item, idx) => (
          <EquipmentCard key={`r1-${idx}`} name={item} />
        ))}
      </Marquee>
      
      <Marquee reverse pauseOnHover style={{ "--duration": "30s" }} className="tw-py-4">
        {secondRow.map((item, idx) => (
          <EquipmentCard key={`r2-${idx}`} name={item} />
        ))}
      </Marquee>

      <div className="tw-pointer-events-none tw-absolute tw-bottom-0 tw-top-32 tw-left-0 tw-w-1/3 tw-bg-gradient-to-r tw-from-white tw-to-transparent tw-z-10"></div>
      <div className="tw-pointer-events-none tw-absolute tw-bottom-0 tw-top-32 tw-right-0 tw-w-1/3 tw-bg-gradient-to-l tw-from-white tw-to-transparent tw-z-10"></div>
    </div>
  );
}

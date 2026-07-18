import { useEffect, useRef } from 'react';

export default function Flight() {
    const scrollAreaRef = useRef(null);
    const droneRef = useRef(null);
    const tankiRef = useRef(null);

useEffect(() => {
    const handleScroll = () => {
        if (!scrollAreaRef.current) return;
        const rect = scrollAreaRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = -rect.top / (rect.height - windowHeight);
        progress = Math.max(0, Math.min(1, progress));

        // Drone: 0.1 -> 0.4
        const droneStart = 0.1;
        const droneEnd = 0.4;
        let droneP = (progress - droneStart) / (droneEnd - droneStart);
        droneP = Math.max(0, Math.min(1, droneP));

        if (droneRef.current) {
            const yOffset = 100 - droneP * 100;
            droneRef.current.style.transform = `translateY(${yOffset}vh)`;
            droneRef.current.style.opacity = droneP;
        }

        // Tanki: تەنها کاتێک دەست پێدەکات کە drone بە تەواوی گەیشتووەتە شوێنی خۆی (droneP === 1)
        const tankiStart = droneEnd; // 0.4 - ڕاستەوخۆ دوای drone، بێ کاتی چاوەڕوانی زیادە
        const tankiEnd = 0.7;
        let tankiP = droneP >= 1
            ? (progress - tankiStart) / (tankiEnd - tankiStart)
            : 0;
        tankiP = Math.max(0, Math.min(1, tankiP));

        if (tankiRef.current) {
            const yOffset = 100 - tankiP * 100;
            tankiRef.current.style.transform = `translateY(${yOffset}vh)`;
            tankiRef.current.style.opacity = tankiP;
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <section id="flight" bg="light" className="section clip">
                <div className="container">
                    <div className="jet_scroll-area" ref={scrollAreaRef}>
                        <div className="jet-switcher">
                            <div className="jet-w">
                                <div className="jet-s">
                                    <div className="jet-s_top"></div>
                                    <div className="jet-s_title">
                                        <h2 className="h-hiden">Fly the Legacy</h2>
                                        <div data-char-reveal="true" className="h1">Main</div>
                                        <div className="jet-s_title_divider b-desktop"></div>
                                        <div className="jet-s_title_push current b-desktop"></div>
                                        <div data-char-reveal="true" className="h1 a-right">Product</div>
                                    </div>
                                    <div className="jet-s_bot">
                                        <div className="grid fill mobile">
                                            <div id="w-node-a343ec6b-a50f-98dd-8e13-a19b9f6cd6cb-9b251e8a" className="jet-s_bot_subtitle">
                                                <div className="unit-36"></div>
                                                <h3 data-line-reveal="true" className="p5">The best<br/>Our Partners</h3>
                                                <div className="unit-24 b-mobile"></div>
                                            </div>
                                            <div id="w-node-a343ec6b-a50f-98dd-8e13-a19b9f6cd6cf-9b251e8a" className="jet-s_bot_desc">
                                                <div data-div-reveal="true" className="jet-s_bot_desc_title">
                                                    <div className="line-h"></div>
                                                    <div className="unit-12"></div>
                                                    <div className="jet-s_bot_desc_title_w">
                                                        <div className="l1">Quality</div>
                                                        <div className="l1"><strong>3 products<br/></strong></div>
                                                    </div>
                                                </div>
                                                <div className="unit-36"></div>
                                                <div className="grid _6-columns">
                                                    <div id="w-node-a343ec6b-a50f-98dd-8e13-a19b9f6cd6db-9b251e8a" className="jet-s_bot_desc_w">
                                                        {/* <p data-line-reveal="true">
                                                          Partnering with globally recognized brands, Daban Holding delivers innovative solutions in firefighting, drone technology, and water storage systems—combining quality, performance, and reliability to meet the demands of modern industries.
                                                             </p> */}
                                                    </div>
                                                </div>
                                                <div className="unit-36 b-desktop"></div>
                                                <div className="unit-156 b-mobile"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="b-desktop">
                                <div className="spec-w">
                                    <div className="spec-s">
                                        <div className="unit-96 b-desktop"></div>
                                        <div className="unit-156 b-mobile"></div>
                                        <div className="line-h"></div>
                                        <div className="grid fill mobile">
                                            <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee478-9e2ee473" className="spec-s_left">
                                                <div className="spec-s_left_top">
                                                    <div className="unit-12"></div>
                                                    <div className="p5">New</div>
                                                    <div className="unit-24"></div>
                                                    <div className="h3">ZSDRONE</div>
                                                </div>

                                                <div className="h3 tw-hidden lg:tw-block tw-absolute  tw-left-[45%]  ">
                            SANY
                        </div>

                                                {/* botom chap */}
                                                <div className="spec-s_left_bot b-desktop">
                                                    <div className="spec-s_item">
                                                        <div className="line-h"></div>
                                                        <div className="unit-12"></div>
                                                        {/* <div className="jet-overview-cms w-dyn-list">
                                                            <div role="list" className="jet-overview-cms_list w-dyn-items">
                                                                <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee486-9e2ee473" role="listitem" className="jet-overview-cms_list_item w-dyn-item">
                                                                    <div className="jet-overview-card">
                                                                        <div className="l1-item">
                                                                            <div data-sqm="" className="l1 text-gray">Maximum operating range</div>
                                                                            <div data-sqm="" className="l1">11,263 km</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee486-9e2ee473" role="listitem" className="jet-overview-cms_list_item w-dyn-item">
                                                                    <div className="jet-overview-card">
                                                                        <div className="l1-item">
                                                                            <div data-sqm="" className="l1 text-gray">Speed</div>
                                                                            <div data-sqm="" className="l1">480 knots</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee486-9e2ee473" role="listitem" className="jet-overview-cms_list_item w-dyn-item">
                                                                    <div className="jet-overview-card">
                                                                        <div className="l1-item">
                                                                            <div data-sqm="" className="l1 text-gray">Passenger capacity</div>
                                                                            <div data-sqm="" className="l1">Up to 12 seats (+1 cabin server)</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee486-9e2ee473" role="listitem" className="jet-overview-cms_list_item w-dyn-item">
                                                                    <div className="jet-overview-card">
                                                                        <div className="l1-item">
                                                                            <div data-sqm="" className="l1 text-gray">Endurance</div>
                                                                            <div data-sqm="" className="l1">14 hrs (Maximum for european based aircraft)</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee486-9e2ee473" role="listitem" className="jet-overview-cms_list_item w-dyn-item">
                                                                    <div className="jet-overview-card">
                                                                        <div className="l1-item">
                                                                            <div data-sqm="" className="l1 text-gray">Baggage capacity</div>
                                                                            <div data-sqm="" className="l1">5.52 m3</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee486-9e2ee473" role="listitem" className="jet-overview-cms_list_item w-dyn-item">
                                                                    <div className="jet-overview-card">
                                                                        <div className="l1-item">
                                                                            <div data-sqm="" className="l1 text-gray">Cruising altitude</div>
                                                                            <div data-sqm="" className="l1">15,544 m</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                    <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee4a2-9e2ee473" className="spec-s_right_top_title">
                                                            <h2 className="p5">Quality Products</h2>
                                                        </div>
                                                    <div className="unit-24"></div>
                                                    <div className="spec-s_item">
                                                        <div className="line-h"></div>
                                                        <div className="unit-12"></div>
                                                      <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee4aa-9e2ee473" className="spec-s_right_top_desc_title">
                                                                <h3 className="l1">Trusted Global Partners</h3>
                                                            </div>
                                                        <div className="unit-12"></div>
                                                        <div className="jet-spec-cms w-dyn-list">
                                                            {/* <div role="list" className="jet-spec-cms_list w-dyn-items">
                                                                <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee495-9e2ee473" role="listitem" className="jet-spec-cms_list_item w-dyn-item">
                                                                    <div className="jet-spec-card">
                                                                        <div className="grid _6-columns">
                                                                            <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee498-9e2ee473" className="jet-spec-card_name">
                                                                                <div data-sqm="" className="l1">Cabin length</div>
                                                                            </div>
                                                                            <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee49a-9e2ee473" className="jet-spec-card_data">
                                                                                <div data-sqm="" className="l1">14.05 m2</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee495-9e2ee473" role="listitem" className="jet-spec-cms_list_item w-dyn-item">
                                                                    <div className="jet-spec-card">
                                                                        <div className="grid _6-columns">
                                                                            <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee498-9e2ee473" className="jet-spec-card_name">
                                                                                <div data-sqm="" className="l1">Cabin Width</div>
                                                                            </div>
                                                                            <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee49a-9e2ee473" className="jet-spec-card_data">
                                                                                <div data-sqm="" className="l1">2.49 m2</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee495-9e2ee473" role="listitem" className="jet-spec-cms_list_item w-dyn-item">
                                                                    <div className="jet-spec-card">
                                                                        <div className="grid _6-columns">
                                                                            <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee498-9e2ee473" className="jet-spec-card_name">
                                                                                <div data-sqm="" className="l1">Cabin Height</div>
                                                                            </div>
                                                                            <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee49a-9e2ee473" className="jet-spec-card_data">
                                                                                <div data-sqm="" className="l1">1.92 m2</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                            <p className="p7">Partnering with globally recognized brands, Daban Holding delivers innovative solutions in firefighting, drone technology, and water storage systems—combining quality, performance, and reliability to meet the demands of modern industries.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee49d-9e2ee473" className="spec-s_center"><img src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9baf6224ae03a0c240aad_img_jet-blue-print.avif" loading="lazy" decoding="async" alt="Blueprint layout of a private jet interior showing seats, a bed, tables, and sinks."
                                                    className="blueprint b-desktop" /><img src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9bcdd5313e51b91eb59c9_img_m_jet-blue-print.avif" loading="lazy" decoding="async" alt="Blueprint layout of a private jet interior showing seats, a bed, tables, and sinks."
                                                    className="blueprint b-mobile" />
                                                <div className="style-css w-embed">
                                                    <style dangerouslySetInnerHTML={{ __html: `
                                                        .blueprint {
                                                            -webkit-mask-image: url('https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d2848350faf5950722f429_27f88c3ef4cd2a080649df767f1949a6_blueprint-mask.webp');
                                                            mask-image: url('https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d2848350faf5950722f429_27f88c3ef4cd2a080649df767f1949a6_blueprint-mask.webp');
                                                            -webkit-mask-repeat: no-repeat;
                                                            mask-repeat: no-repeat;
                                                            /* Переменные для позиции и размера маски */
                                                            --mask-x: 50%;
                                                            --mask-y: 50%;
                                                            --mask-size: 100% 150%;
                                                            -webkit-mask-position: var(--mask-x) var(--mask-y);
                                                            mask-position: var(--mask-x) var(--mask-y);
                                                            -webkit-mask-size: var(--mask-size);
                                                            mask-size: var(--mask-size);
                                                        }
                                                    ` }} />
                                                </div>
                                            </div>

                                            <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee49e-9e2ee473" className="spec-s_right">
                                                <div className="spec-s_right_top">
                                                    <div className="line-h b-mobile"></div>
                                                    <div className="unit-12"></div>
                                                    <div className="grid _6-columns">
                                                        {/* <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee4a2-9e2ee473" className="spec-s_right_top_title">
                                                            <h2 className="p5">Quality Products</h2>
                                                        </div> */}
                                                    </div>
                                                    <div className="unit-96"></div>
                                                    <div className="spec-s_right_top_desc">
                                                        <div className="line-h"></div>
                                                        <div className="unit-12"></div>
                                                        <div className="">
                                                            {/* <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee4aa-9e2ee473" className="spec-s_right_top_desc_title">
                                                                <h3 className="l1">Trusted Global Partners</h3>
                                                            </div> */}
                                                             <div className="h3">CHARLATTE</div>
                                                        </div>
                                                        <div className="unit-36"></div>
                                                        <div className="grid _6-columns">
                                                            {/* <div id="w-node-_1b7ad1cd-848a-9004-75f6-f9919e2ee4af-9e2ee473" className="spec-s_right_top_desc_w">
                                                                <p className="p7">Partnering with globally recognized brands, Daban Holding delivers innovative solutions in firefighting, drone technology, and water storage systems—combining quality, performance, and reliability to meet the demands of modern industries.</p>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="spec-s_left_bot b-mobile">
                                                    <div className="unit-96"></div>
                                                    <div className="spec-s_item">
                                                        <div className="line-h"></div>
                                                        <div className="unit-12"></div>
                                                        <div className="jet-overview-cms w-dyn-list">
                                                            <div role="list" className="jet-overview-cms_list w-dyn-items">
                                                                <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b648-9e2ee473" role="listitem" className="jet-overview-cms_list_item w-dyn-item">
                                                                    <div className="jet-overview-card">
                                                                        <div className="l1-item">
                                                                            <div data-sqm="" className="l1 text-gray">Maximum operating range</div>
                                                                            <div data-sqm="" className="l1">11,263 km</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b648-9e2ee473" role="listitem" className="jet-overview-cms_list_item w-dyn-item">
                                                                    <div className="jet-overview-card">
                                                                        <div className="l1-item">
                                                                            <div data-sqm="" className="l1 text-gray">Speed</div>
                                                                            <div data-sqm="" className="l1">480 knots</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b648-9e2ee473" role="listitem" className="jet-overview-cms_list_item w-dyn-item">
                                                                    <div className="jet-overview-card">
                                                                        <div className="l1-item">
                                                                            <div data-sqm="" className="l1 text-gray">Passenger capacity</div>
                                                                            <div data-sqm="" className="l1">Up to 12 seats (+1 cabin server)</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b648-9e2ee473" role="listitem" className="jet-overview-cms_list_item w-dyn-item">
                                                                    <div className="jet-overview-card">
                                                                        <div className="l1-item">
                                                                            <div data-sqm="" className="l1 text-gray">Endurance</div>
                                                                            <div data-sqm="" className="l1">14 hrs (Maximum for european based aircraft)</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b648-9e2ee473" role="listitem" className="jet-overview-cms_list_item w-dyn-item">
                                                                    <div className="jet-overview-card">
                                                                        <div className="l1-item">
                                                                            <div data-sqm="" className="l1 text-gray">Baggage capacity</div>
                                                                            <div data-sqm="" className="l1">5.52 m3</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b648-9e2ee473" role="listitem" className="jet-overview-cms_list_item w-dyn-item">
                                                                    <div className="jet-overview-card">
                                                                        <div className="l1-item">
                                                                            <div data-sqm="" className="l1 text-gray">Cruising altitude</div>
                                                                            <div data-sqm="" className="l1">15,544 m</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="unit-24"></div>
                                                    <div className="spec-s_item">
                                                        <div className="line-h"></div>
                                                        <div className="unit-12"></div>
                                                        <div className="l1 text-gray">Specification</div>
                                                        <div className="unit-12"></div>
                                                        <div className="jet-spec-cms w-dyn-list">
                                                            <div role="list" className="jet-spec-cms_list w-dyn-items">
                                                                <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b657-9e2ee473" role="listitem" className="jet-spec-cms_list_item w-dyn-item">
                                                                    <div className="jet-spec-card">
                                                                        <div className="grid _6-columns">
                                                                            <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b65a-9e2ee473" className="jet-spec-card_name">
                                                                                <div data-sqm="" className="l1">Cabin length</div>
                                                                            </div>
                                                                            <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b65c-9e2ee473" className="jet-spec-card_data">
                                                                                <div data-sqm="" className="l1">14.05 m2</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b657-9e2ee473" role="listitem" className="jet-spec-cms_list_item w-dyn-item">
                                                                    <div className="jet-spec-card">
                                                                        <div className="grid _6-columns">
                                                                            <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b65a-9e2ee473" className="jet-spec-card_name">
                                                                                <div data-sqm="" className="l1">Cabin Width</div>
                                                                            </div>
                                                                            <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b65c-9e2ee473" className="jet-spec-card_data">
                                                                                <div data-sqm="" className="l1">2.49 m2</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b657-9e2ee473" role="listitem" className="jet-spec-cms_list_item w-dyn-item">
                                                                    <div className="jet-spec-card">
                                                                        <div className="grid _6-columns">
                                                                            <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b65a-9e2ee473" className="jet-spec-card_name">
                                                                                <div data-sqm="" className="l1">Cabin Height</div>
                                                                            </div>
                                                                            <div id="w-node-_401f9298-13bf-7604-31c5-69350f04b65c-9e2ee473" className="jet-spec-card_data">
                                                                                <div data-sqm="" className="l1">1.92 m2</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="unit-36 b-desktop"></div>
                                        <div className="unit-96 b-mobile"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="light-bg blueprint-grid-bg"></div>
                            <div className="style-css w-embed">
                                <style dangerouslySetInnerHTML={{ __html: `
                                    .jet-switcher {
                                        clip-path: inset(0 var(--_negative-units---96px) 0 var(--_negative-units---96px));
                                    }
                                ` }} />
                            </div>
                        </div>
 

                           {/* fire */}
                        <div className="jet fire-scale-responsive ">
                            <img src="/fire-fly.webp" loading="lazy" decoding="async" alt="Fire Truck" className="img-jet truck-shadow " />
                            <div className="style-css w-embed">
                                <style dangerouslySetInnerHTML={{ __html: `
                                     .fire-scale-responsive {
                                        scale: 1 !important;
                                    }
                                    @media (min-width: 768px) {
                                        .fire-scale-responsive {
                                            scale: 1.5 !important;
                                        }
                                    }
                                    @media (min-width: 1024px) {
                                        .fire-scale-responsive {
                                            scale: 1.3 !important;
                                        }
                                    }
                                    .truck-shadow {
                                        filter: drop-shadow(25px 35px 11px rgba(0,0,0,0.35));
                                    }
                                ` }} />
                            </div>
                        </div>
                       

                        {/* drone */}
                        <div  className="jet lg:tw-w-[55em] lg:tw-mt-96  drone-scale-responsive">
                            <img src="/drone-fly.webp" loading="lazy" decoding="async" alt="Fire Truck" className="img-jet truck-shadow" />
                            <div className="style-css w-embed">
                                <style dangerouslySetInnerHTML={{ __html: `
                                    .drone-scale-responsive {
                                        scale: 0.5 !important;
                                       
                                    }
                                    @media (min-width: 768px) {
                                        .drone-scale-responsive {
                                            scale: 1.5 !important;
                                        }
                                    }
                                    @media (min-width: 1024px) {
                                        .drone-scale-responsive {
                                            scale: 0.9 !important;
                                            
                                        }
                                    }
                                    .truck-shadow {
                                        filter: drop-shadow(25px 35px 11px rgba(0,0,0,0.35));
                                    }
                                ` }} />
                            </div>
                        </div>

                         {/* tanki */}
                         <div  className="jet lg:tw-w-[55em]  tanki-scale-responsive tw-absolute ">
                            <img src="/tanki-fly.webp" loading="lazy" decoding="async" alt="Tanki" className="img-jet truck-shadow" />
                            <div className="style-css w-embed">
                                <style dangerouslySetInnerHTML={{ __html: `
                                    .tanki-scale-responsive {
                                        scale: 0.45 !important;
                                        right: 0% !important; /* Adjust if needed to push it further right */
                                        top: 80% !important; /* Adjust if needed to push it further up */
                                       
                                    }
                                    @media (min-width: 768px) {
                                        .tanki-scale-responsive {
                                            scale: 1.5 !important;
                                        }
                                    }
                                    @media (min-width: 1024px) {
                                        .tanki-scale-responsive {
                                            scale: 1.5 !important;
                                            right: 2% !important;
                                            top: 66% !important; /* Adjust if needed to push it further up */
                                        }
                                    }
                                    .truck-shadow {
                                        filter: drop-shadow(25px 35px 11px rgba(0,0,0,0.35));
                                    }
                                ` }} />
                            </div>
                        </div>
                             
                        
                    </div>
                </div>
            </section>
  );
}

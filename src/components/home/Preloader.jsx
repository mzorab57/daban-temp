import React from 'react';

export default function Preloader() {
  return (
    <div preloader="" className="preloader bg-grad">
                <div className="preloader_c">
                    <div className="container">
                        <div className="grid _21-columns">
                            <div data-prevent-flicker="true" data-split-text="lines" data-reveal-text="preloader" id="w-node-eddf7e61-453a-f992-3d91-d4cca023add1-9b251e8a" className="preloader_info">
                                <div className="l1 text-light a-center">Daban Holding</div>
                                <div className="unit-12"></div>
                                <div className="p5 text-light a-center">Private jet charter worldwide</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div preloader-bg="" className="preloader_b">
                    <div className="preloader_bg_grad"></div>
                    <div className="style-css w-embed">
                        <style dangerouslySetInnerHTML={{ __html: `
                            .preloader_bg {
                                -webkit-mask-image: url('https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68b9c8b02b4d94941ab5dd65_8d74fa6a469abb5d06077c53b4b94ebd_globe-mask.webp');
                                mask-image: url('https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68b9c8b02b4d94941ab5dd65_8d74fa6a469abb5d06077c53b4b94ebd_globe-mask.webp');
                                -webkit-mask-repeat: no-repeat;
                                mask-repeat: no-repeat;
                                /* Переменные для позиции и размера маски */
                                --mask-x: 50%;
                                --mask-y: 0%;
                                --mask-size: 100% 200%;
                                -webkit-mask-position: var(--mask-x) var(--mask-y);
                                mask-position: var(--mask-x) var(--mask-y);
                                -webkit-mask-size: var(--mask-size);
                                mask-size: var(--mask-size);
                            }
                        ` }} />
                        
                    </div>
                </div>
                
            </div>
  );
}

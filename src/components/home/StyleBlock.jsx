import React from 'react';

export default function StyleBlock() {
  return (
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
  );
}

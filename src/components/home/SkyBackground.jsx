import React from 'react';

export default function SkyBackground() {
  return (
    <div className="sky-bg">
                    <div className="sky-bg_hero">
                        <div className="img-w">
                            <img alt="view from the airplane window" loading="eager" src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68bf31df0eb6b62331d8e35a_9557f7de34f540aa715092b1bcdbbf57_img_sky-hero.webp" className="img" /></div>
                        <div className="mountain-parallax-container">
                            <img id="piercing-mountain"  loading="eager" src="https://pub-8090965640ca4bd1b63bf23a3ab20377.r2.dev/object.webp" alt="Mountain" />
                        </div>
                        <div className="sky-bg_hero_clouds">
                            <div className="sky-bg_hero_clouds_list">
                                <div className="sky-bg_hero_clouds_list_item">
                                    <div className="img-w"><img alt="" loading="eager" src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68ee74b1f45fbfb23fb6405a_clouds.webp" className="img" /></div>
                                </div>
                                <div className="sky-bg_hero_clouds_list_item">
                                    <div className="img-w"><img alt="" loading="eager" src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68ee74b1f45fbfb23fb6405a_clouds.webp" className="img" /></div>
                                </div>
                            </div>
                            <div className="style-css w-embed">
                                <style dangerouslySetInnerHTML={{ __html: `
                                    .sky-bg_hero_clouds_list {
                                        position: absolute;
                                        white-space: nowrap;
                                        will-change: transform;
                                        animation: marquee 48s linear infinite reverse;
                                    }

                                    @keyframes marquee {
                                        from {
                                            transform: translateX(-50%);
                                        }
                                        to {
                                            transform: translateX(0%);
                                        }
                                    }
                                ` }} />
                            </div>
                        </div>
                        <div className="sky-bg_hero_grad-over"></div>
                    </div>
                    <div className="sky-bg_about">
                        <div className="img-w"><img alt="" loading="eager" src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68bf3a7535c381d724ba24f3_3d4cd5b30d8e5eb5ac2c6f3736aef35b_img_sky-about.avif" className="img fill _75-percent" /></div>
                        <div className="sky-bg_about_grad-over"></div>
                    </div>
                </div>
  );
}

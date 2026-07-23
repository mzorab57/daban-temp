import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const BENEFITS_DATA = [
    {
        id: 'Government',
        title: 'Government',
        description: 'Border Police Barriers, Construction of security barriers along the Kurdistan Region border.',
        image: './case/goverment.webp',
    },
    {
        id: 'Education',
        title: 'Education',
        description: 'Media School — Sulaimanyah, Full construction delivery of a modern media school building.',
        image: './case/media-school.webp',
    },
    {
        id: 'Telecom',
        title: 'Telecom',
        description: 'Asiacell Communication Towers, Manufacturing and installing aerial towers across Kurdistan Iraq.',
        image: './case/telecom.webp',
    },
    {
        id: 'Civil',
        title: 'Civil',
        description: 'Retaining Walls & Box Culverts, Heavy civil works including retaining structures and drainage.',
        image: './case/civil.webp',
    },

];

// ─── TEXT SECTION COMPONENT ──────────────────────────────────────────────────
function TextSection({ item, index, setActiveIndex, isMobile }) {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 85%", "end 15%"] 
    });

    useMotionValueEvent(scrollYProgress, "change", (val) => {
        if (val > 0.3 && val < 0.7) {
            setActiveIndex(index);
        }
    });

    const filter = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40]);

    return (
        <section
            ref={sectionRef}
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingRight: '2rem',
            }}
        >
            <motion.div
                style={{
                    filter,
                    opacity,
                    scale,
                    y,
                    willChange: 'transform, opacity, filter',
                    transformOrigin: 'left center',
                    padding: isMobile ? '1rem 0.2rem  1.15rem' : 0,
                    borderRadius: isMobile ? '14px' : 0,
                    background: isMobile
                        ? 'linear-gradient(135deg, rgba(255, 248, 240, 0.18), rgba(255, 248, 240, 0.06))'
                        : 'transparent',
                    backdropFilter: isMobile ? 'blur(14px)' : 'none',
                    WebkitBackdropFilter: isMobile ? 'blur(14px)' : 'none',
                    // border: isMobile ? '1px solid rgba(255, 255, 255, 0.18)' : 'none',
                    boxShadow: isMobile ? '0 18px 45px rgba(10, 20, 44, 0.16)' : 'none',
                }}
            >
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '600',
                    lineHeight: '1.1',
                    color: '#112D6B',
                    margin: isMobile ? '0 0 1rem 0' : '0 0 1.5rem 0',
                    letterSpacing: '-0.02em',
                }}>
                    {item.title}
                </h2>
                <p style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                    color: '#112D6B',
                    maxWidth: '480px',
                    lineHeight: '1.2',
                    fontWeight: '300',
                    borderLeft: '2px solid #d4c5a3',
                    paddingLeft: isMobile ? '1rem' : '1.5rem',
                    margin: 0,
                }}>
                    {item.description}
                </p>
            </motion.div>
        </section>
    );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function CaseStudy() {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const { scrollYProgress: globalScroll } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Fade effect bo Widget-akay mobile (Bo eway law sectiona darcwytawa wndabet)
    const widgetOpacity = useTransform(globalScroll, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const theme = {
        // bg: '#080808',
        textLight: '#e5e5e5',
        textMuted: '#444',
        accent: '#d4c5a3'
    };

    return (
        <div 
            ref={containerRef} 
            style={{ 
                backgroundColor: theme.bg, 
                color: theme.textLight,
                fontFamily: '"Manrope", sans-serif',
                position: 'relative', // Gring-a bo eway Wênaka la nawa bmanetawa
                display: 'flex',
                width: '100%'
            }}
        >
            {/* ─── MOBILE PROGRESS WIDGET ─── */}
            {isMobile && (
                <motion.div style={{
                    position: 'fixed', bottom: '30px', right: '30px', width: '60px', height: '60px',
                    zIndex: 100, backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '50%',
                    padding: '5px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
                    opacity: widgetOpacity // Fade in/out
                }}>
                    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                        <motion.circle 
                            cx="50" cy="50" r="40" fill="none" stroke={theme.accent} strokeWidth="8" 
                            strokeLinecap="round" pathLength="1"
                            style={{ pathLength: globalScroll }}
                        />
                    </svg>
                </motion.div>
            )}

            

            {/* ─── SCROLL CONTENT (Left Side Text) ─── */}
            <div style={{
                width: isMobile ? '100%' : '50%',
                paddingBottom: '20vh',
                position: 'relative',
                zIndex: 20,
                paddingLeft: isMobile ? '8vw' : '10vw',
                paddingRight: isMobile ? '8vw' : '0',
            }}>

                 <header style={{
                    height: isMobile ? '72vh' : '90vh',
                    display: 'flex',
                    alignItems: isMobile ? 'flex-end' : 'center',
                    paddingTop: isMobile ? '0' : 0,
                    paddingBottom: isMobile ? '8vh' : 0,
                 }}>
                    <div>
                        {/* <h1 style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '300', margin: 0, color: '#214C9A', opacity: 0.8 }}>
                            Daban Holding
                        </h1> */}
                        <h2 style={{
                            display: 'block',
                            width: '100%',
                            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
                            fontWeight: '800',
                            letterSpacing: '-0.02em',
                            color: '#112D6B',
                           
                            marginBottom: 0,
                            lineHeight: '0.95',
                            position: 'relative',
                            zIndex: 25,
                            borderRadius: '14px',
                              padding:  '1rem 0.2rem  1.15rem' ,
                             background: 
                         'linear-gradient(135deg, rgba(255, 248, 240, 0.18), rgba(255, 248, 240, 0.06))',
                    backdropFilter:  'blur(4px)' ,
                    WebkitBackdropFilter: 'blur(4px)' ,
                        }}>
                           Our Case <br /> Studies
                        </h2>
                        {/* <p 
                        style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                    color: '#112D6B',
                    maxWidth: '480px',
                    lineHeight: '1.7',
                    fontWeight: '300',
                    // borderLeft: '2px solid #d4c5a3',
                    // paddingLeft: '1.5rem',
                    margin: 0,
                }}
                        >A track record of delivering under partnership with Parsons, USACE, UN-Habitat, Asiacell, and Kurdistan municipalities.
                        </p> */}
                    </div>
                </header>
               

                {BENEFITS_DATA.map((item, i) => (
                    <TextSection key={item.id} item={item} index={i} setActiveIndex={setActiveIndex} isMobile={isMobile} />
                ))}

                
            </div>

            {/* ─── STICKY VISUALS (Right Side Images) ─── */}
            {/* 
               Gorankari Asasi: 
               La jyaty position: 'fixed', êsta dyxayna naw Absolute wrapper-ek 
               ta wênaka la dawai drêjayakay xoy nachet
            */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0, // Drêjayakay dakat ba qadar full sectionaka
                width: isMobile ? '100%' : '50%',
                zIndex: 10,
                pointerEvents: 'none',
            }}>
                {/* Viewport-i Sticky-yaka */}
                <div style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderLeft: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.05)',
                    opacity: isMobile ? 0.9 : 1,
                }}>
                    
                    {/* Desktop Vertical Progress Bar */}
                    {!isMobile && (
                        <motion.div style={{
                            position: 'absolute', left: '-1px', top: 0, width: '2px', height: '100%',
                            backgroundColor: theme.accent, transformOrigin: 'top', scaleY: globalScroll, zIndex: 20
                        }} />
                    )}

                    {/* Crossfading Images */}
                    <div style={{ position: 'relative', width: '90%', height: '70%', borderRadius: '16px', overflow: 'hidden' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -40, scale: 1.1 }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                style={{ position: 'absolute', inset: 0 }}
                            >
                                <img 
                                    src={BENEFITS_DATA[activeIndex].image} 
                                    alt={BENEFITS_DATA[activeIndex].title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17, 45, 107, 1) transparent)' }} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

        </div>
    );
}

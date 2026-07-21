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
        description: 'Retaining Walls & Box Culverts , Heavy civil works including retaining structures and drainage.',
        image: './case/civil.webp',
    },
];

// ─── MOBILE CARD COMPONENT ───────────────────────────────────
function MobileCard({ item, index, totalCount }) {
    const cardRef = useRef(null);
    
    // 1. ENTRY ANIMATION (Hatna nawawa bo mobile)
    const { scrollYProgress: entryProgress } = useScroll({
        target: cardRef,
        offset: ["start 95%", "start 10%"]
    });
    
    const entryScale = useTransform(entryProgress, [0, 1], [0.8, 1]);
    const entryOpacity = useTransform(entryProgress, [0, 1], [0, 1]);

    // 2. EXIT ANIMATION (Katêk card-i dway xoy det basarida)
    const { scrollYProgress: exitProgress } = useScroll({
        target: cardRef,
        offset: ["start start", "start -100%"]
    });

    const exitScale = useTransform(exitProgress, [0, 1], [1, 2.92]);
    const exitFilter = useTransform(exitProgress, [0, 1], ["brightness(1)", "brightness(0.3)"]);

    return (
        <div
            ref={cardRef}
            style={{
                position: 'sticky',
                top: 0,
                height: '100dvh',
                overflow: 'hidden',
            }}
        >
            {/* Wrapper bo Daxran (Exit) */}
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    transformOrigin: 'top center',
                    scale: exitScale,
                    filter: exitFilter,
                    willChange: 'transform, filter',
                }}
            >
                {/* Wrapper bo Hatna Nawawa (Entry) */}
                <motion.div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '40px 24px',
                        backgroundColor: '#ffffff',
                        scale: entryScale,
                        opacity: entryOpacity,
                        willChange: 'transform, opacity',
                        margin: '0 auto',
                        borderRadius: '24px',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h3 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.2rem)', fontWeight: '700', color: '#1a1a1a', margin: 0, textTransform: 'uppercase' }}>
                            {item.title}
                        </h3>
                        <span style={{ fontSize: '13px', color: '#888', fontWeight: '600', letterSpacing: '0.1em' }}>
                            {String(index + 1).padStart(2, '0')} / {String(totalCount).padStart(2, '0')}
                        </span>
                    </div>

                    <div style={{ width: '100%', height: '55vh', borderRadius: '24px', overflow: 'hidden', marginBottom: '24px', position: 'relative' }}>
                        <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#555', margin: 0, fontWeight: '500' }}>
                        {item.description}
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

// ─── DESKTOP COMPONENT ────────────────────────────────────────────────────────
function DesktopBenefits() {
    const wrapperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const N = BENEFITS_DATA.length;

    // 1. Scroll tracking bo barawpesh chuni image-akan w index
    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end end"]
    });

    // 2. Scroll tracking taybat bo hatna nawaway sectionaka (Tanha bo image yakam)
    const { scrollYProgress: sectionEntryProgress } = useScroll({
        target: wrapperRef,
        offset: ["start 85%", "start 10%"] 
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(N - 1, Math.max(0, Math.round(latest * (N - 1))));
        setActiveIndex(index);
    });

    return (
        <section ref={wrapperRef} style={{ height: `${N * 100}vh`, position: 'relative' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', overflow: 'hidden' }}>
                
                {/* ── LEFT PANEL ── */}
                <div style={{ width: '45%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5vw', boxSizing: 'border-box' }}>
                    <h2 className='tw-text-6xl lg:tw-mb-9 tw-mb-4 tw-text-deep-blue'>
                        Case Study
                    </h2>

                    <div style={{ position: 'relative', height: '180px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                style={{ position: 'absolute', inset: 0, willChange: 'opacity, transform' }}
                            >
                                <h3 className='tw-text-deep-blue' style={{ fontSize: '1.8rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px' }}>
                                    {BENEFITS_DATA[activeIndex].title}
                                </h3>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555', maxWidth: '480px', margin: 0, fontWeight: '500' }}>
                                    {BENEFITS_DATA[activeIndex].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '40px' }}>
                        <div className='mt-2' style={{ height: '2px', width: '60px', backgroundColor: 'rgba(0,0,0,0.1)', position: 'relative' }}>
                            <motion.div 
                                style={{ position: 'absolute', top: 0, left: 0, height: '100%', backgroundColor: '#1a1a1a', width: `${((activeIndex + 1) / N) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>
                </div>

                {/* ── RIGHT PANEL ── */}
                <div style={{ width: '55%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', paddingRight: '4vw' }}>
                    {BENEFITS_DATA.map((item, i) => {
                        const isFirst = i === 0;
                        const isLast = i === N - 1;
                        
                        // Xal-akani scroll bo diari krdni katakan
                        const enterStart = (i - 1) / (N - 1);
                        const enterEnd = i / (N - 1);
                        const exitStart = i / (N - 1);
                        const exitEnd = (i + 1) / (N - 1);

                        // ── ENTRY (Katêk dên bo naw screen) ──
                        // Hamo wênakan la scale 0.8 u opacity 0 wa dên!
                        const entryScale = useTransform(
                            isFirst ? sectionEntryProgress : scrollYProgress,
                            isFirst ? [0, 1] : [enterStart, enterEnd],
                            [0.8, 1]
                        );
                        
                        const entryOpacity = useTransform(
                            isFirst ? sectionEntryProgress : scrollYProgress,
                            isFirst ? [0, 1] : [enterStart, enterEnd],
                            [0, 1]
                        );
                        
                        const entryY = useTransform(
                            isFirst ? sectionEntryProgress : scrollYProgress,
                            isFirst ? [0, 1] : [enterStart, enterEnd],
                            [60, 0] // Kamêk ba narmy detasarawa ka rûn dabet
                        );

                        // ── EXIT (Katêk wênay dway xoy dadaposhet) ──
                        const exitScale = useTransform(
                            scrollYProgress,
                            isLast ? [0, 1] : [exitStart, exitEnd],
                            isLast ? [1, 1] : [1, 0.9]
                        );

                        const exitFilter = useTransform(
                            scrollYProgress,
                            isLast ? [0, 1] : [exitStart, exitEnd],
                            isLast ? ["brightness(1)", "brightness(1)"] : ["brightness(1)", "brightness(0.5)"]
                        );

                        return (
                            <motion.div
                                key={item.id}
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    maxWidth: '800px',
                                    scale: entryScale,
                                    opacity: entryOpacity,
                                    y: entryY,
                                    transformOrigin: 'center center',
                                    willChange: 'transform, opacity',
                                    zIndex: i, // Z-index gring-a bo awai nwekakan bkawna sarawa
                                }}
                            >
                                <motion.div
                                    style={{
                                        width: '100%', 
                                        height: '75vh', 
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        scale: exitScale,
                                        filter: exitFilter,
                                        transformOrigin: 'top center',
                                        boxShadow: '0 -20px 40px rgba(0,0,0,0.08)',
                                        willChange: 'transform, filter'
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Benefits() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile ? (
        <section id="benefits" className=''>
            <div style={{ padding: '32px 24px 8px' }}>
                <h2
                    className="tw-pb-10 tw-text-3xl tw-font-bold tw-text-deep-blue"
                    style={{ lineHeight: 0.95, margin: 0 }}
                >
                    Case Study
                </h2>
            </div>
            {BENEFITS_DATA.map((item, i) => (
                <MobileCard key={item.id} item={item} index={i} totalCount={BENEFITS_DATA.length} />
            ))}
        </section>
    ) : (
        <DesktopBenefits />
    );
}
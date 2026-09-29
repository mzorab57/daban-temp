import React, {useState, useRef} from "react";
import {motion, useMotionValue, AnimatePresence} from "framer-motion";
import { Link } from "react-router-dom";


const MENU_SLIDE_ANIMATION = {
	initial: {x: "calc(100% + 100px)"},
	enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
	exit: {
		x: "calc(100% + 100px)",
		transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
	},
};

const defaultNavItems = [
	{
		heading: "Home",
		href: "/",
	},
	{
		heading: "About",
		href: "/about",
	},
	{
		heading: "Services",
		href: "/services",
	},
	{
		heading: "Products",
		href: "#",
		subItems: [
			{ heading: "All Products", href: "/products" },
			{ heading: "TH600", href: "/products/th600" },
			{ heading: "EM15", href: "/products/em15" },
			{ heading: "EM135", href: "/products/em135" }
		]
	},
];

const CustomFooter = () => {
	return (
		<div className="tw-flex tw-w-full tw-text-sm tw-justify-center tw-gap-8 tw-text-black tw-px-10 md:tw-px-24 tw-py-8">
			<a href="#" className="hover:tw-underline" target="_blank" rel="noopener noreferrer">
				LinkedIn
			</a>
			<a href="#" className="hover:tw-underline" target="_blank" rel="noopener noreferrer">
				Facebook
			</a>
			<a href="#" className="hover:tw-underline" target="_blank" rel="noopener noreferrer">
				Instagram
			</a>
			<a href="#" className="hover:tw-underline" target="_blank" rel="noopener noreferrer">
				Contact
			</a>
		</div>
	);
};

const NavLink = ({
	heading,
	href,
	setIsActive,
	subItems
}) => {
	const ref = useRef(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const [isExpanded, setIsExpanded] = useState(false);

	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		x.set(mouseX / rect.width - 0.5);
		y.set(mouseY / rect.height - 0.5);
	};

	const handleClick = (e) => {
		if (href === "/") {
			e.preventDefault();
			e.stopPropagation();
			window.location.href = "/";
			return;
		}
		if (subItems) {
			e.preventDefault();
			setIsExpanded(!isExpanded);
		} else {
        	window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50);
			setIsActive(false);
		}
	};

	const handleSubClick = () => {
		window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50);
		setIsActive(false);
	};

	return (
		<div className="tw-border-b tw-border-black/30 tw-py-4 md:tw-py-8">
			<motion.div
				initial="initial"
				whileHover="whileHover"
				className="tw-group tw-relative tw-flex tw-items-center tw-justify-between tw-transition-colors tw-duration-500 tw-uppercase"
			>
				<Link onClick={handleClick} ref={ref} to={href} onMouseMove={handleMouseMove} className="tw-w-full tw-no-underline tw-flex tw-items-center tw-justify-between">
					<div className="tw-flex tw-flex-row tw-gap-2">
						<motion.span
							variants={{
								initial: {x: 0},
								whileHover: {x: 16},
							}}
							transition={{
								type: "spring",
								staggerChildren: 0.075,
								delayChildren: 0.25,
							}}
							className="tw-relative tw-z-10 tw-block tw-text-4xl tw-font-bold tw-text-black tw-transition-colors tw-duration-500 md:tw-text-4xl"
						>
							{heading.split("").map((letter, i) => {
								return (
									<motion.span
										key={i}
										variants={{
											initial: {x: 0},
											whileHover: {x: 8},
										}}
										transition={{type: "spring"}}
										className="tw-inline-block"
									>
										{letter === " " ? "\u00A0" : letter}
									</motion.span>
								);
							})}
						</motion.span>
					</div>
					{subItems && (
						<span className="tw-text-black tw-text-4xl tw-font-bold tw-mr-4">
							{isExpanded ? "−" : "+"}
						</span>
					)}
				</Link>
			</motion.div>
			
			<AnimatePresence>
				{subItems && isExpanded && (
					<motion.div 
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className="tw-overflow-hidden tw-flex tw-flex-col tw-gap-6 tw-mt-6 tw-pl-8"
					>
						{subItems.map((sub, idx) => (
							<motion.div 
								key={sub.href}
								initial="initial"
								whileHover="whileHover"
								className="tw-uppercase"
							>
								<Link onClick={handleSubClick} to={sub.href} className="tw-no-underline tw-text-black tw-flex tw-items-center tw-group">
									<motion.span
										variants={{
											initial: {x: 0},
											whileHover: {x: 10},
										}}
										transition={{ type: "spring", staggerChildren: 0.05 }}
										className="tw-text-3xl tw-font-bold tw-transition-colors tw-duration-300 md:tw-text-4xl group-hover:tw-text-light-blue"
									>
										{sub.heading.split("").map((letter, i) => (
											<motion.span
												key={i}
												variants={{
													initial: {x: 0},
													whileHover: {x: 8},
												}}
												transition={{type: "spring"}}
												className="tw-inline-block"
											>
												{letter === " " ? "\u00A0" : letter}
											</motion.span>
										))}
									</motion.span>
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const Curve = () => {
	const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
	const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

	const curve = {
		initial: {d: initialPath},
		enter: {
			d: targetPath,
			transition: {duration: 1, ease: [0.76, 0, 0.24, 1]},
		},
		exit: {
			d: initialPath,
			transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
		},
	};

	return (
		<svg
			className="tw-absolute tw-top-0 tw--left-[99px] tw-w-[100px] tw-stroke-none tw-h-full tw-hidden md:tw-block"
			style={{fill: "#ffffff"}}
		>
			<motion.path
				variants={curve}
				initial="initial"
				animate="enter"
				exit="exit"
			/>
		</svg>
	);
};

const CurvedNavbar = ({setIsActive, navItems, footer}) => {
	return (
		<motion.div
			variants={MENU_SLIDE_ANIMATION}
			initial="initial"
			animate="enter"
			exit="exit"
			className="tw-h-[100dvh] tw-w-screen tw-max-w-screen-sm tw-fixed tw-right-0 tw-top-0 tw-z-50 tw-bg-white tw-text-black"
		>
			<div className="tw-h-full tw-pt-20 tw-flex tw-flex-col tw-justify-between">
				<div className="tw-flex tw-flex-col tw-text-5xl tw-gap-3 tw-mt-0 tw-px-10 md:tw-px-24">
					<div className="tw-text-black tw-border-b tw-border-black/30 tw-uppercase tw-text-sm tw-mb-0 tw-pb-2">
						<p>Navigation</p>
					</div>
					<section className="tw-bg-transparent tw-mt-0">
						<div className="tw-mx-auto tw-max-w-7xl">
							{navItems.map((item, index) => {
								return (
									<NavLink
										key={item.href}
										{...item}
										setIsActive={setIsActive}
										index={index + 1}
									/>
								);
							})}
						</div>
					</section>
				</div>
				{footer}
			</div>
			<Curve />
            {/* Close button inside drawer for extra safety */}
            <div 
                onClick={() => setIsActive(false)}
                className="tw-absolute tw-top-5 tw-right-5 tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-cursor-pointer tw-z-[60]"
            >
                <div className="tw-relative tw-w-8 tw-h-6 tw-flex tw-flex-col tw-justify-center tw-items-center">
                    <span className="tw-block tw-h-1 tw-w-8 tw-bg-black tw-rotate-45 tw-absolute"></span>
                    <span className="tw-block tw-h-1 tw-w-8 tw-bg-black tw--rotate-45 tw-absolute"></span>
                </div>
            </div>
		</motion.div>
	);
};

const CurvedMenu = ({
	navItems = defaultNavItems,
	footer = <CustomFooter />,
}) => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<>
			<div className="tw-relative lg:tw-hidden tw-flex tw-items-center tw-justify-center">
				<div
					onClick={handleClick}
					className="tw-relative tw-z-[60] tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-cursor-pointer tw-bg-transparent"
				>
					<div className="tw-relative tw-w-8 tw-h-5 tw-flex tw-flex-col tw-justify-between tw-items-center">
						<span
							className={`tw-block tw-h-[2px] tw-w-full tw-transition-transform tw-duration-300 ${isActive ? "tw-bg-black tw-rotate-45 tw-translate-y-[9px]" : "tw-bg-[#112D6B]"}`}
						></span>
						<span
							className={`tw-block tw-h-[2px] tw-w-full tw-transition-opacity tw-duration-300 ${isActive ? "tw-opacity-0" : "tw-bg-[#112D6B]"}`}
						></span>
						<span
							className={`tw-block tw-h-[2px] tw-w-full tw-transition-transform tw-duration-300 ${isActive ? "tw-bg-black tw--rotate-45 tw--translate-y-[9px]" : "tw-bg-[#112D6B]"}`}
						></span>
					</div>
				</div>
			</div>

			<AnimatePresence mode="wait">
				{isActive && (
					<CurvedNavbar
						setIsActive={setIsActive}
						navItems={navItems}
						footer={footer}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default CurvedMenu;

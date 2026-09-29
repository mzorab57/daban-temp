const fs = require('fs');

let content = fs.readFileSync('src/components/ui/CurvedMenu.jsx', 'utf8');

const navItemsReplacement = `
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
`;

content = content.replace(/const defaultNavItems = \[[\s\S]*?\];/, navItemsReplacement.trim());

const navLinkReplacement = `
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
		if (subItems) {
			e.preventDefault();
			setIsExpanded(!isExpanded);
		} else {
        	window.scrollTo(0, 0);
			setIsActive(false);
		}
	};

	const handleSubClick = () => {
		window.scrollTo(0, 0);
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
										{letter === " " ? "\\u00A0" : letter}
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
												{letter === " " ? "\\u00A0" : letter}
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
`;

content = content.replace(/const NavLink = \(\{[\s\S]*?\}\) => \{[\s\S]*?return \([\s\S]*?	\);\n\};/, navLinkReplacement.trim());

fs.writeFileSync('src/components/ui/CurvedMenu.jsx', content);

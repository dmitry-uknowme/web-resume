import React from 'react';

interface ScrollLinkProps {
	children: React.ReactNode;
	to: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ children, to }) => {
	const clickHandler = (e: React.ChangeEvent<HTMLElement>) => {
		e.preventDefault();
		const w = window.pageYOffset;
		const hash = to;
		const t = document.querySelector(`.${hash}`)?.getBoundingClientRect().top;
		const V = 0.5;
		let start = null;
		const scrollStep = (time: number) => {
			if (start === null) start = time;
			var progress = time - start,
				r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
			window.scrollTo(0, r);
			if (r !== w + t) {
				requestAnimationFrame(scrollStep);
			} else {
				window.location.hash = hash;
			}
		};
		requestAnimationFrame(scrollStep);
	};

	return (
		<div className='scroll-link' onClick={clickHandler}>
			{children}
		</div>
	);
};

export default ScrollLink;

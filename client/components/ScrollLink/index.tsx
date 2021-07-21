import { useEffect } from 'react';
import useSection from '../../hooks/useSection';

interface ScrollLinkProps {
	children: React.ReactNode;
	to: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ children, to }) => {
	const currentSection = useSection();
	// console.log('sect', currentSection?.name);

	const scrollHandler = () => {
		let i = 0;
		requestAnimationFrame(() => {
			const scrollTimer: ReturnType<typeof setInterval> = setInterval(() => {
				console.log('sect', currentSection, to);
				if (currentSection?.name === to) {
					console.error('end');
					return clearInterval(scrollTimer);
				}
				window.scrollBy(0, i);
				i++;
			}, 100);
		});
	};

	return (
		<div className='scroll-link' onClick={scrollHandler}>
			{children}
		</div>
	);
};

export default ScrollLink;

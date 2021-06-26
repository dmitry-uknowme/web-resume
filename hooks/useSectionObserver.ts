import { useState, useEffect } from 'react';

const useSectionObserver = () => {
	const [currentSection, setCurrentSection] = useState<any>();
	useEffect(() => {
		const sections: HTMLElement[] = Array.from(document.querySelectorAll('section'));
		const observer: IntersectionObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.map(({ target, isIntersecting }) => {
					if (isIntersecting) {
						// console.log(target);
						setCurrentSection({ el: target, name: target.classList[0] });
						// observer.unobserve(target);
					}
				});
			},
			{ threshold: 0.8 }
		);
		sections.map((section) => {
			observer.observe(section);
		});
	}, []);

	return currentSection;
};

export default useSectionObserver;

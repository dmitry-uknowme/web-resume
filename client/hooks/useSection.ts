import { useState, useEffect } from 'react';

const useSection = () => {
	const [currentSection, setCurrentSection] = useState<any>();
	useEffect(() => {
		const sections: HTMLElement[] = Array.from(document.querySelectorAll('section'));
		const observer: IntersectionObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.map(({ target, isIntersecting }) => {
					if (isIntersecting) {
						setCurrentSection({ el: target, name: target.classList[0] });
						// observer.unobserve(target);
					}
				});
			},
			{ threshold: 0.7 }
		);
		sections.map((section) => observer.observe(section));
	}, []);

	return currentSection;
};

export default useSection;

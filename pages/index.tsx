import { useEffect } from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import SkillList from '../components/Skill/SkillList';
import { useState } from 'react';
import useSectionObserver from '../hooks/useSectionObserver';

const IndexPage = () => {
	const currentSection = useSectionObserver();
	console.log('section', currentSection);

	return (
		<div className='home'>
			<Intro />
			<About />
			<SkillList />
		</div>
	);
};

export default IndexPage;

//   let video = document.querySelector('.html5-main-video');
// 	console.log(video);
// 	let observer = new IntersectionObserver(
// 		() => {
// 			// если видео запущено
// 			if (!video.paused) {
// 				// приостанавливаем проигрывание
// 				video.pause();
// 				// если видео было запущено ранее (текущее время проигрывания > 0)
// 			} else if (video.currentTime != 0) {
// 				// продолжаем проигрывание
// 				video.play();
// 			}
// 		},
// 		{ threshold: 0.4 }
// 	);

// 	observer.observe(video);

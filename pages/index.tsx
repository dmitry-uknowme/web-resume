import Intro from '../components/Intro';
import About from '../components/About';
import SkillList from '../components/Skill/SkillList';
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

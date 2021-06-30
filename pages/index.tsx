import Intro from '../components/Intro';
import About from '../components/About';
import SkillList from '../components/Skill/SkillList';
import useSectionObserver from '../hooks/useSectionObserver';

const IndexPage = () => {
	return (
		<div className='home'>
			<Intro />
			<About />
			<SkillList />
		</div>
	);
};

export default IndexPage;

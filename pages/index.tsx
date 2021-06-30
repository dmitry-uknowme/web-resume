import Intro from '../components/Intro';
import About from '../components/About';
import SkillList from '../components/Skill/SkillList';
import Head from 'next/head';

const IndexPage = () => {
	return (
		<>
			<Head>
				<title>Dmitry - Web Developer</title>
				<meta name='description' content="Web developer's resume" />
				<meta name='robots' content='index, follow' />
				<meta name='keywords' content='resume, web, developer' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<div className='home'>
				<Intro />
				<About />
				<SkillList />
			</div>
		</>
	);
};

export default IndexPage;

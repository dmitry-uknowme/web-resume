import Intro from '../components/Intro';
import About from '../components/About';
import SkillList from '../components/Skill/SkillList';
import ProjectList from '../components/Project/ProjectList';
import Head from 'next/head';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import IProject from '../types/project';
import Cursor from '../components/Cursor';

interface IndexPageProps {
	projects: IProject[];
}

const IndexPage: React.FC<IndexPageProps> = ({ projects }) => {
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
				<Cursor />
				<Intro />
				<About />
				<SkillList />
				<ProjectList serverProjects={projects} />
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const { data } = await axios.get('http://localhost:9000/api/projects');
	return {
		props: {
			projects: data,
		},
	};
};

export default IndexPage;

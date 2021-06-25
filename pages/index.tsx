import Link from 'next/link';
import Intro from '../components/Intro';
import About from '../components/About';

const IndexPage = () => {
	return (
		<div className='home'>
			<Intro />
			<About />
		</div>
	);
};

export default IndexPage;

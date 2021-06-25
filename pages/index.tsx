import Link from 'next/link';
import Intro from '../components/Intro';
import About from '../components/About';
import styles from '../styles/home.module.sass';

const IndexPage = () => {
	return (
		<div className={styles.home}>
			<Intro />
			<About />
		</div>
	);
};

export default IndexPage;

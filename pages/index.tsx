import Link from 'next/link';
import Navbar from '../components/Navbar';
import About from '../components/About';
import styles from '../styles/home.module.sass';

const IndexPage = () => {
	return (
		<div className={styles.home}>
			<h1 className={styles.home__name}>Dmitry Bogatyrev</h1>
			<h2 className='home__position'>Front-end Developer</h2>
			<Navbar customStyles={{ marginTop: `${3}rem` }} />
			<About />
		</div>
	);
};

export default IndexPage;

import Navbar from '../Navbar';
import styles from './index.module.sass';

const Intro = () => {
	return (
		<section className={`${styles.intro}`}>
			<h1 className={styles.intro__name}>Dmitry Bogatyrev</h1>
			<h2 className='home__position'>Front-end Developer</h2>
			<Navbar customStyles={{ marginTop: `${3}rem` }} />
		</section>
	);
};

export default Intro;

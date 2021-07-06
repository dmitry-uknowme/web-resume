import Navbar from '../Navbar';
import ContactList from '../Contact/ContactList';
import styles from './index.module.sass';

const Intro = () => {
	return (
		<section className={`intro ${styles.intro}`}>
			{/* <h3>Contacts</h3> */}
			<ContactList />
			<h1 className={styles.intro__name}>Dmitry Bogatyrev</h1>
			<h2 className='home__position'>Front-end Developer</h2>
			<Navbar customStyles={{ marginTop: `${3}rem` }} />
		</section>
	);
};

export default Intro;

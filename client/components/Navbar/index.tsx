import Link from 'next/link';
import ScrollLink from '../ScrollLink';
import styles from './index.module.sass';

interface NavbarProps {
	customStyles?: any;
}

const Navbar: React.FC<NavbarProps> = ({ customStyles }) => {
	return (
		<nav className={styles.navbar} style={{ ...customStyles }}>
			{/* <Link href='#'> */}
			<ScrollLink to='about'>
				<div className={styles.navbar__link}>About me</div>
			</ScrollLink>

			{/* </Link> */}
			<ScrollLink to='skill-list'>
				<div className={styles.navbar__link}>Skills</div>
			</ScrollLink>
			<ScrollLink to='project-list'>
				<div className={styles.navbar__link}>Portfolio</div>
			</ScrollLink>
			{/* <Link href='#'>
				<div className={styles.navbar__link}>Work Expirience</div>
			</Link> */}
		</nav>
	);
};

export default Navbar;

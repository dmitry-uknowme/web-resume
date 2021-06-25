import Link from 'next/link';
import styles from './index.module.sass';

interface NavbarProps {
	customStyles?: any;
}

const Navbar: React.FC<NavbarProps> = ({ customStyles }) => {
	return (
		<nav className={styles.navbar} style={{ ...customStyles }}>
			<Link href='#'>
				<div className={styles.navbar__link}>About me</div>
			</Link>
			<Link href='#'>
				<div className={styles.navbar__link}>Skills</div>
			</Link>
			<Link href='#'>
				<div className={styles.navbar__link}>Portfolio</div>
			</Link>
			<Link href='#'>
				<div className={styles.navbar__link}>Work Expirience</div>
			</Link>
		</nav>
	);
};

export default Navbar;

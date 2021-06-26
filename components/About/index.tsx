import styles from './index.module.sass';
const About = () => {
	return (
		<section className={styles.about} style={{ backgroundImage: 'url(./photo.jpg)' }}>
			<div className={styles.about__overlay}></div>
			<div className={styles.about__content}>
				<h3 className={styles.about__title}>About me</h3>
			</div>
		</section>
	);
};

export default About;

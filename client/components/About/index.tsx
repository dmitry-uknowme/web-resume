import styles from './index.module.sass';
const About = () => {
	return (
		<section className={`about ${styles.about}`} style={{ backgroundImage: 'url(./photo.jpg)' }}>
			<div className={styles.about__overlay}></div>
			<div className={styles.about__content}>
				<h3 className={styles.about__title}>About me</h3>
				<p className={styles.about__text}>
					<p>Hi! my name is Dmitry and I am a Web developer with 2+ years experience.</p>
					<p>&#10003; I can make adaptive layout, I use SASS as a CSS preprocessor, I can do various CSS animations.</p>
					<p> &#10003; I can configure the project build (Gulp/Webpack).</p>
					<p>&#10003; I am confident in native JavaScript, and I also write freely in ReactJS using TypeScript.</p>
					<p>&#10003; Have experience writing back-end on NodeJS(ExpressJS, NestJS). Worked with Databases: MongoDB, MySQL, GraphQL.</p>
					<p>&#10003; I speak English at the B1 (Intermediate)level</p>
					<p>&#10003; I like to set myself difficult goals and reach them</p>
				</p>
			</div>
		</section>
	);
};

export default About;

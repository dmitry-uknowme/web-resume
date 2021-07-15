import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import styles from './index.module.sass';

SwiperCore.use([Navigation]);

const ProjectList = ({ serverProjects }) => {
	console.log('projects from db', serverProjects);
	return (
		<section className={styles.projectList}>
			<div className='section__title projectList__title'>Portfolio</div>

			<Swiper className={styles.projectList__slider} navigation>
				<SwiperSlide>
					<iframe className={styles.projectList__demo} src='https://new-dostupny.web.app/' title='Dostupny dom'></iframe>
				</SwiperSlide>
				<SwiperSlide>2</SwiperSlide>
				<SwiperSlide>3</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default ProjectList;

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import styles from './index.module.sass';

SwiperCore.use([Navigation]);

const ProjectList = () => {
	return (
		<section className={styles.projectList}>
			<div className='section__title projectList__title'>Portfolio</div>

			<Swiper navigation>
				<SwiperSlide>1</SwiperSlide>
				<SwiperSlide>2</SwiperSlide>
				<SwiperSlide>3</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default ProjectList;

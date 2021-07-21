import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import ProjectItem from './ProjectItem';
import styles from './index.module.sass';
import IProject from '../../types/project';

SwiperCore.use([Navigation]);

interface ProjectListProps {
	serverProjects: IProject[];
}

const ProjectList: React.FC<ProjectListProps> = ({ serverProjects }) => {
	return (
		<section className={`project-list ${styles.projectList}`}>
			<div className='section__title projectList__title'>Portfolio</div>
			<Swiper className={styles.projectList__slider} navigation>
				{serverProjects.map(({ _id, name, description, repoLink, demoLink }) => (
					<SwiperSlide key={_id}>
						<ProjectItem _id={_id} name={name} description={description} repoLink={repoLink} demoLink={demoLink} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default ProjectList;

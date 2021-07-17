import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import styles from './index.module.sass';
import IProject from '../../types/project';
import React from 'react';

SwiperCore.use([Navigation]);

interface ProjectListProps {
	serverProjects: IProject[];
}

const ProjectList: React.FC<ProjectListProps> = ({ serverProjects }) => {
	return (
		<section className={styles.projectList}>
			<div className='section__title projectList__title'>Portfolio</div>

			<Swiper className={styles.projectList__slider} navigation>
				{serverProjects.map(({ name, description, repoLink, demoLink }) => (
					<SwiperSlide>
						<div className='project'>
							<div className={styles.project__field}>
								<h2 className='project__key'>Project name: </h2> &nbsp;
								<p className={styles.project__value}>{name}</p>
							</div>
							<div className={styles.project__field}>
								<h2 className='project__key'>Description: </h2> &nbsp;
								<p className={styles.project__value}>{description}</p>
							</div>
							<div className={styles.project__field}>
								<h2 className='project__key'>Repo link: </h2> &nbsp;
								<a className={styles.project__value} href={repoLink} target='_blank' rel='noreferrer'>
									{repoLink ? repoLink.replace('https://', '').replace('http://', '') : ' - '}
								</a>
							</div>
							<div className={styles.project__field}>
								<h2 className='project__key'>Demo link: </h2> &nbsp;
								<a className={styles.project__value} href={demoLink} target='_blank' rel='noreferrer'>
									{demoLink ? demoLink.replace('https://', '').replace('http://', '') : ' - '}
								</a>
							</div>
						</div>
						<iframe className={styles.project__demo} src={demoLink} title='Dostupny dom'></iframe>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default ProjectList;

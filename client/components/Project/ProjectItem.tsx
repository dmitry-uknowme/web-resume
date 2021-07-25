import { useState, useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
import useSection from '../../hooks/useSection';
import IProject from '../../types/project';
import styles from './index.module.sass';

const ProjectItem: React.FC<IProject> = ({ _id, name, description, repoLink, demoLink }) => {
	const [currentDemoLink, setCurrentDemoLink] = useState<string>('');
	const currentSection = useSection();
	console.log('cur', currentSection);
	useEffect(() => {
		if (currentSection?.name === 'project-list' && demoLink && currentDemoLink !== '') {
			setCurrentDemoLink(demoLink);
		}
	}, [currentSection, demoLink, currentDemoLink]);
	return (
		<div className={styles.project}>
			<div className={styles.project__info}>
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
			<iframe className={styles.project__demo} src={currentDemoLink} title='Dostupny dom'></iframe>
		</div>
	);
};

export default ProjectItem;

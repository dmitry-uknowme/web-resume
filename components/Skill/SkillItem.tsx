import styles from './index.module.sass';

const SkillItem = () => {
	return (
		<svg className={styles.skillItem} viewBox='-10 -10 300 300'>
			<circle className='progress-circle__range' r='140' cx='140' cy='140' fill='#8EE499' fillOpacity='0' stroke='#3FB14F' strokeWidth='20'></circle>
			<g transform='translate(200,180)'>
				<path className='progress-circle__arrow' stroke='#fff' fill='#fff' fillOpacity='1' strokeWidth='3' d='M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z'></path>
			</g>
		</svg>
	);
};

export default SkillItem;

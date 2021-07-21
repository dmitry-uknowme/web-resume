import { useState, useEffect } from 'react';
import useSection from '../../hooks/useSection';
import styles from './index.module.sass';
import { ISkill } from './SkillList';

interface SkillItemProps extends ISkill {
	radius?: number;
	fillAnimation?: any;
}

const skillColors = [
	{ bgColor: 'rgba(255,0,0,0.1)', borderColor: '#C0392B' },
	{ bgColor: 'rgba(240,116,39,0.1)', borderColor: '#D35400' },
	{ bgColor: 'rgba(0,255,0,0.1)', borderColor: '#3FB14F' },
];

const SkillItem: React.FC<SkillItemProps> = ({ name, value, themes, maxValue, radius, fillAnimation }) => {
	const circleLength = 879.645943005142;

	const [skillLevel, setSkillLevel] = useState(skillColors[0]);

	// const getCircleLength = (radius: number | string): number => 2 * parseInt(radius) * Math.PI;
	const currentSection = useSection();
	useEffect(() => {
		if (currentSection?.name === 'skill-list') {
			fillAnimation(maxValue);
		}
	}, [currentSection, fillAnimation, maxValue]);

	useEffect(() => {
		const percent = 100 - (value / circleLength) * 100;
		if (percent < 50) {
			setSkillLevel(skillColors[0]);
		}
		if (percent >= 50 && percent < 80) {
			setSkillLevel(skillColors[1]);
		}
		if (percent >= 80) {
			setSkillLevel(skillColors[2]);
		}
	}, [value]);

	return (
		<div className={styles.skillItem}>
			<div className={styles.skillItem__circle}>
				<svg className='progress-circle' viewBox='-10 -10 300 300' width={100} height={100}>
					<circle
						className='progress-circle__range'
						r='140'
						cx='140'
						cy='140'
						fill={skillLevel.bgColor}
						fillOpacity='1'
						stroke={skillLevel.borderColor}
						strokeWidth='20'
						// onClick={(e) => console.log(e.target.getAttribute('stroke-dasharray'), e.target.r.baseVal.value)}
						strokeDasharray={879.645943005142}
						strokeDashoffset={value}></circle>
				</svg>
				<div className={styles.skillItem__value}>
					{(100 - (value / circleLength) * 100 - 1).toFixed(0) === '-1' ? (100 - (value / circleLength) * 100).toFixed(0) : (100 - (value / circleLength) * 100 - 1).toFixed(0)}
				</div>
			</div>
			<div className={styles.skillItem__info}>
				<img src={`http://localhost:9000/icon/${name.toLowerCase()}.svg`} width={100} height={100} className={styles.skillItem__img} alt={`${name.toLowerCase()} icon`} />
				<ul className={styles.skillItem__themes}>
					{themes?.map((theme) => (
						<li className={styles.skillItem__theme}>{theme.name}</li>
					))}
				</ul>
			</div>
			<div className={styles.skillItem__name}>{name}</div>
		</div>
	);
};

export default SkillItem;

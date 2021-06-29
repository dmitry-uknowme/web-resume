import { useState } from 'react';
import useSectionObserver from '../../hooks/useSectionObserver';
import styles from './index.module.sass';
import SkillItem from './SkillItem';

interface ISkill {
	value: number;
	maxValue: number;
}

const SkillList = () => {
	const circleLength = 879.645943005142;
	const [skills, setSkills] = useState<ISkill[]>([
		{ value: circleLength, maxValue: 80 },
		{ value: circleLength, maxValue: 30 },
		{ value: circleLength, maxValue: 50 },
	]);
	const runFillAnimation = (maxValue: number) => {
		const maxPercent = () => {
			if (maxValue >= 100) return 0;
			return 879.645943005142 - maxValue * 8.79645943005142;
		};
		let fillTimer = setInterval(() => {
			setSkills((state) => {
				const currId = state.findIndex((skill) => skill.maxValue === maxValue);

				if (state[currId].value <= maxPercent()) {
					clearInterval(fillTimer);
					return state;
				}
				return state.map((item, index) => {
					if (index !== currId) return item;
					return {
						...item,
						value: state[currId].value - 8.79645943005142,
					};
				});
			});
		}, 10);
	};

	return (
		<section className={`skill-list ${styles.skillList}`}>
			<h3 className={styles.skillList__title}>Skills</h3>
			<div className={styles.skillList__row}>
				{skills.map(({ value, maxValue }) => (
					<SkillItem value={value} maxValue={maxValue} radius={140} fillAnimation={runFillAnimation} />
				))}
			</div>
		</section>
	);
};

export default SkillList;

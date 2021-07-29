import { useState } from 'react';
import useSection from '../../hooks/useSection';
import styles from './index.module.sass';
import SkillItem from './SkillItem';

export interface ISkill {
	name: string;
	value: number;
	maxValue: number;
	themes?: { name: string; completed: true }[];
}

const SkillList = () => {
	const circleLength = 879.645943005142;
	const [skills, setSkills] = useState<ISkill[]>([
		{
			name: 'HTML',
			value: circleLength,
			maxValue: 80,
			themes: [
				{ name: 'Structure & Tags', completed: true },
				{ name: 'Classes & IDs', completed: true },
				{ name: 'Semantics', completed: true },
				{ name: 'Embedding stuff (audio, video etc.)', completed: true },
				{ name: 'Validating', completed: true },
				{ name: 'Responsiveness & Adaptiveness', completed: true },
			],
		},
		{
			name: 'CSS',
			value: circleLength,
			maxValue: 70,
			themes: [
				{ name: 'Selectors', completed: true },
				{ name: 'Images & Background', completed: true },
				{ name: 'Colors, Fonts, Lists, Tables', completed: true },
				{ name: 'Pseudo-classes & Pseudo-elements', completed: true },
				{ name: 'Displaying & Positioning', completed: true },
				{ name: 'Flexbox & Grid', completed: true },
				{ name: 'Preprocessors (SCSS, SASS, PostCSS)', completed: true },
				{ name: 'Frameworks (Bootstrap, MaterialUI)', completed: true },
				{ name: 'Responsive & Adaptive design', completed: true },
				{ name: 'Transitions & Animations', completed: true },
			],
		},
		{
			name: 'JavaScript',
			value: circleLength,
			maxValue: 50,
			themes: [
				{ name: 'Basics (Data types, Methods, Loops, Functions)', completed: true },
				{ name: 'DOM API (Events, Modifying HTML)', completed: true },
				{ name: 'Context & Prototype', completed: true },
				{ name: 'Recursion', completed: true },
				{ name: 'Closures', completed: true },
				{ name: 'Async actions (Promise, Async & Await, Event loop)', completed: true },
				{ name: 'Typescript', completed: true },
				{ name: 'Builders (Webpack, Gulp)', completed: true },
				{ name: 'Frameworks (ReactJS)', completed: true },
				{ name: 'NodeJS (ExpressJS, NestJS)', completed: true },
			],
		},
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
		<section className={`skill-list ${styles.skillList}`} id='skill-list'>
			<h3 className={styles.skillList__title}>Skills</h3>
			<div className={styles.skillList__row}>
				{skills.map(({ name, value, themes, maxValue }) => (
					<SkillItem key={name} name={name} value={value} themes={themes} maxValue={maxValue} radius={140} fillAnimation={runFillAnimation} />
				))}
			</div>
			<h4 className='skillList__subtitle'>Current rank: Junior Developer</h4>
		</section>
	);
};

export default SkillList;

import styles from './index.module.sass';
import SkillItem from './SkillItem';

const skills = [1, 20, 50];

const SkillList = () => {
	return (
		<section className={styles.skillList}>
			<h3 className={styles.skillList__title}>Skills</h3>
			<div className={styles.skillList__items}>
				{skills.map((skill) => (
					<SkillItem />
				))}
			</div>
		</section>
	);
};

export default SkillList;

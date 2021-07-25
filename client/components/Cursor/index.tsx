import { useState, useEffect } from 'react';
import styles from './index.module.sass';

const Cursor = () => {
	const [cursor, setCursor] = useState({ x: 0, y: 0 });
	const moveHandler = (e) => {
		setCursor((state) => ({ ...state, x: e.clientX, y: e.clientY }));
	};
	useEffect(() => {
		document.addEventListener('mousemove', moveHandler);
		return () => document.removeEventListener('mousemove', moveHandler);
	}, []);
	return <div className={styles.cursor} style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}></div>;
};

export default Cursor;

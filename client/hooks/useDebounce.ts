import React, { useRef, useCallback } from 'react';

// interface useDebounceProps {
// 	callback: () => any;
// 	delay: number;
// }

// const useDebounce: React.FC<useDebounceProps> = (callback, delay) => {
// 	const timer = useRef();
// 	const debouncedCallback = useCallback(() => {
// 		if (timer.current) clearTimeout(timer.current);
// 		timer?.current = setTimeout(() => {
// 			callback();
// 		}, delay);
// 	}, [callback, delay]);

// 	return debouncedCallback;
// };

// export default useDebounce;

const useDebounce = (callback, delay) => {
	const timer = useRef();

	const debouncedCallback = useCallback(
		(...args) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}
			timer.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay]
	);

	return debouncedCallback;
};

export default useDebounce;

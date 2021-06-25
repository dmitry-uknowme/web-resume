import { AppProps } from 'next/app';
import '../styles/index.sass';

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<div className='app'>
			<Component {...pageProps} />
		</div>
	);
};

export default WrappedApp;

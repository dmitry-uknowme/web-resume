import { AppProps } from 'next/app';
import '../styles/index.sass';
// import 'swiper/swiper.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<div className='app'>
			<Component {...pageProps} />
		</div>
	);
};

export default WrappedApp;

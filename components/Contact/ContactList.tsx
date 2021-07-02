import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import VkIcon from '../../public/vk.svg';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.sass';

const ContactList = () => {
	return (
		<div className={styles.contactList}>
			<Link href='https://vk.com/1dimasvk1'>
				<a className={`${styles.contactItem} ${styles._vk}`}>
					{/* <Image src='/vk.svg' width={40} height={40} /> */}
					<VkIcon className={`${styles.contactItem__icon} ${styles._vk}`} />
					<div className={styles.contactItem__label}>Vkontakte</div>
				</a>
			</Link>
			<Link href='tg://resolve?domain=dimon24na7'>
				<a className={`${styles.contactItem} ${styles._telegram}`}>
					<TelegramIcon className={`${styles.contactItem__icon} ${styles._telegram}`} style={{ position: 'relative', right: '0.1em' }} />
					<div className={styles.contactItem__label}>Telegram</div>
				</a>
			</Link>

			<Link href='https://api.whatsapp.com/send/?phone=79273338310&text=Привет+Дмитрий%2C+я+менеджер компании'>
				<a className={`${styles.contactItem} ${styles._whatsapp}`}>
					<WhatsAppIcon className={`${styles.contactItem__icon} ${styles._whatsapp}`} />
					<div className={styles.contactItem__label}>Whatsapp</div>
				</a>
			</Link>
			<Link href='https://github.com/dmitry-uknowme'>
				<a className={`${styles.contactItem} ${styles._github}`}>
					<GitHubIcon className={`${styles.contactItem__icon} ${styles._github}`} />
					<div className={styles.contactItem__label}>Github</div>
				</a>
			</Link>
		</div>
	);
};

export default ContactList;

import CallIcon from '@material-ui/icons/Call';
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
			{/* <a className={`${styles.contactItem} `} href='tel:79273338310' target='_blank'>
				<CallIcon className={`${styles.contactItem__icon}`} />
				<div className={styles.contactItem__label}>Phone number</div>
			</a> */}
			<a className={`${styles.contactItem} ${styles._vk}`} href='https://vk.me/1dimasvk1' target='_blank'>
				<VkIcon className={`${styles.contactItem__icon} ${styles._vk}`} />
				<div className={styles.contactItem__label}>Vkontakte</div>
			</a>

			<a className={`${styles.contactItem} ${styles._telegram}`} href='tg://resolve?domain=dimon24na7' target='_blank'>
				<TelegramIcon className={`${styles.contactItem__icon} ${styles._telegram}`} style={{ position: 'relative', right: '0.1em' }} />
				<div className={styles.contactItem__label}>Telegram</div>
			</a>

			<a className={`${styles.contactItem} ${styles._whatsapp}`} href='https://api.whatsapp.com/send/?phone=79273338310&text=Привет+Дмитрий%2C+я+менеджер компании' target='_blank'>
				<WhatsAppIcon className={`${styles.contactItem__icon} ${styles._whatsapp}`} />
				<div className={styles.contactItem__label}>Whatsapp</div>
			</a>

			<a className={`${styles.contactItem} ${styles._github}`} href='https://github.com/dmitry-uknowme' target='_blank'>
				<GitHubIcon className={`${styles.contactItem__icon} ${styles._github}`} />
				<div className={styles.contactItem__label}>Github</div>
			</a>
		</div>
	);
};

export default ContactList;

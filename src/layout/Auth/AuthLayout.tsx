import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';

export function AuthLayout() {
	return <div className={styles['layout']}>
		<div className={styles['logo']}>
			<img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Логотип компании" />
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>;
}
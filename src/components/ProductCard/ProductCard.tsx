import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function ProductCard(props: ProductCardProps) {
	const dispatch = useDispatch<AppDispath>();

	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(props.id));
	};

	const imageUrl = (props.id >= 1 && props.id <= 6) ? `${import.meta.env.BASE_URL}images/food/food${props.id}.jpg` : (props.image || `${import.meta.env.BASE_URL}images/food/food1.jpg`);

	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{ backgroundImage: `url('${imageUrl}')` }}>
					<div className={styles['price']}>
						{props.price}&nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-cart']} onClick={add}>
						<img src={`${import.meta.env.BASE_URL}cart-button-icon.svg`} alt="Добавить в корзину" />
					</button>
					<div className={styles['rating']}>
						{props.rating}&nbsp;
						<img src={`${import.meta.env.BASE_URL}star-icon.svg`} alt="Иконка звезды" />
					</div>
				</div>
				<div className={styles['footer']}>
					<div className={styles['title']}>{props.name}</div>
					<div className={styles['description']}>{props.description}</div>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;

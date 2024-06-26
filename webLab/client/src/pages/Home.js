import React from 'react';
import '../css/Home.css'
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
			<div>
				<div className='BodyForMain'>
					<h2 className='Title-welcome'>Добро пожаловать в наш магазин!</h2>
					<div className='Advantages'>
						<div className='Advantage'>
							<p>
								<b className='Title-adv'>
									Широкий ассортимент стильной одежды:
								</b>{' '}
								<br></br>
								Наши полки заполнены последними трендами моды, предлагая
								огромный выбор стилей, от повседневной одежды до вечерних
								нарядов.
							</p>
						</div>
						<div className='Advantage'>
							<p>
								<b className='Title-adv'>Эксклюзивные коллекции:</b> <br></br>
								Мы работаем напрямую с дизайнерами, чтобы предоставить вам
								уникальные коллекции, которые недоступны в других магазинах. Вы
								будете выглядеть стильно и оригинальн
							</p>
						</div>
						<div className='Advantage'>
							<p>
								<b className='Title-adv'>Высокое качество материалов:</b>{' '}
								<br></br>
								Мы уделяем особое внимание качеству тканей и пошиву. Вся наша
								одежда проходит тщательный отбор, чтобы гарантировать долгий
								срок службы и комфорт для вас.
							</p>
						</div>
						<div className='Advantage'>
							<p>
								<b className='Title-adv'>Гарантия удовлетворенности:</b>{' '}
								<br></br>
								Мы уверены в качестве нашей продукции. Если что-то не устроит
								вас в вашем заказе, мы гарантируем возможность возврата или
								обмена товара в течение определенного периода времени.
							</p>
						</div>
					</div>
				</div>
			</div>
		)
};

export default Home;
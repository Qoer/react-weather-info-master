import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import s from './AboutPopup.module.scss'
import './swiper.css'
import Image1 from '../../assets/images/screen1.jpeg'
import Image2 from '../../assets/images/screen2.jpeg'

export const AboutPopup = ({ click1, setClick1 }) => {
	return (
		<div
			style={click1 === 'block' ? { display: 'block' } : { display: 'none' }}
			className={s.test}
		>
			<div className={s.blur}></div>
			<div className={s.popup}>
				<div className={s.aboutText}>
					<span>Дисциплина: "Интернет-технологии"</span>
				</div>
				<div className={s.blockText}>
					<span>Лабораторная работа 1</span>
					<p>
						Вся работа проводится в системе разработки программ с открытым кодом
						- GitHub. <br /> В рамках первой лабораторной работы: <br />
						&nbsp;&nbsp;&nbsp;&nbsp;1) Была произведена регистрация в GitHub.{' '}
						<br /> &nbsp;&nbsp;&nbsp;&nbsp;2) Был создан личный репозиторий для
						сохранения результатов выполнения лабораторных работ. <br />{' '}
						&nbsp;&nbsp;&nbsp;&nbsp;3) Был создан файл readme.md в личном
						репозитории с бланком отчета о лабораторных работах.
					</p>
				</div>
				<div className={s.blockText}>
					<span>Лабораторная работа 2</span>
					<p>
						В рамках проекта планируется разработать веб приложение. Данный
						сервис предоставляет актуальную информацию о погоде. Интерфейс
						понятен и прост т.к. выполнен в минималистичном стиле. Отсутствие
						новостных блоков и прочей избыточной инофрмации помогает быстро и
						легко ориентироваться на сайте. Данные на сайте обновляются каждые 3
						часа. Данный сервис предоставляет следующий функционал: <br />
						&nbsp;&nbsp;&nbsp;&nbsp;1) Величина атмосферного давления. <br />{' '}
						&nbsp;&nbsp;&nbsp;&nbsp;2) Направление и скорость ветра. <br />{' '}
						&nbsp;&nbsp;&nbsp;&nbsp;3) Осадки. <br />
						&nbsp;&nbsp;&nbsp;&nbsp;4) Прогноз погоды на неделю/10 дней/на
						месяц.
					</p>
				</div>
				<div className={s.blockText}>
					<span>Лабораторная работа 3</span>
					<p>
						В рамках третьей лабораторной работы: <br /> <b>Цель работы</b> -
						настройка коммутаторов и маршрутизаторов для осуществления
						работоспособности локальной сети. <br />
						В рамках достижения данной цели были выполнены следующие шаги:
						<br /> &nbsp;&nbsp;&nbsp;&nbsp;1) В эмуляторе была построена
						топология локальной сети, состоящей из четырех серверов (один из них
						DNS). На сервере public имеется web-страница с проектом REACT
						WEATHER.io. <br /> &nbsp;&nbsp;&nbsp;&nbsp;2) К серверам был
						настроен разграниченный доступ по трем протоколам (http, dns, icmp).{' '}
						<br /> Между терминальными устройствами была настроена динамическая
						маршрутизация по протоколу ospf. <br />{' '}
						&nbsp;&nbsp;&nbsp;&nbsp;3)Компьютеры были распределены в разные vlan
						сети, которым был задан разный приоритет доступа. <br />{' '}
						&nbsp;&nbsp;&nbsp;&nbsp;4)Была проверена работоспособность сервера с
						web-страницей проекта посредством отправления dns запроса с ПК1 на
						сервер public.
					</p>
					<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
						<SwiperSlide>
							<img src={Image1} alt='screen1' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={Image2} alt='screen2' />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className={s.blockText}>
					Подготовлен{' '}
					<a
						href='https://github.com/Qoer/wheser/wiki/Weather-team'
						target='_blank'
						rel='noreferrer'
					>
						отчет
					</a>{' '}
					о выполнении работы в программе Cico Packet Tracer
				</div>
				<div className={s.close} onClick={() => setClick1('none')}>
					<GlobalSvgSelector id='close' />
				</div>
			</div>
		</div>
	)
}

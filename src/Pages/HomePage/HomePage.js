import React, { Component } from 'react'
// import css from './HomePage.module.scss'
import VideoBanner from 'Pages/HomePage/VideoBanner/VideoBanner'
import Services from 'Pages/HomePage/Services/Services'
import ReviewBanner from 'Pages/HomePage/ReviewBanner/ReviewBanner'
import SliderDoctors from 'Pages/HomePage/SliderDoctors/SliderDoctors'
import TestBanner from 'Pages/HomePage/TestBanner/TestBanner'
import About from 'Pages/HomePage/About/About'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.homeData = {
      siteMainCaption: 'Стоматологическая клиника Patterson Dental',
      videoBanner: {
        top: {
          slogan: 'Patterson Dental&nbsp;&mdash;<br>качественная стоматология<br>для Вас',
          previewLabel: 'Посмотрите видео о клинике',
          modalVideo: 'demo_video_1920.mp4',
          modalVideoPreview: 'video__preview.jpg',
        },
        bottom: {
          sloganAdaptive: 'Стоматология для всех',
          sloganDesktop: 'Современная<br>стоматология<br>для всех',
          backgroundMobile: 'bg__video-banner@mobile.jpg',
          backgroundTablet: 'bg__video-banner@tablet.jpg',
          descriptor: 'Новейшее оборудование, опытные доктора, система внутреннего контроля качества услуг',
          videoBg: 'demo_video_1920_2.mp4'
        }
      },
      services: {
        title: 'Услуги',
        list: [
          {
            category: 'Стоматологическое лечение',
            sublist: [
              {
                text: 'Группа 1'
              },
              {
                text: 'Лечение каналов под микроскопом (пульпит, периодонтит)'
              },
              {
                text: 'Лечение кариеса'
              },
              {
                text: 'Лечение каналов под микроскопом (пульпит, периодонтит)'
              },
              {
                text: 'А это очень-очень длинная строка для тестирования компонента на' +
                  ' переполнение контентом'
              },
            ]
          },
          {
            category: 'Косметическая стоматология',
            sublist: [
              {
                text: 'Группа 2'
              },
              {
                text: 'Лечение каналов под микроскопом (пульпит, периодонтит)'
              },
              {
                text: 'Лечение кариеса'
              },
              {
                text: 'Лечение каналов под микроскопом (пульпит, периодонтит)'
              },
              {
                text: 'Лечение кариеса'
              },
            ]
          },
          {
            category: 'Детская стоматология',
            sublist: [
              {
                text: 'Группа 3'
              },
              {
                text: 'Лечение каналов под микроскопом (пульпит, периодонтит)'
              },
              {
                text: 'Лечение кариеса'
              },
              {
                text: 'Лечение каналов под микроскопом (пульпит, периодонтит)'
              },
              {
                text: 'Лечение кариеса'
              },
            ]
          },
        ],
        ads: [
          {
            type: 'teeth',
            url: '/',
            color: '#f4785d',
            duration: 'Акция до 24 января',
            title: 'Керамические виниры',
            price: 'от <span>20 000</span> рублей'
          },
          {
            type: 'implant-single',
            url: '/',
            color: '#c58ddf',
            duration: 'Акция до 24 января',
            title: 'Имплант с&nbsp;установкой',
            price: 'от <span>95 000</span> рублей'
          },
          {
            type: 'implants-jaw',
            url: '/',
            color: '#c58ddf',
            duration: 'Акция до 24 января',
            title: 'Все зубы сразу «под ключ»',
            price: 'от <span>120 000</span> рублей'
          },
          {
            type: 'implant-single',
            url: '/',
            color: '#7486e6',
            duration: 'Акция до 24 января',
            title: 'Имплант с&nbsp;установкой',
            price: 'от <span>95 000</span> рублей'
          },
        ]
      },
      reviewBanner: {
        bgImages: {
          mobile: 'review-banner__bg@mobile.jpg',
          tablet: 'review-banner__bg@tablet.jpg',
          desktop: 'review-banner__bg@desktop.jpg'
        },
        quote: 'Если вы&nbsp;боитесь стоматолога, это то&nbsp;место, куда нужно идти, потому что' +
          ' команда здесь делает все возможное, чтобы вы&nbsp;чувствовали себя комфортно и&nbsp;уютно',
        author: 'Наталья Ткач, 11&nbsp;августа 2019'
      },
      sliderDoctors: {
        title: 'Врачи',
        list: [
          {
            url: '/doctor',
            name: 'Смолов Виктор Николаевич 1',
            expertise: 'Стоматолог-терапевт',
            address: 'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
            photo: 'slider-doctors__photo.png',
            quote: 'Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения с&nbsp;нашими маленькими пациентами.'
          },
          {
            url: '/',
            name: 'Алабердыев Сулейман Пантелеймонович',
            expertise: 'Стоматолог-терапевт',
            address: 'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
            photo: 'slider-doctors__photo.png',
            quote: 'Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения' +
              ' с&nbsp;нашими маленькими пациентами. Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения с&nbsp;нашими маленькими пациентами.'
          },
          {
            url: '/',
            name: 'Смолов Виктор Николаевич 3',
            expertise: 'Стоматолог-терапевт',
            address: 'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
            photo: 'slider-doctors__photo.png',
            quote: 'Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения с&nbsp;нашими маленькими пациентами.'
          },
          {
            url: '/',
            name: 'Смолов Виктор Николаевич 4',
            expertise: 'Стоматолог-терапевт',
            address: 'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
            photo: 'slider-doctors__photo.png',
            quote: 'Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения с&nbsp;нашими маленькими пациентами.'
          },
          {
            url: '/',
            name: 'Смолов Виктор Николаевич 5',
            expertise: 'Стоматолог-терапевт',
            address: 'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
            photo: 'slider-doctors__photo.png',
            quote: 'Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения с&nbsp;нашими маленькими пациентами.'
          },
        ]
      },
      testBanner: {
        title: 'Не&nbsp;знаете, какая услуга нужна?',
        descriptor: 'Пройдите тест, ответив на&nbsp;несколько вопросов'
      },
      about: {
        title: 'О клинике',
        descriptor: 'Наших специалистов отличает большой опыт работы и&nbsp;хорошее образование.' +
          ' Кроме того, они постоянно повышают свою квалификацию, проходя обучение и&nbsp;стажировки как в&nbsp;России, так и&nbsp;за&nbsp;рубежом.',
        feature: {
          subtitle: 'Безопасность',
          descriptor: '<p>Важнейшими принципами нашей работы являются сохранение зубов, полная безболезненность, инфекционная безопасность и&nbsp;медицинская гарантия всех лечебно-диагностических манипуляций</p><p>Отдельный стерилизационный кабинет в&nbsp;автоклавами класса&nbsp;В (самый высокий класс стерилизации). Мы&nbsp;используем в&nbsp;работе изделия однократного применения. Все применяемые медикаменты сертифицированы и&nbsp;любой документ по&nbsp;сертификации может быть предоставлен по&nbsp;требованию.</p>'
        },
        offices: {
          subtitle: 'Наши филиалы',
          list: [
            'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
            'Москва, ул. Беговая 3&nbsp;ст.1',
            'Москва, ул. Вилиса Лациса 17&nbsp;к.&nbsp;1'
          ]
        },
        map: {
          markers: [
            [55.822276, 37.638983],
            [55.854733, 37.424750],
            [55.885560, 37.644781]
          ],
          center: [55.854481, 37.563757],
          zoom: 10
        }
      }
    }
  }

  render () {
    return (
      <main>
        <h1 className='visuallyHidden'>
          { this.homeData.siteMainCaption }
        </h1>
        <VideoBanner {...this.homeData.videoBanner} />
        <Services {...this.homeData.services} />
        <ReviewBanner {...this.homeData.reviewBanner} />
        <SliderDoctors {...this.homeData.sliderDoctors} />
        <TestBanner {...this.homeData.testBanner} />
        <About {...this.homeData.about} />
      </main>
    )
  }
}

export default HomePage
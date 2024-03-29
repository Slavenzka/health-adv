import React from 'react'
import css from './NewsArticle.module.scss'
import { HOME_PAGE, MEDIA_CENTER } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import Heading from 'components/Heading/Heading'
import Container from 'components/Grid/Container'
import imageSmall from './_assets/article__image-small@desktop.jpg'
import imageLarge from './_assets/article__image-large@desktop.jpg'
import SeeMore from 'Pages/NewsArticle/SeeMore/SeeMore'

const NewsArticle = () => {
  const articleData = {
    title: 'Какую зубную щетку использовать электрическую или обычную?',
    contentBeforeBanner: `
      <div class="wrapper">
        <div class="two-columns">
          <div class="column">
            <p>В&nbsp;течение 11&nbsp;лет ученые Фонда гигиены полости рта (Великобритания) проводили масштабные исследования, чтобы выяснить, какие зубные щетки лучше для здоровья зубов&nbsp;&mdash; обычные или все-таки электрические.</p>
            <p>Оказалось, электрические зубные щетки, особенно с головками, которые вращаются в обоих направлениях, действительно эффективны при удалении зубного налета. Это помогает предотвратить разрушение зубов и заболевания десен. Исследования доказали, что электрические зубные щетки.</p>        
          </div>
          <div class="column">
            <p>Оказалось, электрические зубные щетки, особенно с головками, которые вращаются в обоих направлениях, действительно эффективны при удалении зубного налета. Это помогает предотвратить разрушение зубов и заболев ания десен.</p>
            <p>Исследования доказали, что электрические зубные щетки привели к снижению рецессии десны на 22% и к снижению разрушения зубов на 11%</p>        
          </div>
        </div>
        <blockquote>
          Исследования доказали, что электрические зубные щетки привели к&nbsp;снижению рецессии десны на&nbsp;22% и&nbsp;к&nbsp;снижению разрушения зубов на&nbsp;11%
        </blockquote>
        <div class="image-text">
          <img src="${imageSmall}" alt="Иллюстрация к статье">
          <div>
            <h3>
              Аккумуляторная электрическая зубная щетка
            </h3>
            <p>
              Оказалось, электрические зубные щетки, особенно с головками, которые вращаются в обоих направлениях, действительно эффективны при удалении зубного налета. Это помогает предотвратить разрушение зубов и заболевания десен.
            </p>
            <p>
              Исследования доказали, что электрические зубные щетки привели к снижению рецессии десны на 22% и к снижению разрушения зубов на 11%
            </p>
            <p>
              В течение 11 лет ученые Фонда гигиены полости рта (Великобритания) проводили масштабные исследования, чтобы выяснить, какие зубные щетки лучше для здоровья зубов – обычные или все-таки электрические.            </p>
            <p>
              Оказалось, электрические зубные щетки, особенно с головками, которые вращаются в обоих направлениях, действительно эффективны при удалении зубного налета. Это помогает предотвратить разрушение зубов и заболевания десен.
            </p>
          </div>
        </div>      
        <div>
          <h3>
            Три типа зубных щеток
          </h3>
          <p class="italic">
            В течение 11 лет ученые Фонда гигиены полости рта (Великобритания) проводили масштабные исследования, чтобы выяснить, какие зубные щетки лучше для здоровья зубов – обычные или все-таки электрические.
          </p>
          <p>
            В&nbsp;течение 11&nbsp;лет ученые Фонда гигиены полости рта (Великобритания) проводили масштабные исследования, чтобы выяснить, какие зубные щетки лучше для здоровья зубов&nbsp;&mdash; обычные или все-таки электрические.
          </p>
          <p>
            Оказалось, электрические зубные щетки, особенно с&nbsp;головками, которые вращаются в&nbsp;обоих направлениях, действительно эффективны при удалении зубного налета. Это помогает предотвратить разрушение зубов и&nbsp;заболевания десен. Оказалось, электрические зубные щетки, особенно с&nbsp;головками, которые вращаются в&nbsp;обоих направлениях, действительно эффективны при удалении зубного налета. Это помогает предотвратить разрушение зубов и&nbsp;заболевания десен.
          </p>
          <p>
            Исследования доказали, что электрические зубные щетки привели к&nbsp;снижению рецессии десны на&nbsp;22% и&nbsp;к&nbsp;снижению разрушения зубов на&nbsp;11%          </p>
        </div>
      </div>`,
    contentAfterBanner: `
      <ul>
        <li>
          Аккумуляторная электрическая зубная щетка: аккумуляторная электрическая зубная щетка, также известная как &laquo;электрическая зубная щетка&raquo;, подключается к&nbsp;розетке и&nbsp;требует замены насадки каждые три месяца. Аккумуляторные электрические зубные щетки различаются между собой по&nbsp;технологии очистки, которую они используют&nbsp;&mdash; возвратно-вращательную технологию (3D) или звуковую технологию.
        </li>
        <li>
          Обычная (мануальная) зубная щетка: это самая обычная щетка, к которой вы привыкли, у нее пластиковая ручка и нейлоновые щетинки различной конструкции на головке щетки. Это наиболее распространенный тип зубной щетки, и такая щетка не требует никаких источников питания.        </li>
        <li>
          Зубная щетка на&nbsp;батарейках: тому, кто хочет приобрести электрическую щетку, но&nbsp;устал от&nbsp;аккумуляторных, может понравиться щетка на&nbsp;батарейках. Как и&nbsp;электрические зубные щетки, щетки на&nbsp;батарейках иногда называют просто &laquo;электрические щетки&raquo; из-за использования пальчиковых батарееек. Несмотря на&nbsp;то, что батареечные зубные щетки схожи по&nbsp;дизайну с&nbsp;обычными мануальными щетками, они совершают достаточное количество вибраций, что дает дополнительное очищающее действие.
        </li>
      </ul>`,
    seeAlso: {
      title: 'Читайте также',
      list: [
        {
          label: 'Какую зубную щетку использовать электронную или обычную?',
          date: '10 января 2020',
          url: '/'
        },
        {
          label: 'Какую зубную щетку использовать электронную или обычную?',
          date: '10 января 2020',
          url: '/'
        },
        {
          label: 'Какую зубную щетку использовать электронную или обычную?',
          date: '10 января 2020',
          url: '/'
        },
        {
          label: 'Какую зубную щетку использовать электронную или обычную?',
          date: '10 января 2020',
          url: '/'
        },
        {
          label: 'Какую зубную щетку использовать электронную или обычную?',
          date: '10 января 2020',
          url: '/'
        },
      ],
    }
  }

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Медиацентр',
      url: MEDIA_CENTER
    },
    {
      label: 'Какую зубную щетку использовать электрическую или обычную?'
    }
  ]

  return (
    <section className={css.section}>
      <Breadcrumbs dataArray={breadcrumbs} className={css.breadcrumbs} />
      <Container>
        <Heading content={articleData.title} className={css.title} />
        <div className={css.wyziwig} dangerouslySetInnerHTML={{ __html: articleData.contentBeforeBanner }}  />
      </Container>
      <img className={css.banner} src={imageLarge} alt='Чистка зубов электрической щеткой' />
      {articleData.contentAfterBanner &&
        <Container>
          <div className={css.wyziwig} dangerouslySetInnerHTML={{ __html: articleData.contentAfterBanner }}  />
        </Container>
      }
      <SeeMore
        className={css.seeMore}
        title={articleData.seeAlso.title}
        list={articleData.seeAlso.list}
      />
    </section>
  )
}

export default NewsArticle

import React from 'react'
import css from './LinksBattery.module.scss'
import { Link, withRouter } from 'react-router-dom'
import { ABOUT_US } from 'Pages/Routes'
import classnames from 'classnames'

const LinksBattery = (props) => {
  const listData = [
    {
      label: 'О нас',
      url: ABOUT_US
    },
    {
      label: 'Частые вопросы и ответы',
      url: '/'
    },
    {
      label: 'Лицензии и сертификаты',
      url: '/'
    },
    {
      label: 'Правовые документы',
      url: '/'
    },
    {
      label: 'Вакансии',
      url: '/'
    },
  ]

  const items = listData.map((item, index) => (
    <li className={classnames(css.item, { [css.itemActive]: item.url === props.location.pathname })} key={`Link battery item#${index}`}>
      <Link className={css.link} to={item.url}>
        { item.label }
      </Link>
    </li>
  ))

  return (
    <ul className={css.list}>
      { items }
    </ul>
  )
}

export default withRouter(LinksBattery)
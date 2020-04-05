import React from 'react'
import css from './TestBanner.module.scss'
import Heading from 'components/Heading/Heading'
import Button from 'components/Button/Button'
import IconDotsBg from 'assets/icons/IconDotsBg'
import Container from 'components/Grid/Container'
import classnames from 'classnames'

const TestBanner = ({ title, descriptor, type }) => (
  <section className={classnames(css.section, { [css.sectionSimple]: type === 'simple' })}>
    <Container className={css.container}>
      <div className={css.wrapper}>
        <div className={css.content}>
          <IconDotsBg className={css.icon} />
          <Heading content={title} className={css.title} />
          <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: descriptor }} />
        </div>
        <Button
          url='/test'
          className={css.btn}
          iconClassname={css.arrow}
          label='Пройти тест'
          btnStyle='filledDecorated'
        />
      </div>
    </Container>
  </section>
)

export default TestBanner
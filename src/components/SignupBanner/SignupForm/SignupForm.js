import React from 'react'
import css from './SignupForm.module.scss'
import { useForm } from "react-hook-form"
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'

const SignupForm = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.wrapper}>
        <fieldset className={css.fieldset}>
          <Input
            type='text'
            name='subscribeName'
            placeholder='Имя*'
            registration={register({ required: true })}
            isError={errors.subscribeName}
          />
        </fieldset>
        <fieldset className={css.fieldset}>
          <Input
            type='email'
            name='subscribeMail'
            placeholder='E-mail*'
            registration={register({ required: true })}
            isError={errors.subscribeMail}
          />
        </fieldset>
        <Button
          className={css.button}
          iconClassname={css.icon}
          label='Отправить'
          btnStyle='filledDecorated'
          type='submit'
        />
        {/*<button*/}
        {/*  className={css.button}*/}
        {/*  type='submit'*/}
        {/*>*/}
        {/*  Отправить*/}
        {/*  <IconArrowRight className={css.icon} />*/}
        {/*</button>*/}
      </div>
    </form>
  )
}

export default SignupForm

import React from 'react'
import styles from '../style'
import { Button } from './Button'

export const Cta = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2}`}>Let's try our servise now!</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, unde.</p>
      </div>

      <div className={`${styles.flexCenter} sm:mt-0 mt-10 sm:ml-10 ml-0`}>
        <Button />
      </div>
    </section>
  )
}

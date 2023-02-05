import React from 'react'
import { card } from '../assets'
import { layout } from '../style'
import styles from '../style'
import { Button } from './Button'

export const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis minima ratione laborum sit, magnam voluptatum! Nam reprehenderit et quaerat iste ab repellendus exercitationem itaque minima, ipsam, quam eos, molestiae explicabo.</p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>

    </section>
  )
}

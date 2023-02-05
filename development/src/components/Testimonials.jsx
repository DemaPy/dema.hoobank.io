import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import { quotes } from '../assets'

function FeedbackCard({ content, name, img, title }) {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="quotes" className='w-[42px] h-[27px] object-contain' />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>

      <div className='flex flex-row'>
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-normal text-[20px] leading-[32px] text-White'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-6 mb-6 relative z-[1]'>
        <h2 className={`${styles.heading2}`}>What people are <br className='sm:block hidden'/>saying about us</h2>

        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, commodi?</p>
        </div>
      </div>

      <div className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]`}>
        {
          feedback.map(card => (
            <FeedbackCard key={card.id} {...card}/>
          ))
        }
      </div>
    </section>
  )
}

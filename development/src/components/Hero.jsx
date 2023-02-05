import React from 'react'
import { discount, robot } from '../assets'
import styles from '../style'
import { GetStarted } from './GetStarted'

export const Hero = () => {
  return (
    <section id='home' className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0`}>



        <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2 mt-0`}>
            <span className='text-white'>20%</span> Discount for {" "}
            <span className='text-white'>1 month</span> Account
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>The Next <br className='sm:block hidden' /> {" "}
            <span className='text-gradient'>Generation</span>
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>

        </div>
        <h1 className='font-poppins font-semibold ss:text-[61px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Payment Method</h1>
        <p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus sunt inventore sapiente at ipsam. Officiis modi soluta obcaecati laboriosam. Quo iusto eum nesciunt fugit? Vitae minima debitis nihil maiores!</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute w-[40%] h-[35%] z-[0] top-0 pink__gradient' />
        <div className='absolute w-[80%] h-[80%] z-[1] rounded-full bottom-40 white__gradient' />
        <div className='absolute w-[50%] h-[50%] z-[0] bottom-20 right-20 blue__gradient' />
      </div> 

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

    </section>
  )
}

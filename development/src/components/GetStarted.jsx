import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'

export const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full bg-primary`}>


        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-1'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="arrow" />
        </div>


        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
        </p>

        
      </div>
    </div>
  )
}

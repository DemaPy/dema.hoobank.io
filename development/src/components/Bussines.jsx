import React from 'react'
import styles, {layout} from '../style'
import { features } from '../constants'
import { Button } from './Button'

function FeatureCard({ icon, title, content }) {

  return (
    <div className={`flex flex-row p-6 rounded-[20px] gap-2 feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className={`font-poppins font-semibold text-white text-[18x] leading-[23px] mb-1`}>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1'>
          {content}
        </p>
      </div>
    </div>
  )
}

export const Bussines = () => {
  return (
    <section id='features' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>You do the bussiness, <br  className='sm:block hidden'/> we will handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi veniam architecto odio itaque id assumenda dolorem rerum corrupti, hic nulla, impedit neque, magnam vel consectetur expedita adipisci eos laudantium.</p>
        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index}/>
          ))
        }
      </div>
    </section>
  )
}

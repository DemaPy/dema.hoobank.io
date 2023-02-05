import React from 'react'
import styles, {layout} from '../style'
import { apple, bill, google } from '../assets'

export const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div  className='absolute z-[3] top-0 w-[50%] h-[50%] rounded-full white__gradient -left-1/2'/>
        <div  className='absolute z-[0] bottom-0 w-[50%] h-[50%] rounded-full pink__gradient -left-1/2'/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem harum ducimus delectus quia velit aliquam cum sed quasi quibusdam natus molestias perspiciatis vel doloremque libero odio, totam consectetur necessitatibus.</p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple__store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google__play" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

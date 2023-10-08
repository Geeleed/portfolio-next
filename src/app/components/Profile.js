import React from 'react'
import css from './Profile.module.css'
import Image from 'next/image'

function Profile() {
  return (
    <div id='profile' className={css.main}>
      <div className={css.disk}>
        <Image src='/images/profile/1.jpg' width={700} height={700} alt='' />
        <div></div>
      </div>
      <div className={css.text}>
        <h1>SURASAK KAEWPHO</h1>
        <p>จบฟิสิกส์และต้องการทำงานด้าน Web Developer มีทักษะคอมพิวเตอร์เบื้องต้น ใช้ภาษา HTML CSS JavaScript React(Next.JS) เพื่อสร้างเว็บให้มีหน้าตาทันสมัยตามต้องการ สามารถเชื่อมต่อจัดการข้อมูลใน database และใช้งานหรือพัฒนา API ด้วย Express/Python ในระดับเบื้องต้นได้</p>
        <div>
          <Image src={'/images/logo/pngwing.com (16).png'} width={42} height={47} alt=''/>
          <Image src={'/images/logo/pngwing.com (17).png'} width={52} height={50} alt=''/>
          <Image src={'/images/logo/pngwing.com (18).png'} width={50} height={50} alt=''/>
          <Image src={'/images/logo/pngwing.com (14).png'} width={50} height={50} alt=''/>
          <Image src={'/images/logo/pngwing.com (15).png'} width={50} height={50} alt=''/>
          <Image src={'/images/logo/pngwing.com (3).png'} width={50} height={50} alt=''/>
          <Image style={{filter:'invert(1)'}} src={'/images/logo/pngwing.com (7).png'} width={60} height={50} alt=''/>
          <Image src={'/images/logo/pngwing.com (9).png'} width={50} height={50} alt=''/>
          <Image src={'/images/logo/pngwing.com (11).png'} width={60} height={50} alt=''/>
          <Image src={'/images/logo/pngwing.com (19).png'} width={50} height={50} alt=''/>
          <Image style={{filter:'invert(1)'}} src={'/images/logo/512x512-logo-27148.png'} width={50} height={50} alt=''/>
          <Image src={'/images/logo/pngwing.com.png'} width={50} height={50} alt=''/>
          <Image src={'/images/logo/pngwing.com (10).png'} width={50} height={50} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Profile
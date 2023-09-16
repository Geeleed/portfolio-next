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
        <h1>Profile</h1>
        <p>จบฟิสิกส์และต้องการทำงานด้าน Web Developer มีทักษะคอมพิวเตอร์เบื้องต้น ศึกษาการพัฒนาเว็บไซต์ด้วยตนเอง ใช้ภาษา HTML CSS JavaScript React(Next.JS) เพื่อสร้างเว็บให้มีหน้าตาทันสมัยตามต้องการ สามารถเชื่อมต่อจัดการข้อมูลใน database และใช้งานหรือพัฒนา API ด้วย Express/Python ในระดับเบื้องต้นได้ (โปรดพิจารณาผลงานใน portfolio) วิธีเรียนรู้หรือทำงานโดยส่วนตัวเป็นแบบ OKR ตั้งหัวข้อโปรเจ็กก่อนจากนั้นจึงหาเครื่องมือด้วยวิธีการต่าง ๆ ที่จะทำให้บรรลุเป้าหมายของโปรเจ็ก</p>
      </div>
    </div>
  )
}

export default Profile
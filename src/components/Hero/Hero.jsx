import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <section className={styles.container}>
        {/* text of hero section */}
        <div className={styles.content}>
            <h1 className={styles.title}>HII, I'm SETHMI</h1>
            <p className={styles.description}>
            I'm frontend Developer and I have passionate about UI/UX designing.
            Reach out if you would like to learn more!
            </p>
            <a className={styles.contactBtn} href="mailto:sethumunasinghe216@gmail.com">Contact Me</a>
        </div>

        {/* Image hero secction */}
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Image of me" />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
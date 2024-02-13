import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2 >CONTACT</h2>
            <p >Fell free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                <a href="mailto:sethumunasinghe216@gmail.com">sethumunasinghe216@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
                <a href="https://www.linkedin.com/in/nadeera-s-munasinghe/">Nadeera S Munasinge</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                <a href="https://github.com/NadeeraMS">Nadeera MS</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
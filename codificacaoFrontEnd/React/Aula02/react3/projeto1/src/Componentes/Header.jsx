 import imgLogo from '../assets/reactlogo.png';
 import styles from './Header.module.css';

 export function Header(){
   return(
    <header className={styles.header}>
     <img src={imgLogo} alt='Logo Header' />
     <strong>RPV react posts</strong>

    </header>
   )


 }
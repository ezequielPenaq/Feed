import styles from'./Header.module.css'

import reactlogo from '../IMG/ReactLogo.svg'

export function Header() {
    return(

        <header className={styles.header}>
            <img src={reactlogo}
            alt='Logotipo React'
            
            />
            <strong>TestReact</strong>
       
        </header>
    

    );

}

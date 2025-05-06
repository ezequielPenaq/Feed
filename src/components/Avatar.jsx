import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src}){
    return(
  <img 
  className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
  src={src}/>
);
}
//className={styles.avatar}
// const hasBorder = props.hasBorder != false;
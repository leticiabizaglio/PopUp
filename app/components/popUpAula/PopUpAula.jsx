import styles from './PopUpAula.module.css'

const PopUpAula = ({message, typeColor}) => {
    let color = '';
    if(typeColor === 'sucesso'){
        color = styles.sucesso;
    } else{
        color = styles.erro
    }

    return(
        <div className={color}>
            <p>{message}</p>
        </div>
    )
}
export default PopUpAula;
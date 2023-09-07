export default function PasswordErrorPopUp(props){
    return(
        <div className={props.show?"errorPopUp show":"errorPopUp hide"}>
                <label>Contraseña incorrecta</label>
        </div>
    )
}
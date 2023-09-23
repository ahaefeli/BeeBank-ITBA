export default function ContactsPopUp(props) {

  return (
    <div className={props.show ? "popUp" : "popUp-hide"}>
      < div className="beebank-network-p" >
        <ul className="contact-search">
          <li className="search-bar-t">Buscá su nombre acá:</li>
          <li><input type="search" name="Busqueda" id="Busqueda" className="input-search-bar" autoComplete="off" /></li>
          <p className="sub-text-contacts">Los alias vinculados a Beebank utilizan el tag <span className="bee-tag">$bee</span></p>
        </ul>
        <div className="network-h">
          <ul className="network-ul">
            <h4>Historial de contactos | <span className="bee-tag-2">Beebank</span></h4>
            <li className="main-hr li-h">Comadreja.casa<span className="bee-tag-2">$bee</span></li>
            <li className="main-hr li-h">Pedroperez23<span className="bee-tag-2">$bee</span></li>
            <li className="main-hr li-h">AgustinH2001</li>
            <li className="main-hr li-h">Pocho.tablon<span className="bee-tag-2">$bee</span></li>
            <li className="main-hr li-h">RomeM10</li>
          </ul>
        </div>
      </div >
    </div >

  )
};
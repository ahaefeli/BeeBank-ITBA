export default function CbuPopUp(props) {

  return (
    <div className={props.show?"popUp":"popUp-hide"}>
      <section className="main_section">
        <h2 className="username">Juan Manuel Perez</h2>
        <table className="CBU_table">
          <tbody><tr className="CBU_table_row bottom-border">
            <td><p className="CBU_Text">CUIL/CUIT</p></td>
            <td><p className="CBU_Value number-format">20-21354745-8</p></td>
          </tr>
            <tr className="CBU_table_row">
              <td><p className="CBU_Text">Banco</p></td>
              <td><p className="CBU_Value">BeeBank</p></td>
            </tr>
            <tr className="CBU_table_row">
              <td><p className="CBU_Text">Tipo de cuenta</p></td>
              <td><p className="CBU_Value">PERSONAL</p></td>
            </tr>
            <tr className="CBU_table_row">
              <td><p className="CBU_Text">Sucursal</p></td>
              <td><p className="CBU_Value">001-BuenosAires</p></td>
            </tr>
            <tr className="CBU_table_row">
              <td><p className="CBU_Text">CBU</p></td>
              <td><p className="CBU_Value number-format">0080821354215648423318</p></td>
            </tr>
            <tr className="CBU_table_row">
              <td><p className="CBU_Text">Alias</p></td>
              <td><p className="CBU_Value">pato.pato.pato</p></td>
            </tr>
          </tbody>

          </table>
          <div className="CBU_div__buttons">
          <button className="button--general">Modificar Alias</button>
          <button className="button--general">Copiar CBU</button>
        </div>
      </section>
    </div>

  )
}
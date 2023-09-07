export default function Logo(props) {
  return (
    <div className={props.mobile ? "logo-mobile" : "logo"}>
        <a href="l-home.html"><img src={props.darkLogo?require("../../resources/beebank-logo-oscuro.png"):require("../../resources/beebank-logo-claro.png")} className="bbank-logo" alt="Beebank" draggable="false" /></a>
    </div>
  )
}
export default function Logo(props) {
  return (
    <div className={props.mobile ? "logo-mobile" : "logo"}>
        <a href="l-home.html"><img src={require("../../resources/beebank-logo-claro.png")} className="bbank-logo" alt="Beebank" draggable="false" /></a>
    </div>
  )
}
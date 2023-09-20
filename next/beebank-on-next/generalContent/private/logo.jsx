import Link from "next/link"
import "./logo.css";
export default function Logo(props) {
  return (
    <div className={props.mobile ? "logo_mobile" : "logo"}>
        <Link href="/home"><img src={props.darkLogo ? "/beebank-logo-oscuro.png":"/beebank-logo-claro.png"} className="bbank_logo" alt="Beebank" draggable="false" /></Link>
    </div>
  )
}
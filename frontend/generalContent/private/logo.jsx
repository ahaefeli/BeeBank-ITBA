import Link from "next/link"
import Image from "next/image"

export default function Logo(props) {
  return (
    <div className={props.mobile ? "logo_mobile" : "logo"}>
        <Link href="/home"><Image width={200} height={50} quality={90} src={`https://raw.githubusercontent.com/ahaefeli/beebank-resources/main/beebank-logo-${props.darkLogo?'oscuro':'claro'}.png`} className="bbank_logo" alt="Beebank" draggable="false" /></Link>
    </div>
  )
}
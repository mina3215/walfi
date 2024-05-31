import Link from "next/link";
import WalfiLogo from "./walfi-logo";
import IconsWrapper from "./header-icons";

export default function Header() {
  return (
    <div className="flex justify-around">
      <Link href="/">
        <WalfiLogo />
      </Link>
      <IconsWrapper />
    </div>
  )
}
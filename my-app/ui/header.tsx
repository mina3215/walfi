import Link from "next/link";
import WalfiLogo from "./walfi-logo";
import HeaderWarraper from "./header-icons";

export default function Header(){
  return(
    <>
      <Link href="/">
        <WalfiLogo/>  
      </Link>
      <HeaderWarraper/>
    </>
  )
}
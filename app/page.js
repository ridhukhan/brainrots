import Link from "next/link";
export default function Home() {
  return (
   <div className="bg-pink-100">

<nav className="justify-center text-center">
<ul className="flex gap-5 text-center justify-center">
  <li>HOME</li>
  <Link href={"/s_sayeed"}>
  <li>Sayeed</li>
  
  </Link>
  <li>contact</li>
  <li>others</li>


</ul>

</nav>

   </div>
  );
}

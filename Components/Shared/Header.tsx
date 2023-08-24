import NavBar from "./NavBar";
import TopBar from "./TopBar";

export default function Header({lang }:{lang:string}) {
    return <header className="w-full" >
        <TopBar/>
        <NavBar lang={lang}/>
    </header>
}
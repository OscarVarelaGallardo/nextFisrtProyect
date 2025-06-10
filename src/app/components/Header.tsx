
import Logo from './Logo'
const Header = () => {
    return (
        <div className="bg-slate-800" >
            <div className="flex justify-start  h-20 shrink-0 items-center md:h-52 p-10 w-4/5 mx-auto">
                <Logo />
            </div>
        </div>
    )
}

export default Header
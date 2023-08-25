import { BsGithub, BsTwitter } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"

export function Navbar() {
    return (
        <nav>
            <ul className="container flex gap-2 mt-10">
                <li><a href="" className="h-10 w-10 flex justify-center items-center bg-slate-900 text-slate-300 hover:bg-slate-800 rounded-lg text-sm" aria-label="Github"><BsGithub/></a></li>
                <li><a href="" className="h-10 w-10 flex justify-center items-center bg-slate-900 text-slate-300 hover:bg-slate-800 rounded-lg text-sm" aria-label="Github"><FaLinkedinIn/></a></li>
                <li><a href="" className="h-10 w-10 flex justify-center items-center bg-slate-900 text-slate-300 hover:bg-slate-800 rounded-lg text-sm" aria-label="Github"><BsTwitter/></a></li>
            </ul>
        </nav>
    )
}
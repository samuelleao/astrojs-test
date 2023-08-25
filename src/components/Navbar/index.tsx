import { Github, Linkedin, Twitter } from 'lucide-react';

export function Navbar() {
    return (
        <nav className='container flex justify-between items-center mt-10'>
            <span className='text-slate-50 font-medium'>Navbar</span>
            <ul className=" flex gap-2">
                <li><a href="https://github.com/" className="h-10 w-10 flex justify-center items-center bg-slate-900 text-slate-300 hover:bg-slate-800 rounded-lg" aria-label="Github"><Github className='w-4'/></a></li>
                <li><a href="https://www.linkedin.com/in/samuelleao/" className="h-10 w-10 flex justify-center items-center bg-slate-900 text-slate-300 hover:bg-slate-800 rounded-lg" aria-label="Github"><Linkedin className='w-4'/></a></li>
                <li><a href="https://twitter.com/Samuelleao_" className="h-10 w-10 flex justify-center items-center bg-slate-900 text-slate-300 hover:bg-slate-800 rounded-lg" aria-label="Github"><Twitter className='w-4'/></a></li>
            </ul>
        </nav>
    )
}
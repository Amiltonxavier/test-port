import { Clapperboard, FileText, Headset, Megaphone, SearchCode } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FAQ } from '../../components/faq'
import { useEffect, useState } from 'react';

export default function Home() {
    const [navbarColor, setNavbarColor] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= window.innerHeight) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
        return () => {
            window.removeEventListener('scroll', changeNavbarColor);
        };
    }, []);
    //fixed z-[1000] w-full flex items-center justify-between gap-4 p-4
    //<nav
    /*   className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
          navbarColor ? 'bg-blue-600' : 'bg-transparent'
        }`}
      > */
    return (
        <main className='min-h-screen max-w-[1600px] mx-auto w-full'>
            <nav className={`fixed top-0 left-0 w-full z-30 font-semibold transition-all flex items-center justify-between gap-4 px-4 py-3 duration-300 ${navbarColor ? 'bg-white/30 backdrop-blur-xl text-zinc-700' : 'bg-transparent text-white'
                }`}>
                <div>
                    <h2>Logo</h2>
                </div>
                <ul className="flex items-center gap-3">
                    <li><Link to="">Services</Link></li>
                    <li><Link to="">Services</Link></li>
                    <li><Link to="">Services</Link></li>
                    <li><Link to="">Services</Link></li>
                </ul>
                <div>
                    <button className="rounded-full px-4 py-2 border ">Entrar</button>
                </div>
            </nav>
            <div className="relative h-screen">
                <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src="/video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/50 to-pink-500/60 bg-opacity-60 z-0"></div>

                <div className="relative z-10 flex flex-col gap-8 items-center justify-center h-full text-center text-white">
                    <h1 className="text-4xl font-bold">Denuncie com Segurança e Confidencialidade</h1>
                    <p className="mt-4 text-base  max-w-2xl"> Nosso portal oferece um espaço seguro para você relatar práticas irregulares e situações de risco.
                        Garantimos total anonimato e confidencialidade, protegendo você enquanto contribui para um ambiente mais justo e transparente.
                    </p>
                    <div className="flex items-center gap-8">
                        <button className="flex items-center gap-2 bg-emerald-500 text-white px-8 py-3 font-semibold rounded-full">
                            Denúnciar <Megaphone />
                        </button>
                        <button className="flex items-center gap-2 border text-white px-8 py-3 font-semibold rounded-full">
                            Denúnciar <SearchCode />
                        </button>
                    </div>
                </div>
            </div>
            <section className=' p-16 h-screen flex gap-8 flex-col items-center justify-center'>
                <h2 className="text-3xl tracking-tight font-bold text-blue-700 text-center">Benefícios</h2>
                <div className='grid sm:grid-cols-4 gap-8'>
                    <div className='max-w-[300px] flex flex-col gap-8 items-center'>
                        <span className='p-6 bg-blue-500 rounded-full text-white'>
                            <Megaphone className='size-10' />
                        </span>
                        <p className='text-zinc-700 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus consectetur magni nam. A similique eligendi non dolore ut aperiam placeat laborum. Esse laudantium ipsam repellendus consequuntur id incidunt hic!</p>
                    </div>
                    <div className='max-w-[300px] flex flex-col gap-8 items-center'>
                        <span className='p-6 bg-blue-500 rounded-full text-white'>
                            <Megaphone className='size-10' />
                        </span>
                        <p className='text-zinc-700 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus consectetur magni nam. A similique eligendi non dolore ut aperiam placeat laborum. Esse laudantium ipsam repellendus consequuntur id incidunt hic!</p>
                    </div>
                    <div className='max-w-[300px] flex flex-col gap-8 items-center'>
                        <span className='p-6 bg-blue-500 rounded-full text-white'>
                            <Megaphone className='size-10' />
                        </span>
                        <p className='text-zinc-700 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus consectetur magni nam. A similique eligendi non dolore ut aperiam placeat laborum. Esse laudantium ipsam repellendus consequuntur id incidunt hic!</p>
                    </div>
                    <div className='max-w-[300px] flex flex-col gap-8 items-center'>
                        <span className='p-6 bg-blue-500 rounded-full text-white'>
                            <Megaphone className='size-10' />
                        </span>
                        <p className='text-zinc-700 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus consectetur magni nam. A similique eligendi non dolore ut aperiam placeat laborum. Esse laudantium ipsam repellendus consequuntur id incidunt hic!</p>
                    </div>
                </div>
            </section>

            <section className=' bg-blue-50 space-y-8 p-16'>
                <h2 className="text-3xl tracking-tight font-bold text-blue-700 text-center">Funcionalidades</h2>
                <div className='grid sm:grid-cols-2 gap-8'>
                    <div className='max-w-[550px] flex gap-8 items-start justify-start'>
                        <span className=''>
                            <Megaphone className='size-6' />
                        </span>
                        <p className='text-zinc-600 text-sm font-medium leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus consectetur magni nam. A similique eligendi non dolore ut aperiam placeat laborum. Esse laudantium ipsam repellendus consequuntur id incidunt hic!</p>
                    </div>
                    <div className='max-w-[550px] flex gap-8 items-start justify-start'>
                        <span className=''>
                            <Headset className='size-6' />
                        </span>
                        <p className='text-zinc-600 text-sm font-medium leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus consectetur magni nam. A similique eligendi non dolore ut aperiam placeat laborum. Esse laudantium ipsam repellendus consequuntur id incidunt hic!</p>
                    </div>
                    <div className='max-w-[550px] flex gap-8 items-start justify-start'>
                        <span className=''>
                            <FileText className='size-6 text-blue-600' />
                        </span>
                        <p className='text-zinc-600 text-sm font-medium leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus consectetur magni nam. A similique eligendi non dolore ut aperiam placeat laborum. Esse laudantium ipsam repellendus consequuntur id incidunt hic!</p>
                    </div>
                    <div className='max-w-[550px] flex gap-8 items-start justify-start'>
                        <span className=''>
                            <Clapperboard className='size-6' />
                        </span>
                        <p className='text-zinc-600 text-sm font-medium leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus consectetur magni nam. A similique eligendi non dolore ut aperiam placeat laborum. Esse laudantium ipsam repellendus consequuntur id incidunt hic!</p>
                    </div>
                </div>
            </section>
            <section className="spacey-y-8 p-16 mb-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl text-blue-700 tracking-tight font-bold">Perguntas frequentes</h2>
                    <span className="text-zinc-700 text-sm inline-block">
                        Tudo que precisas saber sobre o Portal de denúncias
                    </span>
                </div>
                <FAQ />
            </section>

            <footer className='py-4 border-t mt-8 mx-16 text-zinc-700 text-sm'>
                Company &copy 2024
            </footer>
        </main>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <main className='max-w-[1600px] min-h-screen w-full'>
      <div className='h-screen grid grid-cols-3 gap-4'>
        <section className='rounded-l-xl h-full p-8 flex flex-col gap-8 justify-between items-start'>
          <span>Logo</span>
          <form className='space-y-4 w-full max-w-3xl'>
            <h5 className='font-bold text-2xl leading-snug'>Acessa a sua conta</h5>
            <div className='space-y-2'>
              <label htmlFor="" className='text-sm font-medium text-zinc-500'>Nome de usuário</label>
              <input type="text" placeholder='Nome de usuário' className='text-zinc-600 text-sm placeholder:italic focus-within:ring-1 ring-blue-500 outline-none py-3 px-4 w-full border  rounded-lg' />
            </div>
            <div className='space-y-2'>
              <label htmlFor="" className='text-sm font-medium text-zinc-500'>Senha</label>
              <input type="password" placeholder='Senha de usuário' className='text-zinc-600 text-sm placeholder:italic focus-within:ring-1 ring-blue-500 outline-none py-3 px-4 w-full border  rounded-lg' />
            </div>
            <div className=''>
              <button className='text-white font-medium rounded-lg py-3 px-4 w-full bg-blue-500 flex items-center justify-center'>Entrar</button>
            </div>
            <div>
              <Link to="/sign-in" className='text-zinc-700 hover:text-blue-500 text-sm'>Esquece-me da minha senha</Link>
            </div>
          </form>
          <footer className='py-2 border-t w-full'>
            <p className='text-sm text-zinc-500'>Company &copy 2024</p>
          </footer>

        </section>
        <aside className='h-full col-span-2 overflow-hidden'>
        <video className=" w-full h-full object-cover" autoPlay loop muted>
                    <source src="/video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
        </aside>
      </div>
    </main>
  )
}

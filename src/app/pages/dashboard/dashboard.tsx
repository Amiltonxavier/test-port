import { Megaphone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <main className='space-y-8'>
            <nav className="w-full border-b z-30 font-semibold transition-all flex items-center justify-between gap-4 px-4 py-3 duration-300" >
                <div>
                    <h2>Logo</h2>
                </div>
                <ul className="flex items-center gap-3">
                    <li><Link to="">Services</Link></li>
                    <li><Link to="">Services</Link></li>
                    <li><Link to="">Services</Link></li>
                    <li><Link to="">Services</Link></li>
                </ul>

            </nav>

            <div className='grid grid-cols-4 gap-4 px-8'>
                <div className='space-y-1.5  w-[300px] rounded-lg border bg-card text-card-foreground shadow-sm p-6'>
                    <div className='flex justify-between items-center'>
                        <span className='font-semibold '>Denúncias total (mês)</span>
                        <Megaphone />
                    </div>
                    <h3 className='text-2xl font-semibold leading-none tracking-tight'>543</h3>
                    <p className='text-xs font-semibold space-x-2'><span className='text-emerald-600'>+2%</span>Em relação ao mês passado</p>
                </div>
                <div className='space-y-1.5  w-[300px] rounded-lg border bg-card text-card-foreground shadow-sm p-6'>
                    <div className='flex justify-between items-center'>
                        <span className='font-semibold '>Denúncias total (mês)</span>
                        <Megaphone />
                    </div>
                    <h3 className='text-2xl font-semibold leading-none tracking-tight'>543</h3>
                    <p className='text-xs font-semibold space-x-2'><span className='text-emerald-600'>+2%</span>Em relação ao mês passado</p>
                </div>
                <div className='space-y-1.5  w-[300px] rounded-lg border bg-card text-card-foreground shadow-sm p-6'>
                    <div className='flex justify-between items-center'>
                        <span className='font-semibold '>Denúncias total (mês)</span>
                        <Megaphone />
                    </div>
                    <h3 className='text-2xl font-semibold leading-none tracking-tight'>543</h3>
                    <p className='text-xs font-semibold space-x-2'><span className='text-emerald-600'>+2%</span>Em relação ao mês passado</p>
                </div>
                <div className='space-y-1.5  w-[300px] rounded-lg border bg-card text-card-foreground shadow-sm p-6'>
                    <div className='flex justify-between items-center'>
                        <span className='font-semibold '>Denúncias total (mês)</span>
                        <Megaphone />
                    </div>
                    <h3 className='text-2xl font-semibold leading-none tracking-tight'>543</h3>
                    <p className='text-xs font-semibold space-x-2'><span className='text-emerald-600'>+2%</span>Em relação ao mês passado</p>
                </div>
            </div>
        </main>
    )
}

import React from 'react'
import Appimages from '../../assets/images/images'

function DashboardNav({ setView, view, open, onClose }) {


    return (
        <div className={`
    fixed md:static
    top-0 left-0
    h-screen
    w-60
    bg-white
    border-r border-slate-300
    flex flex-col
    z-40
    transform transition-transform duration-200
    ${open ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0
  `}>
            <div className='w-full mx-auto border-b border-slate-300 p-6'>
                <div className='w-full flex items-center justify-start gap-3'>
                    <div className='flex items-center justify-center'>
                        <Appimages.Logo className="text-white bg-blue-700 w-full h-full p-2 rounded-lg" />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <p className='font-semibold text-lg'>AI Testing</p>
                        <p className='text-sm text-slate-500 font-light'>Platform</p>
                    </div>
                </div>
            </div>
            <div className='w-full mx-auto py-5 px-3 flex flex-col'>
                <div className={view === 'Dashboard' ? 'flex items-center justify-start gap-1 cursor-pointer bg-blue-50 rounded-lg p-2' : 'flex items-center justify-start gap-1 cursor-pointer p-2'} onClick={() => {
                    setView('Dashboard')
                    onClose()
                }}>
                    <div>
                        <Appimages.Dashboard className={view === 'Dashboard' ? 'text-blue-700 w-full h-full p-2' : 'text-slate-700 w-full h-full p-2 rounded-lg'} />
                    </div>
                    <p className={view === 'Dashboard' ? 'text-blue-700 text-sm' : ' text-slate-700 text-sm'}>Dashboard</p>
                </div>
                <div className={view === 'Agents' ? 'flex items-center justify-start gap-1 cursor-pointer bg-blue-50 rounded-lg p-2' : 'flex items-center justify-start gap-1 cursor-pointer p-2'} onClick={() => {
                    setView('Agents')
                    onClose()
                }}>
                    <div>
                        <Appimages.Agent className={view === 'Agents' ? 'text-blue-700 w-full h-full p-2' : 'text-slate-700 w-full h-full p-2 rounded-lg'} />
                    </div>
                    <p className={view === 'Agents' ? 'text-blue-700 text-sm' : ' text-slate-700 text-sm'}>Agents</p>
                </div>

                <div className={view === 'Scenarios' || view === 'Create Scenario' ? 'flex items-center justify-start gap-1 cursor-pointer bg-blue-50 rounded-lg p-2' : 'flex items-center justify-start gap-1 cursor-pointer p-2'} onClick={() => {
                    setView('Scenarios')
                    onClose()
                }}>
                    <div>
                        <Appimages.Scenarios className={view === 'Scenarios' || view === 'Create Scenario' ? 'text-blue-700 w-full h-full p-2' : 'text-slate-700 w-full h-full p-2 rounded-lg'} />
                    </div>
                    <p className={view === 'Scenarios' || view === 'Create Scenario' ? 'text-blue-700 text-sm' : ' text-slate-700 text-sm'}>Scenarios</p>
                </div>
                <div className={view === 'Test Runs' ? 'flex items-center justify-start gap-1 cursor-pointer bg-blue-50 rounded-lg p-2' : 'flex items-center justify-start gap-1 cursor-pointer p-2'} onClick={() => {
                    setView('Test Runs')
                    onClose()
                }}>
                    <div>
                        <Appimages.Test_runs className={view === 'Test Runs' ? 'text-blue-700 w-full h-full p-2' : 'text-slate-700 w-full h-full p-2 rounded-lg'} />
                    </div>
                    <p className={view === 'Test Runs' ? 'text-blue-700 text-sm' : ' text-slate-700 text-sm'}>Test Runs</p>
                </div>
                <div className={view === 'Multi-Agent' ? 'flex items-center justify-start gap-1 cursor-pointer bg-blue-50 rounded-lg p-2' : 'flex items-center justify-start gap-1 cursor-pointer p-2'} onClick={() => {
                    setView('Multi-Agent')
                    onClose()
                }}>
                    <div>
                        <Appimages.Multi_agent className={view === 'Multi-Agent' ? 'text-blue-700 w-full h-full p-2' : 'text-slate-700 w-full h-full p-2 rounded-lg'} />
                    </div>
                    <p className={view === 'Multi-Agent' ? 'text-blue-700 text-sm' : ' text-slate-700 text-sm'}>Multi-Agent</p>
                </div>

            </div>
        </div>
    )
}

export default DashboardNav
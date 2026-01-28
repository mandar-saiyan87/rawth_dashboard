import React, { useState } from 'react'
import DashboardNav from '../shared/DashboardNav'
import Dummy from '../pages/Dummy'
import Scenario from '../pages/Scenario'
import CreateScenario from '../pages/CreateScenario'


function DashboardLayout() {


    const [view, setView] = useState('Scenarios')
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div className="flex min-h-screen md:h-screen relative">
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-30 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}
                <DashboardNav setView={setView} view={view}
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />

                <main className="flex-1 md:overflow-hidden">
                    <button
                        className="md:hidden p-2 m-5 mb-3 rounded border"
                        onClick={() => setSidebarOpen(true)}
                    >
                        ☰
                    </button>
                    <div className='p-5 md:overflow-y-auto md:h-full'>
                        {view === 'Dashboard' && <Dummy pagename={view} />}
                        {view === 'Agents' && <Dummy pagename={view} />}
                        {view === 'Scenarios' && <Scenario setView={setView}/>}
                        {view === 'Test Runs' && <Dummy pagename={view} />}
                        {view === 'Multi-Agent' && <Dummy pagename={view} />}
                        {view === 'Create Scenario' && <CreateScenario onCancel={() =>setView('Scenarios')}/>}
                    </div>
                </main>
            </div>
        </>
    )
}

export default DashboardLayout
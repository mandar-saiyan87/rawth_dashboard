import React, { useState, useEffect } from 'react'
import { AgentsList1 } from '../../assets/data/TestAgentsData'
import { LocalStorageKeys } from '../../assets/data/LocalStorageKey'
import ScenarioCard from '../shared/ScenarioCard'
import AgentSelect from '../shared/AgentSelect'
import LimitSelector from '../shared/LimitSelector'
import Pagination from '../shared/Pagination'



function Scenario({ setView }) {

  const [scenarios, setScenarios] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [agentId, setAgentId] = useState(localStorage.getItem(LocalStorageKeys.STORED_AGENT) || AgentsList1[0].id)
  const [limit, setLimit] = useState(() => {
    const numpages = localStorage.getItem(LocalStorageKeys.STORED_LIMIT)
    return numpages ? Number(numpages) : 5
  })
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState({
    totalPages: 1,
    pageDetails: 0
  })


  async function fetchScenarios() {
    setLoading(true)
    setError(null)
    try {

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/agents/${agentId}/scenarios?page=${page}&limit=${limit}`)

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`)
      }
      const data = await res.json()

      // This one included as NeonDB Free tier goes inactive sometimes, due to which returns undefined/500 and breaks UI
      setScenarios(Array.isArray(data?.scenarios) ? data?.scenarios : [])
      setPagination({
        totalPages: data?.pagination?.totalPages || 1,
        pageDetails: data?.pagination?.pageDetails || 0
      })
      setError(null)
    } catch (error) {
      console.error(error)
      setError('Failed to fetch scenarios, Please try again')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchScenarios()
  }, [agentId, page, limit])


  // UseEffect to maintain persistance/localstorage
  useEffect(() => {
    localStorage.setItem(LocalStorageKeys.STORED_AGENT, agentId)
    localStorage.setItem(LocalStorageKeys.STORED_LIMIT, limit)
  }, [agentId, limit])

  async function handledelete(id) {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/scenario/${id}`, {
        method: 'DELETE'
      })

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`)
      }

      if (res.status === 200) {
        fetchScenarios()
      }

    } catch (error) {
      console.error(error)
      setError('Failed to delete scenario, Please try again')
      setTimeout(() => {
        setError('')
      }, 2500)
    }
  }


  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex items-center justify-between'>
        <div>
          <p className='text-lg font-semibold'>Test Scenarios</p>
          <p className='text-slate-400 font-light'>Create and manage test scenarios for your AI agents</p>
        </div>

        <button className='text-white text-sm bg-blue-700 p-3 rounded-lg cursor-pointer' onClick={() => setView('Create Scenario')}>Create Scenario</button>
      </div>
      <div className='flex items-center justify-start gap-x-4 my-3'>
        <AgentSelect onAgentChange={setAgentId} currentId={agentId} />
        <LimitSelector value={limit} onChange={(value) => {
          setLimit(value)
          setPage(1)
        }} />
      </div>
      {loading && <p>Loading...</p>}
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded mb-4">
          {error}
        </div>
      )}
      {!loading && scenarios.length === 0 && !error && (
        <p className="text-gray-500">No scenarios found.</p>
      )}

      <div className='grid grid-cols-1 gap-4 my-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
        {!loading && scenarios.length > 0 && scenarios?.map((scenario) => (
          <ScenarioCard key={scenario.id} scenario={scenario} onDelete={handledelete} />
        ))}
      </div>

      <Pagination page={page} totalPages={pagination.totalPages} onPageChange={setPage} />
    </div>
  )
}

export default Scenario
import React, { useState } from 'react'
import { AgentsList1 } from '../../assets/data/TestAgentsData'

function AgentSelect({ onAgentChange, currentId }) {
    const [selectedAgent, setSelectedAgent] = useState(currentId)

    function handleChange(e) {
        const agentId = e.target.value
        setSelectedAgent(agentId)
        onAgentChange(agentId)
    }

    return (
        <select
            value={selectedAgent}
            onChange={handleChange}
            className="border border-slate-300 rounded px-3 py-2 bg-white"
        >
            {AgentsList1.map(agent => (
                <option key={agent.id} value={agent.id}>
                    {agent.name}
                </option>
            ))}
        </select>
    )
}

export default AgentSelect
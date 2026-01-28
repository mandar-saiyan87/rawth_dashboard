import React from 'react'

function LimitSelector({ value, onChange }) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="border border-slate-300 rounded px-3 py-2 bg-white text-sm"
        >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
        </select>
    )
}

export default LimitSelector
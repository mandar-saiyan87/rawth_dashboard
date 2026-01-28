import React from 'react'
import Appimages from '../../assets/images/images'

function ScenarioCard({ scenario, onDelete }) {

  function handleOnDelete(id) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this scenario?'
    )

    if (!confirmed) return

    onDelete(id);
  }

  const complexityColor = () => {
    switch (scenario.complexity) {
      case 'simple':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  function truncatetext(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    } else {
      return str;
    }
  }

  const shorttext = truncatetext(scenario.description, 15);

  return (
    <div className='bg-white p-5 rounded-lg'>
      <p className='font-semibold my-2'>{scenario.name}</p>
      <div className={`${complexityColor()} max-w-max px-2 text-sm font-light my-3 rounded-lg`}>
        <p>{scenario.complexity}</p>
      </div>
      <p className='text-slate-400 truncate'>{shorttext}</p>
      <hr className='h-px bg-slate-300 border-0 my-5' />
      <p>{scenario.createdAt}</p>
      <div className='flex items-center justify-start gap-x-5 my-5'>
        <button className='bg-slate-200 cursor-pointer p-4 rounded-lg text-slate-500 text-sm'>View</button>
        <button className='cursor-pointer' onClick={() => handleOnDelete(scenario.id)}><Appimages.Deleteimg className="text-red-600" /></button>
      </div>
    </div>
  )
}

export default ScenarioCard
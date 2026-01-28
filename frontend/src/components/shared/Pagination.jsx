import React from 'react'

function Pagination({ page, totalPages, onPageChange }) {
    return (
        <div className="flex items-center justify-between mt-6">

            <button
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
                className="px-3 py-2 rounded border disabled:opacity-50 cursor-pointer"
            >
                Prev
            </button>

            <span className="text-sm text-gray-600">
                Page <strong>{page}</strong> of <strong>{totalPages}</strong>
            </span>

            <button
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-2 rounded border disabled:opacity-50 cursor-pointer"
            >
                Next
            </button>

        </div>
    )
}

export default Pagination
import React from 'react'

const ProgressBar = () => {
    return (
        <div className="main-progress my-10 flex justify-start items-center w-3/4">
            <div className="h-6 w-6 flex justify-center items-center rounded-full bg-green-100 border-2 border-green-400">
                <p>{"1"}</p>
            </div>
            <div className="w-3/4 h-4 border border-green-500 rounded">
                <div className="h-full bg-green-500 rounded" style={{ width: `${75}%` }}></div>
            </div>
        </div>
    )
}

export default ProgressBar
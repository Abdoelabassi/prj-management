import React from 'react'

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center'>
        <div className='spinner-border' role="status">
            <span className='rs-only' >Loading....</span>
        </div>

    </div>
  )
}

export default Spinner
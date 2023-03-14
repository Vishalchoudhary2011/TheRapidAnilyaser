import React from 'react'

export default function Breadcrumb({label}) {
  return (
    <div>
        <section className='breadcrumb'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                    <h3>{label}</h3>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

import React from 'react'
import {Link} from 'react-router-dom'

function CallBreakBreadcrumb() {
  return (
	 <section className="breadcrumb-area breadcrumb-bg s-breadcrumb-bg-callBreak">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content text-center">
                <h2>CallBreak <span>Game</span></h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link>Games</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">CallBreak</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CallBreakBreadcrumb
import React from 'react'
import { CFooter } from '@coreui/react'

function backToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
       
      </div>
      <div className="mfs-auto">
        
      </div>
      <button onClick={()=>backToTop()} className="back-to-top fa fa-chevron-up" />
    </CFooter>
  )
}

export default React.memo(TheFooter)


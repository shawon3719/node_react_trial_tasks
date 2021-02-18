import React from 'react'
import { CFooter } from '@coreui/react'
import { Link } from 'react-router-dom'
import ParticleImage, { ParticleOptions } from "react-particle-image";
function backToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#61dafb"
};
const TheFooter = () => {
  return (
    <div>
  <footer>
   </footer>
  {/* Footer END ==== */}
  <button onClick={()=>backToTop()} className="back-to-top btn-sm fa fa-chevron-up" />
</div>

  )
}

export default React.memo(TheFooter)

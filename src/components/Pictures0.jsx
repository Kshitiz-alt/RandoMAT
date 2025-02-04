import {saveAs} from 'file-saver'

import propTypes from 'prop-types'


import '../index.css'



const Pictures = ({image}) => {
  const downLoad =() => {
    saveAs(image,'RandoMAT')
  }
  return (
    <div className="Pictures">
      <div className="Pictures0">
        <img src={image} onClick={downLoad} alt="" />
      </div>
  
    </div>
  )
}
Pictures.propTypes = {
  image: propTypes.string,
}
export default Pictures

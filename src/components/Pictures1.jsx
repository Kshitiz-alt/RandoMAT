import {saveAs} from 'file-saver'

import propTypes from 'prop-types'


import '../index.css'



const Pictures = ({images}) => {
  const downLoad =() => {
    saveAs(images,'RandoMAT')
  }
  return (
    <div className="Pictures">
      <div className="Pictures1">
        <img src={images} onClick={downLoad} alt="" />
      </div>
  
    </div>
  )
}
Pictures.propTypes = {
  images: propTypes.string,
}
export default Pictures
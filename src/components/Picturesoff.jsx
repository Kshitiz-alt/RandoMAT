// eslint-disable-next-line no-unused-vars
import React from 'react'

import { Pictures } from '../assets'
import Pictures0 from './Pictures0'

const Picturesoff = () => {
  return (
    <div className="Picturesoff">
      {Pictures.map((item, index) => (<Pictures0 key={index} image={item.image} />))}

    </div>
  )
}

export default Picturesoff













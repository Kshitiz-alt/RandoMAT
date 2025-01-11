
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Picturess} from '../assets'
import Pictures from './Pictures'

import '../index.css'

export default function Picturesoff() {
  return (
    <div className="Picturesoff">
        {Picturess.map((item,index) => (<Pictures key={index} image={item.image} />))}
      
    </div>
  )
}

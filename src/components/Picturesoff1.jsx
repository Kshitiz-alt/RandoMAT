import {Picturess} from '../assets'
import Pictures1 from './Pictures1'

export default function Picturesoff1() {
  return (
    <div className="Picturesoff">
          {Picturess.map((item, index) => (<Pictures1 key={index} images={item.images} />))}
    
        </div>
  )
}

import '../App.css'
import '../index.css'
import Origin from './Origin'

import Picturesoff from './Picturesoff'


const One = () => {
    return (
        <div className="One">
            <div className="One1">
              
                <ul>
                    <Origin />
                  
                </ul>

                <h3>Origin</h3>
            </div>
            <div className="One2">
                <h3>Wants</h3>
            </div>
            <div className="One3">

                <ul className="dos-list">
                    <a className="dos-list1" name="dos-list1"></a>
                    <li><Picturesoff /></li>
                    <a className="BackScroll" href="#dos-list1">Back-To-top</a>

                </ul>
                <h3>DOs</h3>


            </div>
            <div className="One4">
                <h3>Get Us</h3>
            </div>

        </div>
    )
}

export default One

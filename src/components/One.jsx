import '../App.css'
import '../index.css'
import Origin from './Origin'


import Picturesoff from './Picturesoff'
import Picturesoff1 from './Picturesoff1'


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
                <ul className="dos-list10">
                    <a className="dos-list1" name="dos-list11"></a>
                    <li><Picturesoff1/></li>
                    <a className="BackScroll" href="#dos-list11">Back-To-top</a>
                 

                </ul>
                <h3>1024px</h3>
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

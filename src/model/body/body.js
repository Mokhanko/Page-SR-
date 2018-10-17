import React, {Component} from 'react'
import Top from './components/top'
import Bot from './components/bot'
import './styles.css'

class Body extends Component {
    render() {
        return (
            <div className="body">
                <Top />
                {/* <Bot /> */}
            </div>
        );
    }
}
export default Body;
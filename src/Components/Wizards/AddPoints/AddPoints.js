import './AddPoints.css'
import React, {Component} from "react"

class AddPoints extends Component {
    constructor() {
        super()
        this.state = {
            points: ''
        }
    }
    render() {
        return (
            <div className="AddPoints">
                <h5>AddPoints</h5>
                <h5>AddPoints</h5>
                <h5>AddPoints</h5>
                <h5>AddPoints</h5>
                <h5>AddPoints</h5>
            </div>
        )
    }
    
}

export default AddPoints
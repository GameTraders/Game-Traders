import React, {Component} from 'react'
// import axios from 'axios'

export default class AddWish extends Component {
    constructor () {
        super ()
        this.state = {
            ps4Checked: false,
            xboxChecked: false,
            switchChecked: false,
            console: ''
        }
    }
    render() {
      console.log(this.state.console)
      console.log("props", this.props.state)
        const {ps4Checked, xboxChecked, switchChecked}= this.state
        return(
            <div
                    className="wishDropdown"
                    style={{
                      width: "100px",
                      height: "100px",
                      background: "blue",
                      position: "absolute",
                      bottom: "-100px",
                      left: "30px",
                      zIndex: '1'
                    }}
                  >
                    <p>Playstation</p>
                    <input
                      type="checkbox"
                      checked={ps4Checked}
                      onChange={() => this.setState({ console: "Playstation 4", ps4Checked: !ps4Checked, xboxChecked: false, switchChecked: false})}
                    />
                    <p>Xbox</p>
                    <input
                      type="checkbox"
                      checked={xboxChecked}
                      onChange={() => this.setState({ console: "Xbox One", xboxChecked: !xboxChecked, ps4Checked: false, switchChecked: false })}
                    />
                    <p>Nintendo</p>
                    <input
                      type="checkbox"
                      checked={switchChecked}
                      onChange={() => this.setState({ console: "Nintendo Switch", switchChecked: !switchChecked, ps4Checked: false, xboxChecked: false })}
                        
                    />
                  </div>
        )
    }
}
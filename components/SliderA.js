import React from "react";

class SliderA extends React.Component{
    state = {
        value: 50
    }

    handleOnChange = (newVal) => {
        this.setState({value: newVal.target.value})
        this.sendValue();
    }
    
    sendValue = () => {this.props.onSliderChange(this.state.value)}

    render() {
        return (
            <div>
                <input 
                style={{marginTop:"15px",
                WebkitAppearance:"none",
                outline: "none",
                width:"400px",
                height:"7px",
                borderRadius:"10px",
                backgroundColor:"#7C8AC5"}} type="range" min={0} max={100} value ={this.state.value} className="slider" onChange={this.handleOnChange} />
            </div>
        )
    }
}

export default SliderA;
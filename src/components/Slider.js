import React from 'react';


class Slider extends React.Component{
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
                <input type="range" min={0} max={100} value ={this.state.value} className="slider" onChange={this.handleOnChange} />
            </div>
        )
    }
}

export default Slider;
import React, { Component, PropTypes } from 'react'

const STYLE = {
  ACTIVE : {
    color: '#a487d4',
    fontWeight: 'bold'
  }
}

class SubMenuItem extends Component{
  static propTypes = {
    caption: PropTypes.string,
    onClick: PropTypes.func
  }

  state = {
    isActive: false
  }

  _handleClick = () => {
    this.props.onClick()
    this.setState(prev => {
      return { isActive: !prev.isActive}
    })
  }

  render(){
    const { caption  } = this.props
        , { isActive } = this.state
        , _style = (isActive)
            ? STYLE.ACTIVE
            : null;
    return(
      <div
        className="bt-sub-item"
        style={_style}
        onClick={this._handleClick}
      >
        {caption}
      </div>
    )
  }
}

export default SubMenuItem

import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setDeviceType, setFontSize } from 'store/actions'

function mapStateToProps (state) {
  return {
    state: state.elastic.config,
    type: state.elastic.deviceType
  }
}
function mapDispatchToProps (dispatch) {
  return {
    setFontSize: data => dispatch(setFontSize(data)),
    setDeviceType: type => dispatch(setDeviceType(type))
  }
}

class ElasticAdaptive extends React.Component {
  componentDidMount () {
    this.changeSize()
    window.addEventListener('resize', this.changeSize)
    window.addEventListener('orientationchange', this.changeSize)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.changeSize)
    window.removeEventListener('orientationchange', this.changeSize)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.type !== this.props.type) {
      this.changeSize()
    }
  }

  getDeviceType = width => {
    if (width >= 1280 && this.props.type !== 'desktop') {
      this.props.setDeviceType('desktop')
    }

    if (width < 1280 && width >= 768 && this.props.type !== 'tablet') {
      this.props.setDeviceType('tablet')
    }

    if (width < 768 && this.props.type !== 'mobile') {
      this.props.setDeviceType('mobile')
    }
  }

  changeSize = () => {
    let width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth
    this.getDeviceType(width)
    const { type } = this.props
    const html = document.documentElement
    const { widthLimit, baseWidth } = this.props.state[type]
    let { baseSize } = this.props.state[type]
    let actualWidth = width

    if (widthLimit) {
      actualWidth = Math.min(width, widthLimit)
    }

    const currentSize = actualWidth / baseWidth * baseSize
    this.props.setFontSize(currentSize)
    html.style.fontSize = currentSize + 'px'
  }

  render () {
    return this.props.children
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ElasticAdaptive))

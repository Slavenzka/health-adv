import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setFontSize } from 'store/actions'

function mapStateToProps (state) {
  return {
    state: state.elastic.config
  }
}
function mapDispatchToProps (dispatch) {
  return {
    setFontSize: (data) => dispatch(setFontSize(data))
  }
}

class ElasticAdaptive extends React.Component {
 constructor (props) {
   super(props)
   this.state = {
     type: this.getContentType(),
     width: document.body.clientWidth || window.innerWidth || document.documentElement.clientWidth,
   }
 }

  componentWillMount () {
    this.changeSize()
    window.addEventListener('resize', this.changeSize)
    window.addEventListener('orientationchange', this.changeSize)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.changeSize)
    window.removeEventListener('orientationchange', this.changeSize)
  }

  getContentType = () => {
    let width = document.body.clientWidth || window.innerWidth || document.documentElement.clientWidth
    if (width >= 1280) {
      console.log('Switch to desktop')
      this.setState({
        type: 'desktop',
        width
      })
      return 'desktop'
    }

    if (width < 1280 && width >= 768) {
      console.log('Switch to tablet')
      this.setState({
        type: 'tablet',
        width
      })
      return 'tablet'
    }

    if (width < 768) {
      console.log('Switch to mobile')
      this.setState({
        type: 'mobile',
        width
      })
      return 'mobile'
    }
  }

  changeSize = () => {
    this.getContentType()
    const { type, width } = this.state
    const html = document.documentElement
    const { widthLimit, baseWidth } = this.props.state[type]
    let { baseSize } = this.props.state[type]
    let actualWidth = width
    // Изменение размера шрифта для адаптации под малые разрешения экрана
    if (width <= 1440 && type === 'desktop') {
      baseSize = 8
    } else {
      baseSize = 10
    }

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

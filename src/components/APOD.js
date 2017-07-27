import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getAPOD } from '../actions'

class APOD extends Component {
  constructor (props) {
    super(props)
    this.state = {
      APODdata: {}
    }
  }
  componentWillMount () {
  }

  componentDidMount () {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=3Qo4akjdvDQvy8Zhjf4ADK2IkIjkoS4FddhFRytQ')
    .then((data) => {
      this.setState({
        APODdata: data.data
      })
      this.props.addAPODdata(this.state.APODdata)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (
      <div className='container'>
        <h1 className='title has-text-centered'> Astronomy Photo of the Day (APOD) </h1>
        <h2 className='subtitle has-text-centered'> Today on APOD </h2>
        <p className='subtitle has-text-centered'> {this.props.APODdata.date} </p>
        <p className='has-text-centered'>{this.props.APODdata.title}</p>
        <div className='columns'>
          <div className='column is-4 is-offset-4'>
            <img src={this.props.APODdata.url} alt={this.props.APODdata.title} />
          </div>
        </div>
        <div className='columns'>
          <div className='column is-6 is-offset-3'>
            <p> {this.props.APODdata.explanation} </p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    APODdata: state.APODdata.APODdata
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAPODdata: (APODdata) => dispatch(getAPOD(APODdata))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(APOD)

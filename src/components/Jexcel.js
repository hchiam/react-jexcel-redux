import React from 'react'
import PropTypes from 'prop-types' // just type checking
import jexcel from 'jexcel'
import ActionTypes from '../constants/actionTypes' // just an enum
// import { storeData } from '../actions/data' // abstracted custom method that calls store.dispatch instead of this.props.dispatch
import { connect } from 'react-redux' // to connect state to component and enable action dispatches

class Jexcel extends React.Component {
  // just type checking:
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.data = this.props.data || [[]]
    const defaultOptions = {
      data: this.data,
      minDimensions: [5, 5],
      allowComments: true,
      rowResize: true,
    }
    this.options = props.options || defaultOptions
    if (!this.options.onchange) {
      this.options.onchange = this.storeData
    }
    this.data = this.options.data
  }

  componentDidMount = () => {
    // set up jExcel spreadsheet:
    this.el = jexcel(document.getElementById('spreadsheet'), this.options)
  }

  addRow = () => {
    this.el.insertRow()
  }

  storeData = (instance, cell, col, row, value) => {
    const cellName = jexcel.getColumnNameFromId([col, row])
    const newData = this.el.getData()
    const change = cellName + ':' + newData[row][col]
    const rows = newData.length
    const cols = newData[0].length
    const comments = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const comment = this.el.getComments([c, r])
        if (comment) {
          comments.push({c, r, comment})
        }
      }
    }

    // NOW call the reducer to update state container (and pass along custom parameters onto the action)
    this.props.dispatch({ type: ActionTypes.STORE_DATA, newData, change, comments })
  }

  render() {
    return (
      <div>
        <div id="spreadsheet"></div>
        <br />
        <br />
        <input type="button" value="Add new row" onClick={() => this.addRow()}></input>
      </div>
    )
  }
}

// map state to props:
function mapStateToProps(state) {
  return {
    data: state.data,
  }
}
// and then connect that to the component:
export default connect(mapStateToProps)(Jexcel)

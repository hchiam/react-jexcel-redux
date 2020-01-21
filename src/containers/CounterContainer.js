import React from 'react'
import PropTypes from 'prop-types'
import Counter from '../components/Counter'
import ActionTypes from '../constants/actionTypes'
import { incrementIfOdd } from '../actions/counter'
import { connect } from 'react-redux'

import jexcel from 'jexcel'
import '../../node_modules/jexcel/dist/jexcel.css'
import '../styles/spreadsheet.css'

class CounterContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  }

  componentDidMount = () => {
    const data = [
      ['Jazz', 'Honda', '2019-02-12', '', true, '$ 2.000,00', '#777700'],
      ['Civic', 'Honda', '2018-07-11', '', true, '$ 4.000,01', '#007777'],
    ]

    jexcel(document.getElementById('spreadsheet'), {
      allowComments: true,
      data: data,
      columns: [
        {
          type: 'text',
          title: 'Car',
          width: 90,
        },
        {
          type: 'dropdown',
          title: 'Make',
          width: 120,
          source: [
            'Alfa Romeo',
            'Audi',
            'Bmw',
            'Chevrolet',
            'Chrystler',
            'Dodge',
            'Ferrari',
            'Fiat',
            'Ford',
            'Honda',
            'Hyundai',
            'Jaguar',
            'Jeep',
            'Kia',
            'Mazda',
            'Mercedez-Benz',
            'Mitsubish',
            'Nissan',
            'Peugeot',
            'Porsche',
            'Subaru',
            'Suzuki',
            'Toyota',
            'Volkswagen',
          ],
        },
        {
          type: 'calendar',
          title: 'Available',
          width: 120,
        },
        {
          type: 'image',
          title: 'Photo',
          width: 120,
        },
        {
          type: 'checkbox',
          title: 'Stock',
          width: 80,
        },
        {
          type: 'numeric',
          title: 'Price',
          mask: '$ #.##,00',
          width: 80,
          decimal: ',',
        },
        {
          type: 'color',
          width: 80,
          render: 'square',
        },
      ],
    })
  }

  increment = () => {
    this.props.dispatch({ type: ActionTypes.INCREMENT_COUNTER })
  }

  decrement = () => {
    this.props.dispatch({ type: ActionTypes.DECREMENT_COUNTER })
  }

  incrementIfOdd = () => {
    incrementIfOdd()
  }

  render() {
    return (
      <Counter
        counter={this.props.counter}
        increment={this.increment}
        decrement={this.decrement}
        incrementIfOdd={this.incrementIfOdd}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(CounterContainer)

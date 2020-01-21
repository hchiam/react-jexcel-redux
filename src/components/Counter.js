import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Jexcel from '../components/Jexcel'

const Intro = styled.p`
  font-size: large;
`

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
}

function Counter({ increment, incrementIfOdd, decrement, counter }) {
  return (
    <section>
      <Intro>
        To get started, edit <code>src/routes/index.js </code>
        and save to reload.
      </Intro>
      <p>
        Clicked: {counter} times <button onClick={increment}>+</button> <button onClick={decrement}>-</button>{' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </p>
      <Jexcel options={getOptions()}></Jexcel>
    </section>
  )
}

function getOptions() {
  const data = [
    ['Jazz', 'Honda', '2019-02-12', '', true, '$ 2.000,00', '#777700'],
    ['Civic', 'Honda', '2018-07-11', '', true, '$ 4.000,01', '#007777'],
  ]

  const options = {
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
  }

  return options
}

export default Counter

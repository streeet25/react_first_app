import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Arithmetic from '~/src/arithmetic';


class App extends Component {
  constructor(props) {
      super(props);

      this.state = { arithmetic: new Arithmetic() };
    }

  render() {
    const { arithmetic } = this.state;
    return (
      <div>
        <h1>Hello, World!</h1>
        <br />
        <h3>Сложение</h3>
        <p>225 + 333 = {arithmetic.addition(225, 333)}</p>
        <br />
        <h3>Вычитание</h3>
        <p>333 - 179 = {arithmetic.subtraction(333, 179)}</p>
        <br />
        <h3>Умножение</h3>
        <p>225 * 6 = {arithmetic.multiplication(225, 6)}</p>
        <br />
        <h3>Деление</h3>
        <p>570 / 3 = {arithmetic.division(570, 3)}</p>
        <br />
        <h3>Возведение в степень</h3>
        <p>33 ** 3 = {arithmetic.exponentiation(33, 3)}</p>
        <br />
        <h3>Извлечение корня</h3>
        <p>144 ** (1 / 2) = {arithmetic.evolution(144, 2)}</p>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

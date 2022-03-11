import React from 'react'
import { Component } from 'react'

import './info.css'


class Info extends Component {
      constructor(props) {
          super(props)
      }

      render() {
        return(
            <div className="info">
                <h1 className='info__h1'>Список необходимых продуктов</h1>
                <h3 className='info__h3'>Всего продуктов: 0</h3>
                <h3 className='info__h3'>Куплено продуктов: 0</h3>
            </div>
        ) 
      }
}

export default Info;
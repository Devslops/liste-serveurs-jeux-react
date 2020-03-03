import React from 'react'
import '../../custom.scss'

import Layout from '../Navigation/Layout'

import ServeurItem from './components/ServeurItem'

const ServeurScreen = () => {
    return(
        <div>
          <Layout Content={

            <div>
              <ServeurItem />
            </div>
          
          }/> 
        </div>
    );
}

export default ServeurScreen;
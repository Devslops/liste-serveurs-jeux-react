import React from 'react'
import '../../custom.scss'

import Layout from '../Navigation/Layout'
import RightArrowIcon from '../../images/icons/arrow-secondary.png'
import LeftArrowIcon from '../../images/icons/left-arrow-secondary.png'

import ServerItem from './components/ServerItem'

const ServerScreen = () => {
    return(
        <div>
          <Layout Content={

            <div className="row col-md-10">
              
              <div className="row serveurs">
                <ServerItem />
                <ServerItem />
                <ServerItem />
                <ServerItem />
                <ServerItem />
                <ServerItem />
                <ServerItem />
                <ServerItem />
                <ServerItem />
                <ServerItem />
              </div>

                <div className="row col-md-12 mt-4 mb-4">
                  <div className="col-md-3 offset-md-9 text-right">
                    <img src={LeftArrowIcon} className="mr-2" />
                    <span style={styles.pageNumber} className="bg-light text-white mr-2">1</span>
                    <span style={styles.pageNumber} className="bg-light text-white mr-2">2</span>
                    <span style={styles.pageNumber} className="bg-light text-white">3</span>
                    <img src={RightArrowIcon} className="ml-2" />
                  </div>
                </div>

            </div>
          }/>  
        </div>
    );
}

export default ServerScreen;

const styles = {
  pageNumber: {
      padding:9,
      fontWeight: 'bold',
      fontSize: 18
  }
}
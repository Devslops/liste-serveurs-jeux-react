import React from 'react'
import '../../custom.scss'

import Layout from '../Navigation/Layout'
import HeaderImg from '../../images/fond/minecraft-screen.png'
import DotIcon from '../../images/icons/dot-secondary.png'

import ServerItem from './Components/ServerItem'

const MyServersScreen = () => {
    return(
        <>
          <Layout
          SidebarType="home"          
          ContentHeader= {
            <div style={styles.headerContainer} className="row text-center">
                <div className='align-center col-2 offset-5'>
                    <h4 className="text-white align-center"><img src={DotIcon} /> Liste de vos serveurs</h4>
                </div>
            </div>
          }
          ContentBody={

            <div className="row col-md-10">
              
              <div className="row serveurs mt-2">
                <ServerItem />
              </div>

            </div>
          }/>  
        </>
    );
}

export default MyServersScreen;

const styles = {
  pageNumber: {
      padding:9,
      fontWeight: 'bold',
      fontSize: 18
  },
  headerContainer: {
      backgroundImage: "url(" + HeaderImg + ")",
      maxWidth: 1920,
      height: 250,
      alignItems: 'center',
      fontSize: 15
  },
  addServerButton: {
      borderRadius: 1,
      height: 45,
      maxWidth: 225,
      minWidth: 190,
      borderRadius: 1
  },
  mainText: {
      color: 'white',
      textAlign: 'center',
      maxWidth: 750,
      padding: 15
  }
}
import React from 'react'
import '../../custom.scss'

import Layout from '../Navigation/Layout'
import HeaderImg from '../../images/fond/minecraft-screen.png'
import RightArrowIcon from '../../images/icons/arrow-secondary.png'
import LeftArrowIcon from '../../images/icons/left-arrow-secondary.png'

import ServerItem from './components/ServerItem'

const ServerScreen = () => {
    return(
        <>
          <Layout          
          ContentHeader= {
            <div style={styles.headerContainer} className="row">
                <button className="btn btn-secondary col-md-1 mx-auto offset-md-3" style={styles.addServerButton}>Ajouter un serveur</button>
                <p style={styles.mainText} className="text-white mx-auto col-md-4">Vous cherchez le meilleur serveur minecraft gratuit ? Vous trouverez des serveurs français de tous les types. Découvrez les meilleurs serveurs Minecraft premiums et  crackés parmis les catégories PvP, Faction, PvPBox, Skyblock, Survie, RP, MMO et bien d'autres </p>
                <div className="col-md-2"></div>
            </div>
          }
          ContentBody={

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
        </>
    );
}

export default ServerScreen;

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
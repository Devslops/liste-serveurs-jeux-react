import React from 'react'
import '../../custom.scss'

import Layout from '../Navigation/Layout'
import HeaderImg from '../../images/fond/minecraft-screen.png'
import DotIcon from '../../images/icons/dot-secondary.png'
import MoneyIcon from '../../images/icons/money-secondary.png'
import userIcon from '../../images/icons/user-yellow.png'
import chartIcon from '../../images/icons/chart-red.png'
import calendarIcon from '../../images/icons/calendar-green.png'

const AdvertiseScreen = () => {
    return(
        <>
          <Layout
          SidebarType="member"               
          ContentHeader= {
            <div style={styles.headerContainer} className="row text-center">
                <div className='align-center col-md-2 offset-md-5'>
                    <h4 className="text-white align-center"><img src={DotIcon} /> Liste de vos serveurs</h4>
                </div>
            </div>
          }
          ContentBody={
            <div className="col mt-1">
                <div className="row">
                    <div className="col-md-5 col-sm-12 mb-2" style={styles.divContainer}>
                        <div className="bg-light text-white p-2" style={styles.divTitle}><img src={MoneyIcon} className="ml-3" /> Booster économique</div>
                        <div style={styles.customBg}>
                            <div className='p-3 bullet-custom bullet-blue'>  
                                <p>Profitez de nouvelles couleurs attractives pour votre serveur !</p>
                                <p>Avantage du booster :</p>
                                <ul>
                                    <li>Bordure jaune sur votre serveur</li>
                                    <li>Fond jaune sur votre serveur</li>
                                    <li>Bouton de copie d'IP en rouge</li>
                                </ul>
                                <div style={styles.boosterFooter}>
                                    <button className='mt-3' style={styles.customButtonBlue}>En profiter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12 mb-2 ml-3" style={styles.divContainer}>
                        <div className="bg-light text-white p-2" style={styles.divTitle}><img src={userIcon} className="ml-3" /> Booster popularité</div>
                        <div style={styles.customBg}>
                            <div className='p-3 bullet-custom bullet-yellow'>  
                                <p>Vous souhaitez passer à l'étape supérieur ?</p>
                                <p>Avantage du booster :</p>
                                <ul>
                                    <li>Votre serveur passe en haut de la liste*</li>
                                </ul>
                                <div style={styles.boosterFooter}>
                                    <button className='mt-3' style={styles.customButtonYellow}>En profiter</button>    
                                </div>
                                <p style={styles.forgetPassword}>* Si plusieurs serveurs bénéficies de l'offre, votre position sera alternée régulièrement avec les autres serveurs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-5 col-sm-12 mb-2" style={styles.divContainer}>
                        <div className="bg-light text-white p-2" style={styles.divTitle}><img src={chartIcon} className="ml-3" /> Booster 2en1</div>
                            <div style={styles.customBg}>
                                <div className='p-3 bullet-custom bullet-red'>  
                                    <p>Rien de plus rapide pour faire connaitre votre serveur ! Booste ta communauté en un clin d'oeil !</p>
                                    <p>Avantage du booster :</p>
                                    <ul>
                                        <li>Booster économique</li>
                                        <li>Booster popularité</li>
                                    </ul>
                                    <div style={styles.boosterFooter}>
                                        <button className='mt-3' style={styles.customButtonRed}>En profiter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="col-md-5 col-sm-12 mb-2 ml-3" style={styles.divContainer}>
                        <div className="bg-light text-white p-2" style={styles.divTitle}><img src={calendarIcon} className="ml-3" /> Booster inédit</div>
                            <div style={styles.customBg}>
                                <div className='p-3 bullet-custom bullet-green'>  
                                    <p>Booster qui change régulièrement ! Celui-ci s'adapte aux tendances Minecraft pour d'avantage de visibilité !</p>
                                    <p>Avantage du booster :</p>
                                    <ul>
                                        <li>Booster 2en1</li>
                                        <li>Vous apparaissez en 1er pour un type de serveur au choix*</li>
                                    </ul>
                                    <div style={styles.boosterFooter}>
                                        <button className='mt-3' style={styles.customButtonGreen}>En profiter</button>
                                    </div>
                                    <p style={styles.forgetPassword}>* Si plusieurs serveurs bénéficies de l'offre, votre position sera alternée régulièrement avec les autres serveurs</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
          }/>  
        </>
    );
}

export default AdvertiseScreen;

const styles = {
    headerContainer: {
        backgroundImage: "url(" + HeaderImg + ")",
        maxWidth: 1920,
        height: 250,
        alignItems: 'center',
        fontSize: 15
    },
    customInput: {
        backgroundColor: '#393E46',
        border: 'none',
        padding: 5,
        color: 'white',
        width: '90%',
        fontSize: 12
    },
    divTitle: {
        fontSize: 20,
        fontWeight: 900
    },
    boosterFooter: {
        position: 'absolute',
        bottom: 5
    },
    customBg: {backgroundColor:'#464D58', color: 'white', minHeight: "35vh"},
    customButtonGreen: {  padding: 7, backgroundColor: '#B0EACD', border: '1px solid #F67280', color: '#575568' },
    customButtonRed: {  padding: 7, backgroundColor: '#F67280', border: '1px solid #FBD157', color: '#575568' },
    customButtonYellow: {  padding: 7, backgroundColor: '#FBD157', border: '1px solid #00ADB5', color: '#575568' },
    customButtonBlue: {  padding: 7, backgroundColor: '#00ADB5', border: '1px solid #FBD157', color: '#575568' },
    forgetPassword: { fontSize: 10 }
  }
import React from 'react'
import '../../custom.scss'

import Layout from '../Navigation/Layout'
import HeaderImg from '../../images/fond/minecraft-screen.png'
import DotIcon from '../../images/icons/dot-secondary.png'
import whiteArrowIcon from '../../images/icons/arrow-white.png'
import miniatureIcon from '../../images/icons/miniature-white.png'
import passportIcon from '../../images/icons/passport-white.png'
import networkIcon from '../../images/icons/network-white.png'
import plusIcon from '../../images/icons/plus-white.png'
import exitIcon from '../../images/icons/exit-white.png'
import discordIcon from '../../images/icons/discord-white.png'
import editIcon from '../../images/icons/edit-secondary.png'

const ProfileScreen = () => {
    return(
        <>
          <Layout
          SidebarType="member"               
          ContentHeader= {
            <div style={styles.headerContainer} className="row text-center">
                <div className='align-center col-2 offset-5'>
                    <h4 className="text-white align-center"><img src={DotIcon} /> Liste de vos serveurs</h4>
                </div>
            </div>
          }
          ContentBody={

            <div className="row col-md-10 mt-4">
              <div className="col-md-10 offset-md-1 mb-2 mr-5" style={styles.formContainer}>
                <div className="bg-light text-white p-2" style={styles.formTitle}><img src={editIcon} className="ml-3" /> Ajouter votre serveur</div>
                <div style={styles.customBg}>
                    <form className='p-3 w-75'>
                        <div className="bg-dark p-1 mb-3"><img src={miniatureIcon} className='p-2' /><input type='text' style={styles.customInput} placeholder="Miniature (recommandé: 180x90)" /></div>
                        <div className="bg-dark p-1 mb-3"><img src={passportIcon} className='p-2' /><input type='text' style={styles.customInput} placeholder="Nom du serveur" /></div>
                        <div className="bg-dark p-1 mb-3"><img src={networkIcon} className='p-2' /><input type='text' style={styles.customInput} placeholder="IP du serveur" /></div> 
                        <div className="bg-dark p-1 mb-3"><img src={plusIcon} className='p-2' /><input type='text' style={styles.customInput} placeholder="Port du serveur" /></div> 
                        <div className="bg-dark p-1 mb-3"><img src={exitIcon} className='p-2' /><input type='text' style={styles.customInput} placeholder="Site web" /></div> 
                        <div className="bg-dark p-1 mb-3"><img src={discordIcon} className='p-2' /><input type='text' style={styles.customInput} placeholder="Discord" /></div>                   
                        <button type="submit" className='bg-secondary border-0 text-white mt-3' style={styles.customButton}>Valider <img src={whiteArrowIcon} className='ml-2' /></button>
                    </form>
                </div>
              </div>
            </div>
          }/>  
        </>
    );
}

export default ProfileScreen;

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
    formTitle: {
        fontSize: 20,
        fontWeight: 900
    },
    customBg: {backgroundColor:'#464D58', height: "100%"},
    customButton: {  padding: 7 },
    forgetPassword: { fontSize: 10 }
  }
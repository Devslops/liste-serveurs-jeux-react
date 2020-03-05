import React from 'react'
import '../../custom.scss'

import Layout from '../Navigation/Layout'
import HeaderImg from '../../images/fond/minecraft-screen.png'
import DotIcon from '../../images/icons/dot-secondary.png'
import LetterIcon from '../../images/icons/envelope-regular.png'
import unlockIcon from '../../images/icons/unlock.png'
import whiteArrowIcon from '../../images/icons/arrow-white.png'
import personIcon from '../../images/icons/person.png'
import arrowHeadIcon from '../../images/icons/arrow-head-secondary.png'

const MemberScreen = () => {
    return(
        <>
          <Layout          
          ContentHeader= {
            <div style={styles.headerContainer} className="row text-center">
                <div className='align-center col-2 offset-5'>
                    <h4 className="text-white align-center"><img src={DotIcon} /> Espace membre</h4>
                </div>
            </div>
          }
          ContentBody={

            <div className="row col-md-10">
              
              <div className="col-md-5" style={styles.formContainer}>
                <div className="bg-light text-white p-2" style={styles.formTitle}>Connexion</div>
                <div style={styles.customBg}>
                    <form className='p-3'>
                        <div className="bg-dark p-1 mb-3"><img src={LetterIcon} className='p-2' /><input type='text' style={styles.customInput} placeholder="Adresse mail" /></div>
                        <div className="bg-dark p-1"><img src={unlockIcon} className='p-2' /><input type='text' style={styles.customInput} placeholder="Mot de passe" /></div>                  
                        <button type="submit" className='bg-secondary border-0 text-white mt-3' style={styles.customButton}>Connexion <img src={whiteArrowIcon} className='ml-2' /></button>
                    </form>
                    <div className='pb-5' ><span className='text-white p-4' style={styles.forgetPassword}><img src={arrowHeadIcon} className="mr-1" />Mot de passe oublié ?</span></div>
                </div>
              </div>

              <div className="col-md-5 offset-md-2" style={styles.formContainer}>
                <div className="bg-light text-white p-2" style={styles.formTitle}>Inscription</div>
                <div style={styles.customBg}>
                    <form className='p-3'>
                    <div className="bg-dark p-1 mb-3"><img src={personIcon} className='p-2' /><input type='text' style={styles.customInput} placeholder="Pseudo" /></div>
                        <div className="bg-dark p-1 mb-3"><img src={LetterIcon} className='p-2' /><input type='text' style={styles.customInput} placeholder="Adresse mail" /></div>
                        <div className="bg-dark p-1"><img src={unlockIcon} className='p-2' /><input type='text' style={styles.customInput} placeholder="Mot de passe" /></div>                  
                        <button type="submit" className='bg-secondary border-0 text-white mt-3' style={styles.customButton}>S'inscrire <img src={whiteArrowIcon} className='ml-2' /></button>
                    </form>              
                </div>
              </div>

            </div>
          }/>  
        </>
    );
}

export default MemberScreen;

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
      width: '90%'
  },
  formTitle: {
      fontSize: 20,
      fontWeight: 900
  },
  customBg: {backgroundColor:'#464D58'},
  customButton: {  padding: 7 },
  forgetPassword: { fontSize: 10 }
}
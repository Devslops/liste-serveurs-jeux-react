import React from 'react';
import {useState} from 'react'
import Logo from '../../images/logo.png'

import HeaderImg from '../../images/fond/minecraft-screen.png'
import Sidebar from 'react-sidebar';

const Header = () => {

    const [sidebarOpen, setSidebarState] = useState(true)

    const onSetSidebarOpen = (open) => {
        setSidebarState(open)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={styles.container}>
                <img style={styles.logo} className="mr-4" src={Logo} />
                <input style={styles.searchInput} className="mr-4" placeholder="Rechercher un serveur ..."/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">SERVEURS <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">AJOUTER UN SERVEUR</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PUBLICITÉ</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto list-unstyled">
                        <li className="nav-item">
                            <a  className="nav-link text-white" style={styles.connexionButton} href="#">SE CONNECTER</a>
                        </li>
                        <li className="bg-secondary my-auto" style={styles.registerButton}>
                            <a className="text-dark" href="#">S'INSCRIRE</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div style={styles.headerContainer} className="row">
                <div className="col-md-2"></div>
                <button class="btn btn-secondary col-md-3 mx-auto" style={styles.addServerButton}>Ajouter un serveur</button>
                <p style={styles.mainText} className="text-white mx-auto col-md-4">Vous cherchez le meilleur serveur minecraft gratuit ? Vous trouverez des serveurs français de tous les types. Découvrez les meilleurs serveurs Minecraft premiums et  crackés parmis les catégories PvP, Faction, PvPBox, Skyblock, Survie, RP, MMO et bien d'autres </p>
                <div className="col-md-3"></div>
            </div>
            <Sidebar sidebar={<b>test content</b>} open={sidebarOpen} onSetOpen={onSetSidebarOpen} styles={{ sidebar: { background: "white" } }} />

        </div>
    )
}

export default Header;

const styles = {
    container: {
        fontSize: 11
    },
    logo: {
        width: 180
    },
    searchInput: {
        fontSize: 10,
        borderColor: '#707070',
        borderWidth: 1,
        padding: 8,
        width: 250
    },
    registerButton: {
        borderRadius: 1,
        height: 28,
        padding: 5,
        fontSize: 13
    },
    connexionButton: {
        marginRight: 10
    },
    headerContainer: {
        backgroundImage: "url(" + HeaderImg + ")" ,
        height: 250,
        alignItems: 'center',
        fontSize: 15

    },
    addServerButton: {
        borderRadius: 1,
        height: 45,
        maxWidth: 225,
        minWidth: 225,
        borderRadius: 1
    },
    mainText: {
        color: 'white',
        textAlign: 'center',
        maxWidth: 750,
        padding: 15
    }
}
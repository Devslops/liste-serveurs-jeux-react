import React from 'react';
import Logo from '../../images/logo.png'

const Header = ({ContentHeader}) => {

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
            {ContentHeader}
        </div>
    )
}

export default Header;

const styles = {
    container: {
        fontSize: 13
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
    }
}
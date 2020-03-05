import React from 'react';

import "../style.scss"
import arrowIcon from '../../images/icons/arrow-secondary.png';
import infoIcon from '../../images/icons/question-secondary.png';
import devFileIcon from '../../images/icons/file-code-secondary.png';

const Footer = () => {

    return (
        <div className="footer row bg-primary mt-5">
            <div className="col-md-2 mb-1" id="copyright-margin">
                <span>Liste-serveurs-minecraft.com © 2020</span><br />
                <span>Tous droits réservés.</span>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="row align-content-center">
                    <img src={arrowIcon} className="mr-2" />
                    <h3>À propos</h3>
                </div>
                <p>Liste-serveurs-minecraft.com répertorie des serveurs Minecraft. Il vous permet d'augmenter la popularité de votre serveur Minecraft. Vous pouvez faire connaitre votre serveur grâce aux votes et à la publicité.</p>
            </div>
            <div className="col-md-2 col-sm-12">
                <div className="row align-content-center">
                    <img src={infoIcon} className="mr-2" />
                    <h3>Informations</h3>
                </div>
                <ul className="list-unstyled pl-2">
                    <li>Conditions d'utilisation</li>
                    <li>Règlement</li>
                    <li>Contact</li>
                    <li>Publicité</li>
                </ul>
            </div>
            <div className="col-md-3 col-sm-12">
                <div className="row align-content-center">
                    <img src={devFileIcon} className="mr-2" />
                    <h3>Espace développeur</h3>
                </div>
                <ul className="list-unstyled pl-2">
                    <li>API</li>
                    <li>Plugin Stats</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
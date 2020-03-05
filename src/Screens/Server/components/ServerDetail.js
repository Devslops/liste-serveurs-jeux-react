import React from 'react'
import "../../style.scss"

import Layout from '../../Navigation/Layout'
import Logo from '../../../images/icons/logo.png'

const ServerDetail = () => {
    return (
        <Layout Content={
            <>
                <div style={styles.container}>
                    <div style={styles.quickInfo} className="text-white w-75 horizontal-center">
                        <div className="bg-light p-2"><h3 style={styles.title}>Informations du serveur</h3></div>
                        <div class="row mx-auto mt-3 p-3">
                            <img src={Logo} style={styles.logo} />
                            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus neque, ac hendrerit erat tincidunt a. Nam nec dolor nec tellus volutpat mollis. Morbi ac magna quis ipsum porttitor tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent lacinia convallis felis, quis ullamcorper dolor congue non.</p>
                            <ul className="list-unstyled">
                                <li>IP : legioncraft.fr</li>
                                <li>Version : 1.14</li>
                                <li>Type de serveur : Skyblock</li>
                            </ul>
                        </div>
                    </div>
                    <div style={styles.quickInfo} className="text-white w-75 mt-3 horizontal-center">
                        <div className="bg-light p-2"><h3 style={styles.title}>Les statistiques</h3></div>
                            <div class="row mx-auto mt-3 p-3 justify-content-md-center">
                                <div style={styles.statContainer} className="text-white w-25 mt-3 bg-dark text-center mr-2 col-12 col-md-3">
                                    <span>Nombre de cliques : </span>
                                    <p className="">555</p>
                                </div>
                                <div style={styles.statContainer} className="text-white w-25 mt-3 bg-dark text-center mr-2 col-12 col-md-3">
                                    <span>Nombre de cliques : </span>
                                    <p className="">555</p>
                                </div>
                                <div style={styles.statContainer} className="text-white w-25 mt-3 bg-dark text-center mr-2 col-12 col-md-3">
                                    <span>Nombre de cliques : </span>
                                    <p className="">555</p>
                                </div>
                            </div>
                    </div>
                    <div style={styles.quickInfo} className="text-white w-75 mt-3 mb-5 horizontal-center">
                        <div className="bg-light p-2"><h3 style={styles.title}>Les badges obtenus</h3></div>
                        <div class="mx-auto mt-3 p-3">
                            <ul className="list-unstyled row text-center">
                                <li className="bg-dark p-2 rounded col-md-2 ml-2 mb-2">Tendance</li>
                                <li className="bg-dark p-2 rounded col-md-2 ml-2 mb-2">Tendance</li>
                                <li className="bg-dark p-2 rounded col-md-2 ml-2 mb-2">Tendance</li>
                                <li className="bg-dark p-2 rounded col-md-2 ml-2 mb-2">Tendance</li>
                                <li className="bg-dark p-2 rounded col-md-2 ml-2 mb-2">Tendance</li>
                                <li className="bg-dark p-2 rounded col-md-2 ml-2 mb-2">Tendance</li>
                                <li className="bg-dark p-2 rounded col-md-2 ml-2 mb-2">Tendance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        }/>
    )
}

export default ServerDetail;

const styles = {
    container: {
        fontSize: 14,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    quickInfo: {
        backgroundColor: '#464D58'
    },
    logo: {
        maxWidth: 250,
        maxHeight: 90,
        borderRadius: 2,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    }
}
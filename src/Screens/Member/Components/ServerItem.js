import React from 'react'
import "../../style.scss"
import Logo from '../../../images/icons/logo.png'
import playIcon from '../../../images/icons/play-secondary.png'
import CopyIcon from '../../../images/icons/copy.png'

const ServerItem = () => {
    return (
        <div className="servers-container bg-light mt-3 row shadow" style={styles.container}>
            <div className="col-md-11">
                <div class="row bg-dark p-1 mr-2">
                    <span class="bg-secondary" style={styles.typeServerItem}>Skyblock</span>
                </div>
                    <div class="row mt-3">
                        <div class="col-md-2">
                        <span style={styles.rankNumber} className="bg-light">1</span>
                        <img style={styles.logo} src={Logo} />
                    </div>
                    <div class="col-md-9 col-sm-12 ml-3 server-desc">
                        <p style={styles.serverDescription} className="ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus neque, ac hendrerit erat tincidunt a. Nam nec dolor nec tellus volutpat mollis. Morbi ac magna quis ipsum porttitor tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent lacinia convallis felis, quis ullamcorper dolor congue non.</p>
                    </div>       
                </div>
                    <div className="row col-md-12">
                        <div className="bg-dark mt-1 mb-1 mr-3 horizontal-center" style={styles.ipContainer}>
                            <img className="ml-2 pb-1" src={playIcon} />
                            <span className="ml-3 text-white">legioncraft.fr</span>
                            <img className="ml-2 pb-1" src={CopyIcon} />
                        </div>
                        <div className="row col-md-9 mb-1 content-center">
                            <div style={styles.statContainer} className="bg-dark text-right mt-1 col-md-2">
                                <span style={styles.statText} className="mx-auto p-1">Taux: 5%</span>
                            </div>
                            <div style={styles.statContainer} className="bg-dark text-right mt-1 ml-2 col-md-2">
                                <span style={styles.statText} className="mx-auto p-1">Taux: 5%</span>
                            </div>
                            <div style={styles.statContainer} className="bg-dark text-right mt-1 ml-2 col-md-2">
                                <span style={styles.statText} className="mx-auto p-1">Taux: 5%</span>
                            </div>
                            <div style={styles.statsContainer} className="div-center-smart text-right mt-2 text-center offset-md-1 col-md-2">
                                <span style={styles.voteText} className="mx-auto">Statistiques</span>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="col-md-1">
                <div className="col-md-12 bg-dark text-center p-1" style={styles.badgeContainer}>
                    <span style={styles.badgeText}>Les badges</span>
                    <div style={styles.badgeItem} className="p-1 mt-2">Plus populaire</div>
                    <div style={styles.badgeItem} className="p-1 mt-2">Plus attractif</div>
                    <div style={styles.badgeItem} className="p-1 mt-2">Nouveau</div>
                </div>           
                <div style={styles.voteContainer} className="div-center-smart text-right mt-2 text-center col-md-5 mr-2">
                    <span style={styles.voteText} className="mx-auto">Editer</span>
                </div>   
            </div>
        </div>
    )
}

export default ServerItem;

const styles = {
    container: {
        padding: 15
    },
    logo: {
        maxWidth: 250,
        maxHeight: 90,
        borderRadius: 2
    },
    ipContainer: {
        width: 180,
        borderRadius: 1,
        fontSize: 14
    },
    serverDescription: {
        color: 'White',
        fontSize: 12
    },
    typeServerItem: {
        borderRadius: 5,
        fontSize: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'white'
    },
    badgeContainer: {
        minHeight: "80%"
    },
    badgeText: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold'
    },
    badgeItem: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 2,
        backgroundColor: '#575568',
        borderWidth: 1
    },
    rankNumber: {
        position: 'absolute',
        paddingTop:7,
        paddingBottom:7,
        paddingLeft:9,
        paddingRight:9,
        color:'white',
        fontWeight: 'bold',
        opacity: 0.85
    },
    statContainer: {
        maxWidth: 150,
        borderRadius: 1,
        color: 'white',
    },
    statText: {
        fontSize: 12
    },
    voteContainer: {
        maxWidth:120,
        borderRadius: 1,
        backgroundColor: '#B0EACD'
    },
    voteText: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    statsContainer: {
        backgroundColor: '#FBD157'
    }
}
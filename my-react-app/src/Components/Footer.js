import React from "react";

const Footer = () => {
    return(
        <footer style={styles.Footer}>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
};

export default Footer;
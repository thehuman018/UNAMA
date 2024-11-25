import React from "react";

const Header = () => {
    return(
    <header style={styles.header}>
        <h1>Histórico Escolar</h1>
    </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
    },

};

export default Header;
import React from 'react';
import './styles.css';

class Header extends React.Component {
    render() {
        return (
        <div className="row header">
            {this.props.children}
        </div>
    );}
}
    
export default Header;
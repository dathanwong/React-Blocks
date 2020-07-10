import React from 'react';
import './styles.css';

class Subcontent extends React.Component{
    render(){
        return(
            <div className="subcontent">{this.props.children}</div>
        );
    }
}

export default Subcontent;
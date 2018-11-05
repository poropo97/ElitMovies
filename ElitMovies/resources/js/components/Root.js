import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BaseModificada from './BaseModificada'

class Root extends Component {

    constructor(props) {
        super(props);
        //Hasta aqui los datos pasados eran en string, los pasamos a array a variable datos
        this.datos = JSON.parse(this.props.data);
    }

    SelectorBase() {
        switch (this.datos.React) {
            case 'BaseModificada':
                return <BaseModificada data={this.props.data} />;
            default:
                alert("Error, no hay base ninguna");
        }
    }

    /*static propTypes = {
        children: PropTypes.object.isRequired
    };*/

    render() {
        return (this.SelectorBase())
    }
}

if (document.getElementById('root')) {
    var data = document.getElementById('root').getAttribute('data');
    ReactDOM.render(<Root data={data} />, document.getElementById('root'));
}

export default Root;
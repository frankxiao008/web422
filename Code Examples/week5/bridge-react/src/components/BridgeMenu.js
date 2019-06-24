import React from 'react';

import MenuItem from './MenuItem.js';
import getBridgeData from '../bridges.js';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            loading: false,
            errored: false,
            bridges: []
        };
    }

    componentDidMount(){
        this.setState({loading: true});

        getBridgeData()
            .then(bridges=>this.setState({loading:false, bridges:bridges}))
            .catch(err=>{
                console.error('Unable to load bridge data', err.message);
                this.setState({errored: true});
            })
    }

    render(){
        if(this.state.errored){
            return (
                <div>
                    <p>Error: Unable to load bridge data</p>            
                </div>
            );
        }

        if(this.state.loading){
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }

        return this.state.bridges.map(bridge=>
            <MenuItem
                key={bridge.id}
                bridge={bridge}
                onClick={e=>this.props.onChange(bridge)}
            />
        );
    }

}
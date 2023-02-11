import React, {Component} from 'react';

class PropsComponent extends Component {
    render() {
        // const {name} = this.props;
        return (
        <>
        <h1>Hello {this.props.name}!</h1>
        </>
    )}
}

// const PropsComponent = (props) => {
//     return <h1> Hello, {props.name}</h1>
// }; 


export default PropsComponent
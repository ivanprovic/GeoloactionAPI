import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
   
     // we dont know the value yet, but we will know eventually
    // that's why we put "null" :) 
    // the only time we do direct assignment
    //to this.state
   // you dont have to deal with constructor         
   // and super(props) you can just put it this way and
   // let the Babel do the work for you :) 
    state = { lat: null, errorMessage: ''  }; // is equal an object
    

    componentDidMount() {
        
    window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ lat: position.coords.latitude }), 
        
        (err) =>  this.setState ({ errorMessage: err.message}),   
    );
    }
    
    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');
    }

    renderContent() {
            if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />    
        }

        return <Spinner message="Please accept location request" />;
    
    }


    render() {
      return (
        <div className="border red">
            {this.renderContent()}
        </div>
    
      ); 
    }
}

ReactDOM.render (<App />, document.getElementById('root'));





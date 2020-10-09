import './SeasonDisplay.css';
import React from 'react'; 

   //conditional(ternary) operator
    // the only JavaScript operator
    // that takes three operands : a condition followed by a quetion mark(?)
    // then an expression to execute if the condition is truthy followed by a colon
    // (:) and finally the expression to execute if the condition is falsy
    // This operator is frequently used as a shortcut for the if statement.
    

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",   
        iconName: 'sun'
    },
    winter: {
        text: "Burr it's cold!",
        iconName: 'snowflake'
    },
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}
 
const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className = {`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className = {`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay; 




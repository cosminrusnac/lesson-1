import React from "react";

const Summoning = (props) => {
    return (
        <div>
            <p>Professor {props.name} is the {props.potions} teacher</p>
        </div>
    );
};

export default Summoning;

// export const Summoning = () => <p>Professor Snape is the potions' teacher</p>;

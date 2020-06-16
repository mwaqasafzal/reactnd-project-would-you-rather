import React from 'react';

const UserStats = props => {
    return (
        <li className="user-stats">
            <div className="avatar">
                <img src={props.avatar} />
            </div>
            <div className="stats">
                <div className="stats-all">
                    <p>Name {props.name}</p>
                    <p>Answered: {props.answered}</p>
                    <p>Asked:{props.asked}</p>
                </div>

                <div className="stats-totals">
                    Total:{props.total}
                </div>
            </div>


        </li>
    );
}

export default UserStats
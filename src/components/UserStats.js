import React from 'react';

const UserStats = props => {
    return (
        <tr>
            <td>
                <div className="avatar">
                    <img src={props.avatar} />
                </div>
                <p>{props.name}</p>
            </td>
            <td>
                {/* for better formatting */}
                <table>
                    <tbody>
                        <tr>
                            <td>Answered </td>
                            <td>{props.answered}</td>
                        </tr>
                        <tr>
                            <td>Asked</td>
                            <td>{props.asked}</td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                Total:{props.total}
            </td>
        </tr>
    );
}

export default UserStats
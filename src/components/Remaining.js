import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const {expenses, budget} = useContext(AppContext);

    const total = expenses.reduce((total,item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = total < budget ? 'alert-success' : 'alert-danger';

    return (
        <div className={`alert ${alertType}`}>
            <span>
                Remaining: ${budget - total}
            </span>
        </div>
    )
}

export default Remaining;
import React from 'react';

const ViewBudget = (props) => {
    return (
        <>
            <span>
                Budget: ${props.budget}
            </span>
            <button
                type='button'
                className='btn button'
                onClick={props.handleEditClick}
                >
                Edit
            </button>
        </>
    )
}

export default ViewBudget;
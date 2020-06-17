import React from 'react';

const FilterQuestion = props => {
    return (
        <form className="filter">
           <span style={{fontWeight:"bold"}}>Filter:</span> <select value={props.value} onChange={props.handleFilterChange}>
                <option value="unanswered">Unanswered</option>
                <option value="answered">Answered</option>
                <option value="both">Both</option>
            </select>
        </form>
    );
}
export default FilterQuestion
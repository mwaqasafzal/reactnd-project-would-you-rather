import React from 'react';

const FilterPoll = props => {
    return (
        <form className="filter-Poll">
            <select value={props.value} onChange={props.handleFilterChange}>
                <option value="unanswered">Unanswered</option>
                <option value="answered">Answered</option>
                <option value="both">Both</option>
            </select>
        </form>
    );
}
export default FilterPoll
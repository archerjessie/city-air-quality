import React from 'react'
import * as R from 'ramda';
import withState from '../../utils/withState';

const SimpleForm = ({ search, setSearch, onSubmit }) => (
    <form
        className="flex"
        onSubmit={(event) => {
            event.preventDefault();
            onSubmit(search);
        }}>
        <div className="w5 flex items-center">
            <input
                type="text"
                value={search}
                placeholder="Melbourne"
                onChange={R.compose(setSearch, R.prop('value'), R.prop('target'))}
                className="br1 br--top br--left ba b--light-gray ph3 pv2 flex-grow-1 flex-shrink-1"
            />
            <button
                type="submit"
                className="br1 bl-0 br--top br--right b--light-gray white pa2 right-0 flex-grow-0 flex-shrink-0"
            >
                <span role="img" aria-label="search">
                    🕵️
              </span>
            </button>
        </div>
    </form>
)
export default R.compose(
    withState('search', 'setSearch', ''),
)(SimpleForm);
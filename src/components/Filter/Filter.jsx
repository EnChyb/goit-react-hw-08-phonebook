import { useDispatch } from 'react-redux'
import css from './Filter.module.css'
import { setFilter } from '../../redux/filtersSlice';

export const Filter = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.filter}>
        <label className={css.label}>Find contacts by name:
            <input className={css.input}
                type='text'
                name="filter"
                placeholder='Search contact...'
                onChange={(e)=> dispatch(setFilter(e.target.value)) }
            />
        </label>
        </div>

    )
}

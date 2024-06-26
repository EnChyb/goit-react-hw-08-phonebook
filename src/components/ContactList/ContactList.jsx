import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts} from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter)

    const filteredUserData = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div className={css.div}>
            <h2 className={css.component}>Contacts</h2>
            {filteredUserData.length > 0 ?
                (
                    <table className={css.table}>
                        <thead className={css.theader}>
                            <tr>
                                <th>Name</th>
                                <th>Number</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className={css.tbody}>
                            {filteredUserData.map((contact) => (
                                <tr key={contact.id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.number}</td>
                                    <td><button className={css.button} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button></td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                ) : (
                    <p className={css.message}>There is no contacts. </p>
                )}
        </div>
    )    
}


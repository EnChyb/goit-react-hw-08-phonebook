import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from "../../redux/selectors";
import { addContact } from '../../redux/operations';


export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const resetForm = () => {
        document.getElementById("nameId").value = '';
        document.getElementById("numberId").value = '';

    }


    //add new contact after submit
    const onSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const phone = e.target.elements.number.value;

        // Do not add duplicated contact
        const duplicatedContact = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
        );

        if (duplicatedContact) {
            alert(`${name} is already in contacts.`);
            resetForm();
        return;
        }

        //Add new contact 
        const newContact = { id: nanoid(), name, phone };
        dispatch(addContact(newContact));
        resetForm();

    };
    
    return (
        <form onSubmit={onSubmit} className={css.form}>
            <label className={css.label}>Name:
                <input className={css.input}
                    id='nameId'
                    type="text"
                    name="name"
                    /*pattern="^^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"*/
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={css.label}>Number:
                <input className={css.input}
                    id='numberId'
                    type="tel"
                    name="number"
                    /*pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"*/
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.button}>Add contact</button>
        </form>
    )
}

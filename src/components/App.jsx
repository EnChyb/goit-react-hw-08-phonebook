import css from './App.module.css'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]
  )

  return (
    <div>
      <h1 className={css.component}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.component}>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Loading...</b>}
      {error&&<h1>Oops! Something went wrong! Please try again.</h1>}
      <ContactList/>
    </div>
  )
};
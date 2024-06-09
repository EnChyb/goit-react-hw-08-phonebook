import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../components/Filter/Filter";
import { ContactList } from "../../components/ContactList/ContactList";
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { Loader } from '../../components/Loader/Loader';
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]
    )
    
    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
            <ContactForm />
            <Filter />
            {isLoading && !error && <Loader />}
            {error && <h1>Oops! Something went wrong! Please try again.</h1>}
            <ContactList />
            
        </>
    )
    
};

export default Contacts;
import ContactForm from "../ContactsForm/ContactsForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactsList/ContactsList";
import Loader from "../Loader/Loadre";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactSlice";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div className={css.formWrapper}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && !error && <Loader />}
      </div>
      <ContactList />
    </div>
  );
}
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import s from './ContactForm.module.css';

export default function ContactForm({ }) {
    const nameId = useId();
    const numberId = useId();
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        console.log(values);
        dispatch(
            addContact({
                name: values.name,
                number: values.number,
            })
        );
    actions.resetForm();
};
    const ContactSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Too short!")
            .max(50, "Too long!")
            .required("Required!"),
        number: Yup.string()
            .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid! Phone number must be: xxx-xx-xx")
            .required("Required!"),
    });

    return (
        <div className={s.contactForm}>
            <Formik
                initialValues={{ name: "", number: "" }}
                onSubmit={handleSubmit}
                validationSchema={ContactSchema}
            >
                <Form className={s.form}>
                    <label className={s.label} htmlFor={nameId}>
                        Name
                    </label>
                    <Field className={s.input} name="name" type="text" id={nameId} />
                    <ErrorMessage className={s.error} name="name" component="span" />
                    
                    <label className={s.label} htmlFor={numberId}>
                        Number
                    </label>
                    <Field className={s.input} name="number" type="tel" id={numberId} />
                    <ErrorMessage className={s.error} name="number" component="span" />

                    <button className={s.btnAdd} type='submit'>
                        Add contact
                    </button>
                </Form>
            </Formik>    
        </div>
    );
};
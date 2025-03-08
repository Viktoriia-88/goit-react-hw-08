import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RiEye2Line, RiEyeCloseFill } from "react-icons/ri";
import { useId, useState } from 'react';
import * as Yup from "yup";
import s from './RegisterForm.module.css';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const emailFieldId = useId();
    const passwordFieldId = useId();
    const [showPassword, setShowPassword] = useState(false);

    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const handleSubmit = (values, options) => {
        dispatch(register(values));
        options.resetForm();
    };

    const RegisterSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Too short!")
            .max(50, "Too long!")
            .required("Name is required"),
        email: Yup.string()
            .email("Invalid email format")
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i, "Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters long"),
    });

    return (
        <div className={s.regForm}>
            <Formik
                initialValues={{ initialValues }}
                onSubmit={handleSubmit}
                validationSchema={RegisterSchema}
            >
                <Form className={s.form}>
                    <label className={s.label} htmlFor={nameFieldId}>
                        Name
                    </label>
                    <Field className={s.input}
                        name="name"
                        type="text"
                        id={nameFieldId}
                        placeholder="Enter your name"
                        autoComplete="name"
                        required
                    />
                    <ErrorMessage className={s.error} name="name" component="span" />

                    <label className={s.label} htmlFor={emailFieldId}>
                        Email
                    </label>
                    <Field className={s.input}
                        name="email"
                        type="email"
                        id={emailFieldId}
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                    />
                    <ErrorMessage className={s.error} name="email" component="span" />
                            
                    <label className={s.label} htmlFor={passwordFieldId}>
                        Password
                    </label>
                    <div className={s.passwordWrapper}>
                        <Field className={s.input}
                            name="password"
                            type={showPassword ? "text" : "password"}
                            id={passwordFieldId}
                            placeholder="Enter your password"
                            autoComplete="password"
                            required
                        />
                        <button
                            className={s.toggleBtn}
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? (
                                <RiEye2Line className={s.icon} />
                            ) : (
                                <RiEyeCloseFill className={s.icon} />
                            )}
                        </button>
                    </div>
                    <ErrorMessage className={s.error} name="password" component="span" />
        
                    <button className={s.btnReg} type='submit'>
                        Register
                    </button>
                </Form>
            </Formik>
        </div>
    );
};
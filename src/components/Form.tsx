import React, { useState } from 'react';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { Formik, Form, FormikHelpers } from 'formik';
import MyTextField from './Input';
import TextTarea from './TextTarea';
import * as yup from 'yup';
import { sendEmail } from '../ services';

type FormValues = {
  email: string;
  userName: string;
  mesagge: string;
};

const Formulario = () => {
  const initialValues: FormValues = { email: '', userName: '', mesagge: '' };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('El formato de correo electrónico ingresado no es válido.')
      .required('Requerido'),
    userName: yup
      .string()
      .max(15, 'El campo no debe exceder los 15 caracteres.')
      .required('Requerido'),
    mesagge: yup
      .string()
      .min(10, 'El campo debe contener al menos 10 caracteres.')

      .required('Requerido'),
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(
          values: FormValues,
          { setSubmitting, resetForm }: FormikHelpers<FormValues>
        ) => {
          sendEmail(values);
          // setSubmitting(false);
          resetForm();
        }}
      >
        {}
        <Form>
          <div className='flex flex-col gap-4 rounded-lg bg-primary p-6'>
            <MyTextField
              label='Tu nombre'
              name='userName'
              type='text'
              placeholder='Jhon Doe'
            />

            <MyTextField
              label='Correo eléctronico'
              name='email'
              placeholder='jhon.doe@example.com'
              type='email'
            />

            <TextTarea
              label='Mensaje'
              name='mesagge'
              placeholder='Deja tu mensaje...'
            />

            <button
              type='submit'
              className='flex items-center justify-center gap-2 rounded-md bg-gradient-to-tr from-cyan to-emerald p-2 hover:font-semibold hover:shadow-md hover:shadow-accentText hover:transition-all md:hover:scale-105'
            >
              <MdOutlineMarkEmailUnread />
              Enviar mensaje
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default Formulario;

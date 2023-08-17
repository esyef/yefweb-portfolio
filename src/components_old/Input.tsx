import { useField, FormikProps } from 'formik';

type Props = {
  label: string;
  name: 'email' | 'userName';
  type: 'text' | 'email';
  placeholder: string;
};

const MyTextField = ({ label, ...props }: Props) => {
  const [field, meta] = useField<string>(props);
  console.log({ props });
  return (
    <div className='flex w-full flex-col gap-2'>
      <label className='text-lg' htmlFor={props.name}>
        {label}
      </label>
      <input {...field} {...props} className={`form-input bg-transparent`} />

      {meta.touched && meta.error ? (
        <span className='text-gradient'>{meta.error}</span>
      ) : null}
    </div>
  );
};

export default MyTextField;

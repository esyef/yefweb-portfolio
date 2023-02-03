import { useField } from 'formik';
import React from 'react';

type Props = {
  label: string;
  name: string;

  placeholder: string;
};

const TextTarea = ({ label, ...props }: Props) => {
  const [field, meta, helpers] = useField<string>(props.name);
  return (
    <div className='flex w-full flex-col gap-2 '>
      <label className='text-lg'>{label}</label>
      <textarea
        {...field}
        {...props}
        className={` form-textarea bg-transparent`}
      />
      {meta.touched && meta.error ? (
        <span className='text-gradient'>{meta.error}</span>
      ) : null}
    </div>
  );
};

export default TextTarea;

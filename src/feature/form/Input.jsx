/* eslint-disable react/prop-types */

function Input({ name, formik }) {
  return (
    <>
      <label htmlFor={name} className="font-semibold text-xl">
        {name[0].toUpperCase() + name.slice(1)}:
      </label>
      <input
        type="text"
        id={name}
        name={name}
        {...formik.getFieldProps({ name })}
      />
    </>
  );
}

export default Input;

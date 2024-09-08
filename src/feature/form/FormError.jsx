/* eslint-disable react/prop-types */
function FormError({ error }) {
  return (
    <div className="text-red-400">
      <p>{error}</p>
    </div>
  );
}

export default FormError;

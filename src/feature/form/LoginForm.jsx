import { useFormik } from "formik";
import FormError from "./FormError";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Required field";
    }

    if (!values.password) {
      errors.password = "Required field";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const newData = { ...values, isLogin: true };
      const userdata = JSON.stringify(newData);
      localStorage.setItem("userdata", userdata);
      navigate("/");
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-slate-50 w-10/12 m-auto p-4 flex flex-col items-center justify-center gap-y-6 md:w-5/12"
    >
      <div className="flex flex-col w-9/12 gap-y-2">
        <Input name="username" formik={formik} />
        {formik.touched.username && formik.errors.username && (
          <FormError error={formik.errors.username} />
        )}
      </div>
      <div className="flex flex-col w-9/12 gap-y-2">
        <Input name="password" formik={formik} />
        {formik.touched.password && formik.errors.password && (
          <FormError error={formik.errors.password} />
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-400 px-8 py-3 text-xl rounded-xl text-white cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}

export default LoginForm;

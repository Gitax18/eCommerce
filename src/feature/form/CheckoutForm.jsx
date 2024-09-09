import { useFormik } from "formik";
import Input from "./Input";
import FormError from "./FormError";
import ModalConfirm from "../checkout/ModalConfirm";
import { useState } from "react";

function CheckoutForm() {
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  const [showModal, setShowModal] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.username) errors.username = "Required field";

    if (!values.email) errors.email = "Required field";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      errors.email = "Invalid email address";

    if (!values.street1) errors.street1 = "Required field";

    if (!values.city) errors.city = "Required field";

    if (!values.state) errors.state = "Required field";

    if (!values.country) errors.country = "Required field";

    if (!values.pincode) errors.pincode = "Required field";
    else if (!/^\d{6}$/.test(values.pincode))
      errors.pincode = "Pincode should be a 6-digit number";

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: userdata.username,
      email: "",
      street1: "",
      street2: "",
      city: "",
      state: "",
      country: "india",
      pincode: "",
    },
    validate,
    onSubmit: () => {
      setShowModal(true);
    },
  });

  return (
    <>
      {showModal && <ModalConfirm />}
      <div className="bg-gray-100 rounded-xl py-2 m-auto w-8/12 lg:w-[60%]">
        <h1 className="text-center text-3xl font-semibold my-4">
          Shipping Details
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="w-[100%] m-auto flex flex-col gap-y-2 items-center"
        >
          <div className="flex flex-col w-7/12 gap-y-2">
            <Input name={"username"} formik={formik} />
            {formik.touched.username && formik.errors.username && (
              <FormError error={formik.errors.username} />
            )}
          </div>
          <div className="flex flex-col w-7/12 gap-y-2">
            <Input name="email" formik={formik} />
            {formik.touched.email && formik.errors.email && (
              <FormError error={formik.errors.email} />
            )}
          </div>
          <div className="flex flex-col w-7/12 gap-y-2">
            <Input name="street1" formik={formik} />
            {formik.touched.street1 && formik.errors.street1 && (
              <FormError error={formik.errors.street1} />
            )}
          </div>
          <div className="flex flex-col w-7/12 gap-y-2">
            <Input name="street2" formik={formik} />
            {formik.touched.street2 && formik.errors.street2 && (
              <FormError error={formik.errors.street2} />
            )}
          </div>
          <div className="flex flex-col items-center justify-between flex-shrink  w-7/12 gap-y-2 lg:gap-14 lg:flex-row  lg:w-7/12">
            <div className="w-full">
              <Input name="city" formik={formik} />
              {formik.touched.city && formik.errors.city && (
                <FormError error={formik.errors.city} />
              )}
            </div>
            <div className="w-full">
              <Input name="state" formik={formik} />
              {formik.touched.state && formik.errors.state && (
                <FormError error={formik.errors.state} />
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between flex-shrink  w-7/12 gap-y-2 lg:gap-14 lg:flex-row  lg:w-7/12">
            <div className="w-full">
              <Input name="country" formik={formik} />
              {formik.touched.country && formik.errors.country && (
                <FormError error={formik.errors.country} />
              )}
            </div>
            <div className="w-full">
              <Input name="pincode" formik={formik} />
              {formik.touched.pincode && formik.errors.pincode && (
                <FormError error={formik.errors.pincode} />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="border-2 w-7/12 my-4 bg-blue-600 border-blue-600 text-white text-2xl rounded-lg py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CheckoutForm;

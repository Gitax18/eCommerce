/* eslint-disable react/prop-types */
function ProductTitle({ data }) {
  return (
    <>
      <img
        src={data.product.image}
        className="h-[24rem] m-auto mt-8 md:h-[34rem] "
      />
      <h1 className=" text-2xl px-2 font-bold md:w-[60%] m-auto border-b-2 pb-6 md:font-black md:text-3xl ">
        {data.product.title}
      </h1>
    </>
  );
}

export default ProductTitle;

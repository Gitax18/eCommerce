/* eslint-disable react/prop-types */
function Description({ data }) {
  return (
    <>
      <div>
        <h3 className="text-2xl font-semibold">Description</h3>
        <p className=" mx-auto text-xl tracking-wide px-4 my-4 md:w-[60%]">
          {data.product.description}
        </p>
      </div>
    </>
  );
}

function ModelData({ data }) {
  return (
    <>
      <div>
        <h3 className="text-2xl font-semibold">Model</h3>
        <p className="w-[60%] mx-auto text-xl tracking-wide my-4">
          {data.product.model}
        </p>
      </div>
    </>
  );
}

function ProductColor({ data }) {
  return (
    <>
      <div>
        <h3 className="text-2xl font-semibold">Color</h3>
        <p className="w-[60%] mx-auto text-xl tracking-wide my-4">
          {data.product.color?.toUpperCase()}
        </p>
      </div>
    </>
  );
}

function ProductDetails({ data }) {
  return (
    <>
      <Description data={data} />
      <ModelData data={data} />
      {data.product.color && <ProductColor data={data} />}
    </>
  );
}

export default ProductDetails;

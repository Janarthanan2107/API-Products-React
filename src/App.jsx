import { useState } from "react";
import { url } from "./constants";
import { useEffect } from "react";

const App = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setProduct(data);
    } catch (err) {
      console.log("Something went wrong!", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {/* product card display */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Products from the Fake store.
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              "Get Started with Our Innovative App Today!"
            </p>
          </div>

          {/* products */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {product.map((item) => {
              const { id, title, price, description, category, image, rating } =
                item;
              return (
                <article
                  className="flex max-w-xl flex-col items-start justify-between"
                  key={id}
                >
                  <div className="w-full min-h-[250px] flex justify-center items-center py-3 rounded-2xl shadow-lg cursor-pointer">
                    <img
                      src={image}
                      alt={title}
                      className="w-[35%] h-auto object-cover"
                    />
                  </div>
                  <div className="mt-5 text-xs">
                    <p className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 shadow cursor-pointer">
                      {category}
                    </p>
                  </div>
                  <div className="group">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">{title}</a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {description}
                    </p>
                  </div>
                  <div className="w-full mt-8 flex justify-between items-center gap-x-4 border-b border-gray-300 pb-3 lg:border-b-0 lg:pb-0">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">${price}</p>
                    </div>
                    <div className="text-sm leading-6 flex items-center">
                      <p className="text-xs">In stock : </p>
                      <p className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                        {rating.count}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

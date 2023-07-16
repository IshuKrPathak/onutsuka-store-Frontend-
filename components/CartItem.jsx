import React from "react";

const CartItem = () => {
  return (
    <div
      className="flex py-5 gap-3 md:gap-5 border-b
    "
    >
      {/* image start */}

      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="4.1.webp" alt="" />
      </div>
      {/* image end  */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* product title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            onutsuke tiger
          </div>

          {/* product subtitle */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            UNISEX Golf Shoes
          </div>

          {/* product price */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            {" "}
            MRP: INR 10000
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div
            className="flex items-center gap-2
          md:gap-10 text-black/[0.5] text-sm md:text-md"
          >
            <div className="flex items-center gap-1">
              <div className="font-semibold "> SIZE</div>
              <select className=" hover:text-black">
                <option value="1">UK 6</option>
                <option value="2">UK 6.5</option>
                <option value="3">UK 7</option>
                <option value="4">UK 7.5</option>
                <option value="5">UK 8</option>
                <option value="6">UK 8.5</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold "> QUANTITY</div>
              <select className=" hover:text-black">
                <option value="1"> 1</option>
                <option value="1"> 2</option>
                <option value="1"> 3</option>
                <option value="1"> 4</option>
                <option value="1"> 5</option>
                <option value="1"> 6</option>
                <option value="1"> 7</option>
              </select>
            </div>
          </div>
          {/* <RiDeleteBin6Line/> */}
          {/* <MdDelete/> */}
        </div>
      </div>
    </div>
  );
};

export default CartItem;

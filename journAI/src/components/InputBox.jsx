import React from "react";

const InputBox = (props) => {
  return (
    <div>
      <div className="relative  ">
        <input
          type={props.types}
          className="bg-[#EFF1F9] w-full h-[40px] rounded-[8px] pl-12 placeholder:text-dust-grey pb-0.5 text-sm focus:outline-none focus:border-violet focus:border-[1.5px]"
          placeholder={props.names}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {props.icons}
        </div>
      </div>
    </div>
  );
};

export default InputBox;

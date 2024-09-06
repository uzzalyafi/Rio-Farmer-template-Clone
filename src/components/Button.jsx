/* eslint-disable react/prop-types */

const Button = ({ title, padding, fontSize, lineHeight  }) => {
  return (
    <button
      className=" bg-[#1a5eff] text-white rounded-3xl font-bold font-cabinet hover:bg-[#202b38] duration-300 "
      style={{ padding,  fontSize, lineHeight  }}
    >
      {title}
    </button>
  );
};

export default Button;

/* eslint-disable react/prop-types */


const Title = ({ titles, subTitle }) => {
  return (
    <div className="mt-[20px] md:mt-[60px] mb-[20px]">
      <p className="text-base font-bold leading-[14px] text-[#1a5eff] font-cabinet uppercase p-[10px] bg-[#fff] inline-block rounded-md shadow-sm">{titles}</p>
      <h2 className="text-[35px] md:text-[55px] font-bold leading-[32px] md:leading-[50px] font-cabinet text-[#202b38] mt-[30px]">{subTitle}</h2>
    </div>
  )
}

export default Title
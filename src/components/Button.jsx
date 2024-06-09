
const Button = ({label,iconURL,backgroundColor,bordderColor,textColor,RounD,fullWidth}) => {
  return (
  <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none   ${backgroundColor ? `${backgroundColor} ${textColor} ${bordderColor} ${RounD}`   : 'bg-coral-red  text-white border-coral-red'}rounded-full ${fullWidth && "w-full rounded-full"}`}>
   {label}
{iconURL&& <img src={iconURL} alt="arrow right icon" 
  className="ml-2 rounded-full w-5 h-5"
 />}
  </button>
  

  )
}

export default Button

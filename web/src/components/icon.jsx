import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import back from '../assets/icons/back.svg';
import profile from '../assets/icons/profile.svg';

const icons = {
  arrowLeft,
  arrowRight,
  back,
  profile
}

export const Icon = ({ name, ...props }) => {
  const namedIcon = name ? icons[name] : "";
  
  return (
    <img src={namedIcon} className="h-6" {...props}  />
  )
}
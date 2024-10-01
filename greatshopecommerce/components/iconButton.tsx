import {cn} from '@/lib/utils'
interface IconButton{
    onClick: ()=> void,
    icon: React.ReactElement,
    className?:string
}

function IconButton(props:IconButton) {
    const {onClick, icon, className} = props;
  return (
   <button onClick={onClick} className={cn("rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition",className)}>
        {icon}
   </button>
  )
}

export default IconButton
import { toast } from 'react-hot-toast';
import { BlockChianTxURL } from '../../utils/usTxLink';
import { CalculatorIcon ,XMarkIcon,CheckCircleIcon} from '@heroicons/react/24/outline';
export const ShowToast = (Name?:string,linkURL?: string) =>{


  toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      }  bg-white  max-w-md w-full shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5 flex flex-row justify-start gap-3 rounded-xl  relative`}
    >
      <div className="w-12 bg-green-500 rounded-l-xl flex items-center text-white ">
<CheckCircleIcon width={25} height={25} className="m-auto"/>
      </div>
      <div className='max-w-[250px]'>
    <div className='flex flex-row justify-between items-center'> 
    <div className='text-lg font-semibold capitalize'>
      {Name}
    </div>


<div><XMarkIcon onClick={() => toast.dismiss(t.id)} width={20} height={20} className='absolute right-3 top-3 cursor-pointer z-10'/></div>
</div>


     <div className='p-2 text-[#17e817] rounded-2xl'>
     <a className='underline' href={`${BlockChianTxURL}/${linkURL}`}>View on bscscan:{linkURL?.slice(0, 5)}</a> 
     </div>

</div>


    
      </div>
  ));


}




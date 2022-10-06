import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { addDays, subDays, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

export const DateSelect = () => {
  const initialDate = '2022-11-20T00:00:00Z';
  const [currentDate, setCurrentDate] = useState(new Date(initialDate));

  const prevDay = () => {
    const vdata = subDays(currentDate, 1);
    setCurrentDate(vdata);
  }

  const nextDay = () => {
    const vdata = addDays(currentDate, 1);
    setCurrentDate(vdata);
  }

  return (
    <div className='flex items-center justify-center p-4 space-x-6'>
      <ArrowLeft size={32} weight='bold' 
        className="text-red-500 hover:scale-110" 
        onClick={prevDay}
      />
      <span className='md:text-lg text-gray-700 font-bold'>
        {format(currentDate, "dd 'de' MMMM", { locale: ptBR })}
      </span>
      <ArrowRight size={32} weight='bold' 
        className="text-red-500 hover:scale-110" 
        onClick={nextDay}
      />
    </div>
  )
}

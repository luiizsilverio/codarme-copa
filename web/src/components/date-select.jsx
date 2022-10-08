import { CaretLeft, CaretRight } from 'phosphor-react';
import { addDays, subDays, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

export const DateSelect = ({ currentDate, onChange }) => {

  const prevDay = () => {
    const vdata = subDays(currentDate, 1);
    onChange(vdata);
  }

  const nextDay = () => {
    const vdata = addDays(currentDate, 1);
    onChange(vdata);
  }

  return (
    <div className='flex items-center justify-center p-4 space-x-6'>
      <CaretLeft size={32} weight='bold' 
        className="text-red-500 hover:scale-110" 
        onClick={prevDay}
      />
      <span className='md:text-lg text-gray-700 font-bold'>
        {format(currentDate, "dd 'de' MMMM", { locale: ptBR })}
      </span>
      <CaretRight size={32} weight='bold' 
        className="text-red-500 hover:scale-110" 
        onClick={nextDay}
      />
    </div>
  )
}

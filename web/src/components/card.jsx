
export const Card = ({ timeA, timeB, match }) => {
  return (  
    <div className='rounded-xl border border-gray-300 p-4 text-center space-y-4'>
      <span className='text-sm md:text-base text-gray-700 font-bold'>
        {match.time}
      </span>
      <div className="flex justify-center items-center space-x-4 md:space-x-5">
        <span className="uppercase">{timeA.slug}</span>
        <img src={`/img/flags/${timeA.slug}.png`} />

        <input type="number" min={0} max={90} className='input-number' />
        <span className='px-2 text-red-500 font-bold'>X</span>              
        <input type="number" min={0} max={90} className='input-number' />

        <img src={`/img/flags/${timeB.slug}.png`} />
        <span className="uppercase">{timeB.slug}</span>
      </div>
    </div>
  )
}

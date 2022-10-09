import { useLocalStorage } from 'react-use';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  homeTeamScore: yup.number().required().min(0).integer(),
  awayTeamScore: yup.number().required().min(0).integer(),
});

export const Card = (props) => {
  const { 
    gameId, 
    homeTeam, 
    awayTeam, 
    gameTime, 
    homeTeamScore, 
    awayTeamScore,
    disabled = false
  } = props;

  const [auth] = useLocalStorage('copa.auth');

  const formik = useFormik({
    onSubmit: async (values) => {
      const response = await axios({
        method: 'post',
        baseURL: import.meta.env.VITE_API_URL, 
        url: '/hint',
        headers: {
          authorization: `Bearer ${auth.accessToken}`
        },
        data: {
          ...values,
          gameId
        }
      })
    },
    initialValues: {
      homeTeamScore,
      awayTeamScore
    },
    validationSchema
  })

  return (  
    <div className='rounded-xl border border-gray-300 p-4 text-center space-y-4'>
      <span className='text-sm md:text-base text-gray-700 font-bold'>
        {gameTime}
      </span>

      <form 
        onSubmit={formik.handleSubmit}
        className="flex justify-center items-center space-x-4 md:space-x-5"
      >
        <span className="uppercase">{homeTeam}</span>
        <img src={`/img/flags/${homeTeam}.png`} />

        <input type="number" 
          min={0} max={90} 
          className='input-number' 
          name="homeTeamScore"
          value={formik.values.homeTeamScore}
          onChange={formik.handleChange}
          onBlur={formik.handleSubmit}
          disabled={disabled}
        />
        
        <span className='px-2 text-red-500 font-bold'>X</span>              
        
        <input type="number" 
          min={0} max={90} 
          className='input-number' 
          name="awayTeamScore"
          value={formik.values.awayTeamScore}
          onChange={formik.handleChange}
          onBlur={formik.handleSubmit}
          disabled={disabled}
        />

        <img src={`/img/flags/${awayTeam}.png`} />
        <span className="uppercase">{awayTeam}</span>
      </form>
    </div>
  )
}

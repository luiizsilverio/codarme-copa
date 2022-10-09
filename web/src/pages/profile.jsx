import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, SignOut } from 'phosphor-react';
import { useAsync, useLocalStorage } from 'react-use';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import axios from 'axios';

import { Card } from '../components/card';
import { DateSelect } from '../components/date-select';

const initialDate = new Date(2022, 10, 20);

const Profile = () => {
  const { username } = useParams();
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [auth, setAuth] = useLocalStorage('copa.auth', {});
  const navigate = useNavigate();

  const games = useAsync(async () => {
    try {
      const res = await axios({
        method: 'get',
        baseURL: import.meta.env.VITE_API_URL,
        url: '/games',
        params: {
          gameTime: currentDate
        }
      })
      return res.data;
    } catch (err) {
      console.warn(err.message);
      toast.error('Erro ao carregar os jogos');
      return [];
    }
  }, [currentDate])
  

  const user = useAsync(async () => {
    try {
      const res = await axios({
        method: 'get',
        baseURL: import.meta.env.VITE_API_URL,
        url: `/users/hints/${username}`        
      })

      console.log(res.data)
      const hintsMap = res.data.hints.reduce((acc, hint) => {
        acc[hint.gameId] = {
          homeTeamScore: hint.homeTeamScore,
          awayTeamScore: hint.awayTeamScore
        }
        return acc;
      }, {});

      return {
        ...res.data,
        hintsMap,
      }
    }
    catch (err) {
      console.warn(err.message);
      toast.error('Erro ao carregar os palpites');
      return [];
    }
  }, [currentDate])


  const logout = () => {
    setAuth({});  
    navigate('/login');
  }

  const isLoading = games?.loading || user?.loading;
  const hasError = games?.error || user?.error;
  const isReady = !isLoading && !hasError;


  // if (!auth?.user?.id) {
  //   return <Navigate to="/" replace={true} />
  // }

  return (
    <>
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-3xl pt-2 md:pr-4 flex justify-between">
          <img src="img/logo/logo-fundo-vermelho.svg" className="w-28 md:w-40" />
          {auth?.user?.id && (
            <div title="Sair" onClick={logout} className="p-2 cursor-pointer">
              <SignOut 
                size={32} weight='bold' 
                className="text-white hover:scale-110" 
              />
            </div>
          )}
          </div>
      </header>

      <main className='space-y-4'>
        <section id="header" className='bg-red-500 text-white p-4'>
          <div className="container max-w-3xl space-y-2">
            <Link to="/dashboard">            
              <ArrowLeft size={32} weight='bold' className="text-white hover:scale-110" />
            </Link>
            <h3 className='text-2xl font-bold'>{ user?.name }</h3>
          </div>
        </section>

        <section id="content" className='container max-w-3xl p-4 space-y-4'>

          <h2 className='text-red-500 text-xl font-bold'>Seus palpites</h2>
          
          <DateSelect currentDate={currentDate} onChange={setCurrentDate} />

          <div className='space-y-4'>
            {isLoading && 'Carregando jogos...'}
            {hasError && 'Ops! Algo deu errado'}

            {isReady && (
              games?.value?.map((game) => (
                <Card
                  key = {game.id}
                  gameId = {game.id}
                  homeTeam = {game.homeTeam}
                  awayTeam = {game.awayTeam}
                  gameTime = {format(new Date(game.gameTime), 'H:mm')}
                  homeTeamScore={user?.value?.[game.id]?.homeTeamScore || ''}
                  awayTeamScore={user?.value?.[game.id]?.awayTeamScore || ''}
                  disabled={true}
                />
              ))
            )}                      
          </div>
          
        </section>
      </main>
    </>
  )
}

export default Profile;
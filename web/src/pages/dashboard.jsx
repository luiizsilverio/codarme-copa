import { Link, Navigate } from 'react-router-dom';
import { useLocalStorage, useAsync } from 'react-use';
import { format } from 'date-fns';
import axios from 'axios';

import { UserCircle } from 'phosphor-react';
import { Card } from '../components/card';
import { DateSelect } from '../components/date-select';
import { useState } from 'react';

const initialDate = new Date(2022, 10, 20);

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [auth] = useLocalStorage('copa.auth', {});

  const state = useAsync(async () => {
    const res = await axios({
      method: 'get',
      baseURL: import.meta.env.VITE_API_URL,
      url: '/games',
      params: {
        gameTime: currentDate
      }
    })
    return res.data;
  }, [currentDate])

  
  if (!auth?.user?.id) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <>
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-3xl pt-2 md:pr-4 flex justify-between">
          <img src="img/logo/logo-fundo-vermelho.svg" className="w-28 md:w-40" />
          <Link to="/profile">
            <UserCircle size={32} weight='bold' className="text-white hover:scale-110" />
          </Link>
        </div>
      </header>

      <main>
        <section id="header" className='bg-red-500 text-white p-4'>
          <div className="container max-w-3xl space-y-2">
            <span>Olá Luiiz</span>
            <h3 className='text-2xl font-bold'>Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content" className='container max-w-3xl p-4 space-y-4'>

          <DateSelect currentDate={currentDate} onChange={setCurrentDate} />

          <div className='space-y-4'>
            {state.loading && 'Carregando jogos...'}

            {state.error && 'Ops! Algo deu errado'}

            {!state.loading && !state.error && (
              state?.value?.map((game) => (
                <Card
                  key = {game.id}
                  gameId = {game.id}
                  homeTeam = {game.homeTeam}
                  awayTeam = {game.awayTeam}
                  gameTime = {format(new Date(game.gameTime), 'H:mm')}
                />
              ))
            )}                      
          </div>
          
        </section>
      </main>
    </>
  )
}

export default Dashboard;
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, UserCircle } from 'phosphor-react';
import { Card } from '../components/card';
import { DateSelect } from '../components/date-select';

const Dashboard = () => {
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

          <DateSelect />

          <div className='space-y-4'>
            <Card
              timeA = {{ slug: 'sui' }}
              timeB = {{ slug: 'cam' }}
              match = {{ time: '07:00' }}
            />
            
            <Card
              timeA = {{ slug: 'uru' }}
              timeB = {{ slug: 'cor' }}
              match = {{ time: '13:00' }}
            />

            <Card
              timeA = {{ slug: 'por' }}
              timeB = {{ slug: 'bra' }}
              match = {{ time: '17:00' }}
            />
          </div>
          
        </section>
      </main>
    </>
  )
}

export default Dashboard;
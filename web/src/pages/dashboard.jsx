import { Link } from 'react-router-dom';
import { UserCircle } from 'phosphor-react';

const Dashboard = () => {
  return (
    <div>
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

        <section id="content" className='container max-w-3xl p-4'>
          <div className='rounded-xl border border-gray-300 p-4 text-center'>
            <span className='text-sm md:text-base text-gray-700 font-bold'>
              7:00
            </span>
            <div className="flex">
              <span className="uppercase">sui</span>
            </div>
          </div>

        </section>
      </main>
    </div>
  )
}

export default Dashboard;
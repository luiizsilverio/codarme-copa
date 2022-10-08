import { Link, Navigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use';

function Home() {
  const [auth] = useLocalStorage('copa.auth', {});

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <div className={`
      md:h-screen bg-red-700 text-white flex flex-col items-center
      p-4 md:p-7 space-y-6
    `}>
      <header className="md:p-3">
        <img src="img/logo/logo.svg" className="w-32 md:w-40" />
      </header>

      <div className={`
        container space-y-6 md:space-y-0 md:space-x-6 max-w-4xl
        flex-1 flex flex-col md:flex-row items-center p-4
      `}>
        <div className='flex md:flex-1 justify-center'>
          <img src="img/img.png" className='w-full max-w-xs md:max-w-md' />
        </div>

        <div className='flex flex-col md:flex-1 space-y-4 md:space-y-6 md:px-6'>
          <h1 className='text-2xl sm:text-3xl text-center md:text-left font-bold'>Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>

          <Link to="/signup"
            className='text-red-700 bg-white text-xl px-8 py-4 rounded-xl text-center hover:bg-orange-200'
          >
            Criar minha conta
          </Link>

          <Link to="/login"
            className='text-white border borer-white text-xl px-8 py-4 rounded-xl text-center bg-red-900 hover:bg-red-800'
          >
            Fazer login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

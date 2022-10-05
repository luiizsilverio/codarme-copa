import { Link } from "react-router-dom";
import { ArrowLeft } from 'phosphor-react';
import { Input } from "~/components/input";

const SignUp = () => {
  return (
    <>
      <header className="flex justify-center p-4 border-b bg-red-300">
        <img src="img/logo/logo-fundo-vermelho.svg" className="w-32 md:w-40" />
      </header>

      <main className="p-4 container max-w-2xl">
        <div className="py-4 flex space-x-4 items-center">
          <Link to="/">
            <ArrowLeft size={32} weight='bold' className="text-red-700 hover:scale-110"/>
          </Link>
          <h2 className="text-xl font-bold">Crie sua conta</h2>
        </div>

        <form className="space-y-4">
          <Input
            name="name" type="text"
            label="Seu nome"
            placeholder="Digite seu nome"
          />
          <Input
            name="namename" type="text"
            label="Seu nome de usuário"
            placeholder="Digite um nome de usuário"
          />
          <Input 
            name="email" type="text" 
            placeholder="Digite seu e-mail"
            label="Seu e-mail"
          />          
          <Input 
            name="password" type="password" 
            placeholder="Digite sua senha"
            label="Sua senha"
          />         

          <Link to="/dashboard"
            className='block text-center w-full bg-red-500 text-white px-6 py-3 text-lg rounded-xl hover:bg-red-800'
          >
            Criar minha conta
          </Link>
        </form>
      </main>
    </>
  )
}

export default SignUp;

import { Link } from "react-router-dom";
import { ArrowLeft } from 'phosphor-react';
import { Input } from "~/components/input";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const SignUp = () => {
  const formik = useFormik({
    onSubmit: (values) => {
       alert(JSON.stringify(values, null, 2));
    },
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: ''
    }
  })

  
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

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <Input
            name="name" type="text"
            label="Seu nome"
            placeholder="Digite seu nome"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            name="username" type="text"
            label="Seu nome de usuário"
            placeholder="Digite um nome de usuário"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input 
            name="email" type="text" 
            placeholder="Digite seu e-mail"
            label="Seu e-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />          
          <Input 
            name="password" type="password" 
            placeholder="Digite sua senha"
            label="Sua senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />         

          <button
            type="submit"
            className='block text-center w-full bg-red-500 text-white px-6 py-3 text-lg rounded-xl hover:bg-red-800'
          >
            Criar minha conta
          </button>
        </form>
      </main>
    </>
  )
}

export default SignUp;

import { Link, Navigate } from "react-router-dom";
import { ArrowLeft } from 'phosphor-react';
import { useLocalStorage } from "react-use";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import { Input } from "~/components/input";

const validationSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  username: yup.string().required('Nome de usuário obrigatório'),
  email: yup.string().email('E-mail inválido')
		.required('E-mail obrigatório'),  
  password: yup.string()
		.min(4, 'Informe no mínimo 4 dígitos')
		.required('Senha obrigatória')
})

const SignUp = () => {
  const [auth, setAuth] = useLocalStorage('copa.auth', {});

  const formik = useFormik({
    onSubmit: async (values) => {
      const response = await axios({
        method: 'post',
        baseURL: import.meta.env.VITE_API_URL, 
        url: '/users',
        data: values
      });
    },
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: ''
    },
    validationSchema
  })

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <>
      <header className="flex justify-center p-4 border-b bg-red-300">
        <Link to="/">
          <img src="img/logo/logo-fundo-vermelho.svg" className="w-32 md:w-40" />
        </Link>
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
            error={formik.touched.name && formik.errors.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            name="username" type="text"
            label="Seu nome de usuário"
            placeholder="Digite seu username"
            error={formik.touched.username && formik.errors.username}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input 
            name="email" type="text" 
            placeholder="Digite seu e-mail"
            label="Seu e-mail"
            error={formik.touched.email && formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />          
          <Input 
            name="password" type="password" 
            placeholder="Digite sua senha"
            label="Sua senha"
            error={formik.touched.password && formik.errors.password}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />         

          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className={`
              block text-center w-full bg-red-500 text-white px-6 py-3 text-lg 
              rounded-xl hover:bg-red-800 disabled:opacity-50
            `}
          >
            {formik.isSubmitting ? 'Aguarde...' : 'Criar minha conta'}
          </button>
        </form>
      </main>
    </>
  )
}

export default SignUp;

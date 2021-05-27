
import {useState ,useContext } from 'react'
import Layout from "../components/Layout"
import { gql  , useMutation } from "@apollo/client";
import { useForm } from '../util/hook';
import { AuthContext } from '../context/auth';
import {useRouter} from 'next/router'

const login = () => {
   const router = useRouter();
  const {user,  login} = useContext(AuthContext)
  if(user){
    router.push('/')
  }
 const [errors , setErrors] =useState({})
  const { onChange, onSubmit, values } = useForm(loginUser, {
    username: '',
    password: ''
  });

   
  const [loginUserr, { loading }] = useMutation(LOGIN_USER, {
    update(
      _,
      {
        data: { login: userData }
      }
    ) {
      router.push('/');
      login(userData)
    },
    onError(err) {
      if(err.graphQLErrors){
        if(err.graphQLErrors[0]){
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
        }
      }
    },
    variables: values
  });

    function loginUser() {
        loginUserr();
    }
    return (
        <Layout>

        <div>
        <form onSubmit={onSubmit} class="container w-full max-w-lg  ">


  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        username
      </label>
      <input  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"   label="username"
          placeholder="Username.."
          name="username"
          type="text"
          value={values.username}
          onChange={onChange} />
        </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
      Password
      </label>
      <input  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"   label="Password"
          placeholder="Password.."
          name="password"
          type="password"
          value={values.password}
          onChange={onChange} />
        </div>
  </div>

  <button type='submit' class=" container bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  login
</button>

</form>


 

{errors && Object.keys(errors).length > 0 && (
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>
              <span class="font-bold block sm:inline">{value}</span></li>
            ))}
          </ul>
        </div>
      )}

        </div>
        </Layout>
    )
}

export default login

const LOGIN_USER = gql`
mutation login($username: String!,$password: String!) {
    login(username:$username,password:$password){
        id
    email
    token
    username
    createdAt
  }
}
`;
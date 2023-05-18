import { AuthContext } from '../../context/AuthContext'
import './Login.css'
import { useState, useContext } from 'react'
import getUser from '../../services/getUser'

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { signIn } = useContext(AuthContext)
    

    const getData = async () => {
        const response = await getUser(name,password)
        console.log(response)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name === "" || password === "") {
            setError(true)
            return
        }

        setError(false)
        //getData()
        signIn(name,password)
    }

    return (
        <section className='container'>
            <div className='row' id='row-container'>
                <form onSubmit={handleSubmit}
                    className="col-md-4 d-flex p-3 flex-column justify-content-center offset-md-4 border border-black gap-3 rounded">
                    <input className='rounded-pill' placeholder='Correo electrónico' type="text"
                        value={name} onChange={e => setName(e.target.value)} />
                    <input className='rounded-pill' placeholder='Contraseña' type="password"
                        value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='rounded-pill bg-danger border-0' id='btn-session'>Iniciar sesión</button>
                </form>
            </div>
            <div className='row'>
                <div className='offset-md-4'>
                    {error && <p>Todos los campos son obligatorios</p>}
                </div>
            </div>

        </section>
    )
}

export default Login
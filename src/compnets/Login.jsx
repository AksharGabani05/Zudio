import React, { useEffect, useState } from 'react'
import { Container, Col } from 'react-bootstrap'
import Header from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
let instilize = {
  username: "",
  email: "",
  password: ""
}
const Login = () => {
  let [user, setUser] = useState(instilize)
  let [login, setLogin] = useState(false)
  let [userdata, setUserdata] = useState([])
  let location=useNavigate

  const HandelInput = (e) => {
    let { name, value } = e.target
    setUser((old) => ({ ...old, [name]: value }))
    console.log(user)
  }
  const HandelSign = (e) => {
    e.preventDefault();
    setUserdata([user, ...userdata])
    alert('login sucesful')
    setLogin(true)
    location('/ ')
  }

  useEffect(() => {
    localStorage.setItem("ProdcutList", JSON.stringify(userdata))
  }, [userdata])
  const HandelLogin = (e) => {
    e.preventDefault()

    userdata.map((e) => {
      let ema = 0
      let pas = 0
      if (e.email == user.email) {
        ema = 1
        if (e.password == user.password) {
          pas = 1
        }
      }
      if (ema == 1) {
        if (pas == 1) {
          alert("login suscefuuly")
          location('/')
        }
        else {
          alert("plese check your possword")
        }

      }
      else {
        alert("check email or first sign up")
      }
    })
  }
  const HandelAccount=(lo)=>{
    setLogin(lo)
  }
  console.log(login);

  return (
    <>
      <Header />
      <section>
        <Container>
        {
          login ?
            <Col sm={12} md={6} className='mx-auto my-5 py-5 ' style={{ height: '65vh' }}>
              <form onSubmit={HandelLogin}>
                <input type="email" className='col-12 border border-2 border-black border-top-0 border-start-0 border-end-0 mb-4 text-capitalize' onChange={HandelInput}
                  name='email' placeholder='enter your email' />
                <input type="password" className='col-12 border border-2 border-black border-top-0 border-start-0 border-end-0 mb-4 text-capitalize' onChange={HandelInput}
                  name='password' placeholder='enter the password' />
                <input type="submit" className='btn btn-outline-primary text-uppercase col-12' value="login" />
                <button className='bg-white pt-4 text-uppercase border-0' onClick={()=>HandelAccount(false)}>don't have any account ?</button>
              </form>
            </Col>
            :
            <Col sm={12} md={6} className='mx-auto my-5 py-5 ' style={{ height: '65vh' }} >
              <form onSubmit={HandelSign}>
                <input type="text" className='col-12 border border-2 border-black border-top-0 border-start-0 border-end-0 mb-4 text-capitalize' onChange={HandelInput} name='username' placeholder='enter your username' />
                <input type="email" className='col-12 border border-2 border-black border-top-0 border-start-0 border-end-0 mb-4 text-capitalize' onChange={HandelInput} name='email' placeholder='enter your email' />
                <input type="password" className='col-12 border border-2 border-black border-top-0 border-start-0 border-end-0 mb-4 text-capitalize' onChange={HandelInput} name='password' placeholder='enter the password' />
                <input type="submit" value="sign-up" className='btn btn-outline-primary text-uppercase col-12' />
                <button className='bg-white pt-4 text-uppercase border-0' onClick={()=>HandelAccount(true)}>i have already account ?</button>
              </form>
            </Col>
        }
        </Container>
        </section>
      <Footer />
    </>
  )
}

export default Login
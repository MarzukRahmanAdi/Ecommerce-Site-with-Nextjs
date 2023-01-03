import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'


type LoginMail = {
  email: string;
  password: string;
}

const AdminLogin = () => {
  const { register, handleSubmit, errors } = useForm();
  const [registering, setRegistering] = useState(false)
  const router = useRouter()

  const onSubmit = async (data: LoginMail) => {
    setRegistering(true)

    const res = await postData(`/api/login`, {
      email: data.email,
      password: data.password
    });

    setRegistering(false)
    if(res.success) {
      console.log(res)
      localStorage.setItem("token", res.message)
      router.push("/")
    }else{ 
      alert(res.message)
    }
    console.log(res);
  };

  useEffect(() => {
    (async() => {
      const user = localStorage.getItem('token');
      if(!user) return
      const rawResponse = await fetch('/api/getuserdetails', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token: user})
      });
      const content = await rawResponse.json();
      console.log(content.message);
      if(content.message.role === "admin"){
        router.push("/dashboard")
      }
    })()
  }, [router.isReady])
  

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a><i className="icon-left"></i> Back to store</a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Log in</h2>
            <p className="form-block__description">Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="email" 
                  type="text" 
                  name="email"
                  value={"admin@admin.com"}

                  ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }

                {errors.email && errors.email.type === 'pattern' && 
                  <p className="message message--error">Please write a valid email</p>
                }
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="Password" 
                  value={1234}
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                    <input 
                      type="checkbox" 
                      name="keepSigned" 
                      id="check-signed-in" 
                      ref={register({ required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>Keep me signed in</p>
                  </label>
                </div>
                <a href="/forgot-password" className="form__info__forgot-password">Forgot password?</a>
              </div>

              <div className="form__btns">
                <button type="button" className="btn-social google-btn"><img src="https://cdn-icons-png.flaticon.com/512/6830/6830335.png" width={30} alt="gmail" />Admin Login</button>
              </div>

              <button type="submit" disabled={registering} className="btn btn--rounded btn--yellow btn-submit">{registering ? "Loging you in" :"Login"}</button>

              <p className="form__signup-link">Not a member yet? <a href="/register">Sign up</a></p>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default AdminLogin
  
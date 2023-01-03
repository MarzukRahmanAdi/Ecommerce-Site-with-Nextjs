import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type LoginMail = {
  email: string;
  password: string;
  name: string;
}


const RegisterPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const [registering, setRegistering] = useState(false)
  const router = useRouter()
  const onSubmit = async (data: LoginMail) => {
    // console.log(data);
    setRegistering(true)
    const res = await postData(`/api/register`, {
      email: data.email,
      password: data.password,
      name: data.name,
    });
    setRegistering(false)
    if(res.success) {
      localStorage.setItem("token", res.message)
    }else{ 
      alert(res.message)
    }
    console.log(res);
  };

  useEffect(() => {
    const user = localStorage.getItem("token")
    if(user){
      router.push("/")
    }
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
          <h2 className="form-block__title">Create an account and discover the benefits</h2>
          <p className="form-block__description">Lorem Ipsum is simply dummy text of the printing 
          and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          
          <form className="form" method='POST'  onSubmit={handleSubmit(onSubmit)}>
            <div className="form__input-row">
              <input className="form__input" placeholder="Name" name='name' ref={register({ required: true })} type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input"  ref={register({ required: true })} placeholder="Email"name='email'  type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" ref={register({ required: true })} type="Password"  name='password' placeholder="Password" />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                  <input name="signed-in" type="checkbox" id="check-signed-in" />
                  <span className="checkbox__check"></span>
                    <p>I agree to the Google Terms of Service and Privacy Policy</p>
                </label>
              </div>
            </div>

            <input disabled={registering} type="submit" className="btn btn--rounded btn--yellow btn-submit" value={registering ? "Registering" :"Register"} />

            <p className="form__signup-link">
              <Link href="/login">
                <a href="#">Are you already a member?</a>
              </Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  </Layout>
  )

}
  
export default RegisterPage
  
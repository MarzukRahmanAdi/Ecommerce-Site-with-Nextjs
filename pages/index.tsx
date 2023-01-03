import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  const keyboardLink = "https://images.pexels.com/photos/7915287/pexels-photo-7915287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const mouseLink = "https://images.pexels.com/photos/5241055/pexels-photo-5241055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const headphoneLink = "https://images.pexels.com/photos/7915497/pexels-photo-7915497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  

  return (
    <Layout>
      <PageIntro />
      <ProductsFeatured />
      <Footer />
    </Layout>
  )
}


export default IndexPage
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

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: `url(${mouseLink})`}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Mouse Collection</h3>
              <a href="#" className="btn btn--rounded">Show Collection</a>
            </div>
          </article>
          
          <article style={{backgroundImage: `url(${keyboardLink})`}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Keyboard Collection</h3>
              <a href="#" className="btn btn--rounded">More details</a>
            </div>
          </article>
          
          <article style={{backgroundImage: `url(${headphoneLink})`}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Headphones</h3>
              <a href="#" className="btn btn--rounded">VIEW ALL</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>All purchases over $199 are eligible for free shipping via USPS First Class Mail.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Easy Payments</h4>
                <p>All payments are processed instantly over a secure payment protocol.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Money-Back Guarantee</h4>
                <p>If an item arrived damaged or you've changed your mind, you can send it
                back for a full refund.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Finest Quality</h4>
                <p>Designed to last, each of our products has been crafted with the finest materials.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage
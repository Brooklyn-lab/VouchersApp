import './about.scss'

function About(): JSX.Element {
  return (
    <section className="about">
      <p className="content-text-strong">We search hundreds of money-saving deals to find the best for you</p>
      <p className="content-text">
        Looking for apparel, footwear, electronics, or geeky gifts at reasonable prices? We are here to help.
        ProfitVouchers.com has discount codes, coupons, and vouchers for the most popular stores, including
      </p>
      <ul className="content-list">
        <li className="content-list-item">BestBuy</li>
        <li className="content-list-item">Forever 21</li>
        <li className="content-list-item">Just Geek</li>
        <li className="content-list-item">Macy’s</li>
        <li className="content-list-item">Marks & Spencer</li>
        <li className="content-list-item">Rohan</li>
        <li className="content-list-item">Walmart.</li>
      </ul>
      <p className="content-text-strong">A shorter path to benefit</p>
      <p className="content-text">
        We are an old hand at finding exclusive offers so that you can spend less and buy more from your favorite
        merchants.
      </p>
      <p className="content-text">Keep up with updates so as not to miss special offers!</p>
      <p className="content-text">If you have any questions, suggestions, or feedback, please, get in touch with us.</p>
    </section>
  )
}

export default About

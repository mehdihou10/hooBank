import styles from "./style";
import {Navbar,Hero,Stats,Business,Billing,CardDeal,Testimonials,Clients,CTA,Footer} from './components/index';

const  App = ()=> (
    <div className="font-poppins text-white">
    
    <div className={`bg-primary ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>


    <div className={`bg-primary ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
      </div>
    </div>

    <Footer />


    </div>
  )


export default App

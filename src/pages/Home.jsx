import Header from '../components/Header'
import ProductList from '../components/BookList'
import Footer from '../components/Footer/index'

function Home(){
    return(
        <div  data-theme="luxury" className='container mx-auto main-layout'>
            <Header
                title = "Welcome to meminn BookStore"
                slogan = "Nice to see u"
            />
            <ProductList className="content"/>
            <Footer className="footer" />
        </div>
    )
}

export default Home

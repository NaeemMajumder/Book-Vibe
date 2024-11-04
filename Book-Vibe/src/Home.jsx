import { useLoaderData } from 'react-router-dom';
import Hero from './header/Hero';
import Books from './main/Books';

const Home = () => {

    return (
        <>
        
            <section>
                <Hero></Hero>
            </section>

            <section  className='my-28 max-w-[1350px] m-auto'>

                <h1 className='text-center text-5xl font-bold mb-16'>Books</h1>

                <Books></Books>


            </section>  
        
        
        </>
    );
};

export default Home;
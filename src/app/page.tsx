import Header from './components/Header'
import { FaArrowRight } from 'react-icons/fa';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className='flex flex-col justify-center gap-6 bg-gray800 px-6 md:w-2/5 md:px-20 bg-gray-100 w-full h-screen '>
        <p className='text-xl text-gray-800 md:tex-3xl md:text-3xl md:leading-normal'>
          <strong>Welcome to Next.ts </strong> this is a proyect tutorial
        </p>
        <div className='bg-blue-600 rounded-lg p-4 uppercase text-center text-white text-sm item-center flex gap-2
        
        justify-center'>

          <a href="/dashboard" className='text-md'>
            login</a>
          <FaArrowRight />
        </div>
      </div>
    </main>

  );
}

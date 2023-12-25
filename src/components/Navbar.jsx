import { logo }  from '../assets'

const Navbar = () => {

    return (
    <nav className='w-full flex justify-between font-nunito font-bold'>        
        <img src={logo} alt='logo'/>
        <div className='flex justify-between items-center px-8'>
            <button className=' md:hidden rounded-lg py-4 px-8 md:py-1 hover:bg-neutral-200 transition duration-300'>На Главную</button>
            <button className='mr-8 md:hidden rounded-lg py-4 px-8 md:py-1 hover:bg-neutral-200 transition duration-300'>Контакты</button>
            <button className='border rounded-lg py-4 px-8 md:py-1 hover:bg-neutral-200 transition duration-300'>Записаться</button>
        </div>
    </nav>
    )
}

export default Navbar
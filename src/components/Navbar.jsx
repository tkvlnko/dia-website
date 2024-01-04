import { logo }  from '../assets'

function Navbar () {
    return (
    <nav className='w-full flex justify-between font-nunito font-bold fixed top-0 px-8 py-3 bg-[#F8F6F4] z-[1000]'>        
        <img src={logo} alt='logo'/>
        <div className='flex justify-between items-center px-8'>
            <a className='md:hidden rounded-lg py-2 px-6 md:py-1 hover:bg-neutral-200 transition duration-300' href="#contacts">Контакты</a>
            <a className='mr-8 md:hidden rounded-lg py-2 px-6 md:py-1 hover:bg-neutral-200 transition duration-300' href="#main">На главную</a>
            <button className='border rounded-lg py-2 px-6 md:py-1 hover:bg-neutral-200 transition duration-300' data-toggle="modal" data-target="#exampleModal1">Записаться</button> 
        </div>
    </nav>
    )
}

export default Navbar
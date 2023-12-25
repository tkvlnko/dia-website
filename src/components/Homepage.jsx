import { homepageimg } from "../assets"

const Homepage = () => {
  return (
    <div className="flex justify-between items-center px-20 w-full md:justify-center py-20 lg:flex-col">
        <div className="content flex flex-col  max-w-[700px] px-8 ">
            <h1 className="font-shadow text-7xl md:text-5xl text-basegreen ">Супер <br/> заголовок</h1>
            <p className="md:text-[12px]">Привет! Я Марина Ионычева, гештальт-терапевт, семейный психолог. Помогаю своим клиентам повышать качество жизни, справляться с эмоциями, выстраивать личные границы, учиться конфликтовать так, чтобы это не разрушало отношения.</p>
        </div>
        <div className="flex content-image  flex-1 md:hidden">
            <img src={homepageimg} className=" lg:h-[620px] min-w-[400px] "/>
        </div>
    </div>
  )
}

export default Homepage
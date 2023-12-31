import { imagepersonal } from "../assets"

const About = () => {
  return (
    <div className="flex justify-between flex-row px-[200px] xl:px-10 py-10 w-full text-[#435327]">
        <div className="m-5 md:hidden">
            <img src={imagepersonal}/>
        </div>

        <div className="flex flex-col justify-center ">
            <h1 className="text-basegreen font-shadow mb-10 text-2xl">Диана Ибрагимова</h1>
            <div className="flex items-center py-5">
                <div className="bg-[#637446] w-3 h-3 rounded-xl mr-5"></div>
                <p className="font-nunito text-[18px]">Семейный психолог</p>
            </div>
            <div className="flex items-center py-5">
                <div className="bg-[#637446] w-3 h-3 rounded-xl mr-5"></div>
                <p className="font-nunito text-[18px]">Тренер ИРСУ 2010-2023</p>
            </div>
            <div className="flex items-center py-5">
                <div className="bg-[#637446] w-3 h-3 rounded-xl mr-5"></div>
                <p className="font-nunito text-[18px]">Приемная мама</p>
            </div>
            <div className="flex items-center py-5">
                <div className="bg-[#637446] w-3 h-3 rounded-xl mr-5"></div>
                <p className="font-nunito text-[18px]">Еще кто-то</p>
            </div>
            <div></div>
        </div>
                
    </div>
  )
}

export default About
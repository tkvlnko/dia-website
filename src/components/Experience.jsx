import { webinar_illustration } from "../assets"
import Card from "../containers/Card"

const Experience = () => {
    return (
    <div className="z-10 flex flex-col justify-center w-full p-3 items-center">
        <div className="absolute w-[200px] h-[200px] bg-[#DEAA23] blur-[150px] bottom-200 left-0"></div>
        <div className="absolute w-[300px] h-[300px] bg-[#83956B] blur-[150px] bottom-500 right-10"></div>

        <div><h1 className="font-shadow text-xl text-center mb-10 static text-basegreen">С какими запросами ко мне приходят:</h1></div>
        
        <div className="flex flex-row justify-center md:flex-col">
            <div className="justify-center">
                <Card title='Отношения с собой' content='Неуверенность или эмоциональные вспышки, непонимание своих личных границ и неумение их отстаивать, непонимание своих желаний'/>
                <Card title='Отношения с собой' content='Неуверенность или эмоциональные вспышки, непонимание своих личных границ и неумение их отстаивать, непонимание своих желаний'/>
            </div>
            
            <div className="mx-10 flex items-center min-w-[200px] lg:hidden"><img src={webinar_illustration} /></div>
            
            <div>
                <Card title='Отношения с собой' content='Неуверенность или эмоциональные вспышки, непонимание своих личных границ и неумение их отстаивать, непонимание своих желаний'/>
                <Card title='Отношения с собой' content='Неуверенность или эмоциональные вспышки, непонимание своих личных границ и неумение их отстаивать, непонимание своих желаний'/>
            </div>
        </div>

        
    </div>
    )
}

export default Experience
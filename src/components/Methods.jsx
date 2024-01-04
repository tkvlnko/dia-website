import { plant1 } from "../assets"

const Methods = () => {
    return (
        <div className="px-8"> 
            <h1 className="text-xl text-center mb-5 static z-10">Методы, которые я использую в работе:</h1>
            <div className="absolute w-[200px] h-[200px] bg-[#d3a44d] blur-[120px] right-[30%]"></div>

            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center mr-[100px] md:mr-0 font-nunito">
                    <div className="flex justify-between lg:flex-col">
                        <div className="methods-item"><a href="https://ru.wikipedia.org/wiki/%D0%90%D1%80%D1%82-%D1%82%D0%B5%D1%80%D0%B0%D0%BF%D0%B8%D1%8F">Арт-терапия</a></div>
                        <div className="methods-item"><a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B3%D0%BD%D0%B8%D1%82%D0%B8%D0%B2%D0%BD%D0%BE-%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D1%82%D0%B5%D1%80%D0%B0%D0%BF%D0%B8%D1%8F">Когнитивно-поведенческая терапия</a></div>
                    </div>
                    <div className="flex justify-between lg:flex-col">
                        <div className="methods-item w-full">Эмоционально-образная терапия</div>
                        <div className="methods-item">Песочная терапия</div>
                    </div>
                    <div className="flex justify-between lg:flex-col">
                        <div className="methods-item ">Семейная терапия</div>
                        <div className="methods-item w-full">Экзистенциальный анализ</div>
                    </div>
                    <div className="flex justify-between lg:flex-col">
                        <div className="methods-item w-full">Когнитивно-поведенческая терапия</div>
                        <div className="methods-item">Арт-терапия</div>
                    </div>
                </div>
                <div className="flex max-w-[300px] h-full p-3 md:hidden justify-center items-center"><img className="plant" src={plant1}/></div>
        </div>
        </div>

    )
}

export default Methods
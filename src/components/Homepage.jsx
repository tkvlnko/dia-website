import { homepageimg } from "../assets"
import { useEffect } from 'react'
import { vk_grey, whatsapp_grey, tg_grey, inst_grey } from "../assets"



const Homepage = () => {
  useEffect(() => {
    

    const btn2 = document.querySelector('[data-toggle="modal"]');
    const windowId = btn2.getAttribute('data-target');
    const window = document.querySelector(windowId);
    const windowInner = window.children[0]
    const closeBtn = window.querySelector('[data-dismiss="modal"]');

    btn2.addEventListener('click', () => {
        window.classList.remove('hidden');
        window.classList.add('flex',  'overlay');
        windowInner.classList.add('modal-inner');

    closeBtn.addEventListener('click', () => {
        window.classList.remove('flex',  'overlay');
        window.classList.add('hidden');
        windowInner.classList.remove('modal-inner')
    });
    });
    return () => {};
}, [])

  return (
    <div className="flex justify-between static items-center px-20 w-full md:justify-center py-20 lg:flex-col" id='main'>
        <div className="content flex flex-col  max-w-[700px] px-8 ">
            <h1 className="font-shadow text-7xl md:text-5xl text-basegreen ">Супер <br/> заголовок</h1>
            <p className="md:text-[12px]">Привет! Я Марина Ионычева, гештальт-терапевт, семейный психолог. Помогаю своим клиентам повышать качество жизни, справляться с эмоциями, выстраивать личные границы, учиться конфликтовать так, чтобы это не разрушало отношения.</p>
        </div>
        <div className="flex content-image  flex-1 md:hidden">
            <img src={homepageimg} className=" lg:h-[620px] min-w-[400px] "/>
        </div>

        <div className="hidden absolute bottom-0 left-0" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
          <div className="modal-inner static">
            <div href="#contacts" className="flex flex-col py-8 justify-center text-center" id='contacts-list'>
            <p className="font-nunito text-black">Связаться со мной:</p>
            <div className="flex p-3 justify-center items-center">
                <div className="px-1 icon"><img width="32" height="32" src={vk_grey}/></div>
                <div className="px-1 icon"><img width="32" height="32" src={whatsapp_grey}/></div>
                <div className="px-1 icon"><img width="32" height="32" src={tg_grey}/></div>
                <div className="px-1 icon"><img width="32" height="32" src={inst_grey}/></div>
            </div>
            
        </div>
            <button type="button" className="absolute top-2 right-4" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" className="text-[20px]">&times;</span>
            </button>
          </div>
            
        </div>

    </div>
  )
}

export default Homepage
import { vk, whatsapp, telegram, google } from "../assets"

const Footer = () => {
    return (
        <div className="flex flex-col py-8 justify-center text-center" id='contacts' name="contacts">
            <p className="font-nunito text-white">Связаться со мной:</p>
            <div className="flex p-3 justify-center items-center">
                <div className="px-3"><img width="36" height="36" src={vk}/></div>
                <div className="px-1"><img width="30" height="30" src={whatsapp}/></div>
                <div className="px-1"><img width="44" height="44" src={telegram}/></div>
                <div className="px-1"><img width="30" height="30" src={google}/></div>
            </div>
            <p className="credits">© Made by TK, 2023</p>
        </div>
    )
}

export default Footer

const Card = ({title, content}) => (
    <div className="z-10 rounded-xl shadow-lg backdrop-blur-xl py-8 px-6 max-w-[400px] font-nunito mb-5 mx-5 bg-[#F8F8F8] bg-opacity-50 min-w-[150px]">
        <h1 className="font-sans mb-3 text-[16px]">{title}</h1>
        <p className="text-[14px]">{content}</p>
    </div>
)

export default Card;
import { Link } from "lucide-react";

export default function Sites() {
    return  (
    <main> 
        <img 
        className=" w-full"
        src="https://i.pinimg.com/originals/da/8d/d2/da8dd2f073a7588ec42251eb421f4799.gif" 
        alt="https://br.pinterest.com/pin/49328558410640724/" />
        <div className=" absolute top-[7vw] left-[33.5vw]">
        <p className=" text-[6vw] text-blue-700">𝑴𝒆𝒖𝒔 𝑺𝒊𝒕𝒆𝒔</p>
        <p className=" text-center text-[2vw] text-blue-700">𝙘𝙡𝙞𝙦𝙪𝙚 𝙣𝙤 𝙜𝙞𝙛</p>
        </div>
        <div className="group">
            <a href="/Sites/Catpage">
            <img 
            className=" w-[25vw] h-[16vw] absolute top-[25vw] left-[15vw] group-hover:scale-125 group-hover:ease-in group-hover:duration-75"
            src="https://i.pinimg.com/originals/73/5d/73/735d73725f77188e554756b5e11a2bf1.gif"
            />
            </a>
        </div>
        <div className="group">
            <a href="/Sites/Moonpage">
            <img 
            className=" w-[25vw] h-[16vw] absolute top-[25vw] right-[15vw] group-hover:scale-125  group-hover:ease-in group-hover:duration-75"
            src="https://i.pinimg.com/originals/9f/ab/6d/9fab6d1b46ee2cc3e1f4a0aec25815dc.gif"
            />
            </a>
        </div>
    </main>
)
}

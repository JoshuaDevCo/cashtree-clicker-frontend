import { ToastContainer } from "react-toastify"
export default function Wallet() {
    return (
        <div className="p-5 flex flex-col justify-center items-center gap-5 w-full">
            <ToastContainer />
            <div className="flex justify-between items-center px-3 w-full">
                <img src="image/icon/back.png" alt="" className=" w-4 h-4" />
                <h3
                    className="text-sm text-[white]"
                    style={{ fontFamily: "archivo" }}
                >
                    Cashtree Tap to Win
                </h3>
                <img src="image/icon/menu.png" alt="" className=" w-5 h-5" />
            </div>
        <div className="flex flex-col w-full justify-center items-center gap-2">
            <img src="image/wallet/cointap.png" alt="" className="w-60 h-60"/>
            <div className="text-3xl text-white font-[Archivo] font-bold">Wallet</div>
            <div className="text-sm text-white font-[Archivo]">Your wallet connect address</div>
        </div>
        <div className="flex flex-col w-full justify-start items-center gap-4">
            <div className="flex justify-start text-white text-[17px] font-[Archivo]">Task List</div>
            <div className="flex flex-row justify-between items-center bg-gradient-to-br from-[#AE47FF] to-[#6929F1] w-full h-16 rounded-2xl ">
                <img src="image/wallet/listIcon.png" alt="" className="flex-1 w-11 h-11"/>
                <div className="flex-5 flex flex-col gap-1 justify-start items-center">
                    <div className="text-white font-[Archivo] text-sm">Connect your CTT wallet address</div>
                    <div className="text-white font-[Archivo] text-xs">Integrate now for Secure Transactions</div>
                </div>
                <img src="image/wallet/Vector.png" alt="" className="flex-1 flex"/>
            </div>
        </div>
        </div>
    )
}
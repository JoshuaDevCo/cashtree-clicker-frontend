import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/font.css";
export default function Footer() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname); // Initialize state with current pathname
  useEffect(() => {
    // Update the state whenever the location changes
    setPath(location.pathname);
  }, [location]);
  return (
    <div className="grid grid-cols-5 justify-around items-center px-3 w-full rounded-t-3xl bg-[#120F29] py-6">
      <Link
        to="/home"
        className="flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition"
      >
        {path === "/home" ? <img src="/image/footer/earn_a.webp" alt="earn" className=" w-6 h-6 " /> : <img src="/image/footer/earn.webp" alt="earn" className=" w-6 h-6 " />}
        <h1 className={`text-sm`} style={{ fontFamily: "archivo", color:  path === "/home" ? "#7520FF" : "white"}}>Earn</h1>
      </Link>
      <Link
        to="/mission"
        className="flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition"
      >
        {path === "/mission" ? <img src="/image/footer/mission_a.webp" alt="mission" className="w-6 h-6" /> : <img src="/image/footer/mission.webp" alt="mission" className="w-6 h-6" />}
        <h1 className={`text-sm`} style={{ fontFamily: "archivo", color:  path === "/mission" ? "#7520FF" : "white" }}>Mission</h1>
      </Link>
      <Link
        to="/friends"
        className="flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition"
      >
        {path === "/friends" ? <img src="/image/footer/friends_a.webp" alt="friends" className=" w-6 h-6" /> : <img src="/image/footer/friends.webp" alt="friends" className=" w-6 h-6"/>}
        <h1 className={`text-sm`} style={{ fontFamily: "archivo", color:  path === "/friends" ? "#7520FF" : "white" }}>Friends</h1>
      </Link>
      <Link
        to="/leaderboard"
        className="flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition"
      >
        {path==="/leaderboard" ? <img src="/image/footer/leaderboard_a.webp" alt="leaderboard" className=" w-6 h-6" /> : <img src="/image/footer/leaderboard.webp" alt="leaderboard" className=" w-6 h-6" />}
        <h1 className={`text-sm`} style={{ fontFamily: "archivo", color:  path === "/leaderboard" ? "#7520FF" : "white" }}>Leaderboard</h1>
      </Link>
      <Link
        to="/wallet"
        className="flex flex-col items-center justify-center cursor-pointer transform origin-bottom transition"
      >
        {path==="/wallet" ? <img
          src="/image/footer/wallet_a.webp "
          alt="wallet"
          className=" w-6 h-6"
        /> : <img src="/image/footer/wallet.webp" alt="wallet" className=" w-6 h-6" />}
        <h1 className={`text-sm`} style={{ fontFamily: "archivo", color:  path === "/wallet" ? "#7520FF" : "white" }}>Wallet</h1>
      </Link>
    </div>
  );
}

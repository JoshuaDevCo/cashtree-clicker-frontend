import Footer from "../component/Footer";
import /*toast,*/ { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import { dispatch, useSelector } from "../store";
import { getAllUsers } from "../store/reducers/wallet";
import { milestones } from "../data";
import "../css/font.css";
import Modal from "../component/modal";

export default function Leaderboard() {
    function formatNumberWithCommas(number: number, locale = "en-US") {
        return new Intl.NumberFormat(locale).format(number);
    }
    const players_state = useSelector((state) => state.wallet.users);
    const [players, setPlayers] = useState(players_state);
    useEffect(() => {
        dispatch(getAllUsers()).then(() => {
            setPlayers(players_state);
        });
    }, [players_state])

    console.log("players----------->", players);
    const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(0);
    const handleLeaderboardClick = () => {
        setIsLeaderboardOpen(0);
    }
    const handlePrizePoolClick = () => {
        setIsLeaderboardOpen(1);
    }
    const handleResultClick = () => {
        setIsLeaderboardOpen(2);
    }
    const [isMilestoneModal, setIsMilestoneModal] = useState<boolean>(false);
    const [milestone_number, setMilestoneNumber] = useState<number>(1);
    const handleCloseMilestoneModal = () => {
        setIsMilestoneModal(false);
    }
    const handleOpenMilestoneModal = (index: number) => {
        setMilestoneNumber(index);
        setIsMilestoneModal(true);
    }
    return (
        <div className="flex flex-col justify-between items-center h-full w-full bg-[linear-gradient(0deg,_var(--tw-gradient-stops))] from-[#3B1E6A] to-[#120F29]">
            <Toaster />
            <div className="flex justify-between items-center px-3 w-full py-3">
                <img src="image/icon/back.png" alt="" className=" w-4 h-4" />
                <h3
                    className="text-sm text-[white]"
                    style={{ fontFamily: "archivo" }}
                >
                    Cashtree Tap to Win
                </h3>
                <img src="image/icon/menu.png" alt="" className=" w-5 h-5" />
            </div>
            <div className="flex w-full h-8 rounded-[12px] bg-[#120F29] justify-around items-center px-5 border-b border-[#3C375C]">
                <div className={`w-1/3 h-full text-sm  ${isLeaderboardOpen == 0 ? "text-[#7520FF] border-b-2 font-bold border-[#7520FF]" : "text-[#ABA7BA] border-b border-[#3C375C]"}`} onClick={() => handleLeaderboardClick()}>LEADERBOARD</div>
                <div className={`w-1/3 h-full text-sm  ${isLeaderboardOpen == 1 ? "text-[#7520FF] border-b-2 font-bold border-[#7520FF]" : "text-[#ABA7BA] border-b border-[#3C375C]"}`} onClick={() => handlePrizePoolClick()}>PRIZE POOL</div>
                <div className={`w-1/3 h-full text-sm  ${isLeaderboardOpen == 2 ? "text-[#7520FF] border-b-2 font-bold border-[#7520FF]" : "text-[#ABA7BA] border-b border-[#3C375C]"}`} onClick={() => handleResultClick()}>RESULT</div>
            </div>
            <div className="px-2 flex flex-col justify-start items-center gap-5 w-full">
                {isLeaderboardOpen == 0 ? (
                    <div className="flex flex-col justify-start items-center gap-3 w-full min-h-[70vh] max-h-[70vh]">
                        <div className="text-white text-[32px] justify-center font-[Archivo] items-center">Leaderboard</div>
                        <div className="text-white text-[12px] justify-center items-center">Leaderboard & rank of worldwide players</div>
                        <div className="min-h-[50vh] max-h-[50vh] flex flex-col overflow-auto w-full gap-3">
                            {players?.map((player, index) => (
                                <div key={index} className="flex justify-between items-center w-full bg-[#2D2865] rounded-[12px] px-4">
                                    <div className="flex-[1.5] py-2">
                                        <img src="image/leaderboard/playerIcon.png" alt="" className="w-[42px] h-[42px]" />
                                    </div>
                                    <div className="flex-[5] flex-col  gap-2">
                                        <div className="flex text-white text-[12px] justify-start items-center font-[Archivo]">{player.username}</div>
                                        <div className="flex justify-start items-center">
                                            <img src="image/leaderboard/coin.png" alt="" />
                                            <div className="text-white text-[12px] font-[Archivo]">{player.balance}</div>
                                        </div>
                                    </div>
                                    <div className="flex-[2] flex text-2xl text-white justify-end items-center">{index + 1}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center w-full bg-gradient-to-br from-[#AE47FF] to-[#6929F1] rounded-[12px] px-4">
                            <div className="flex-[1] py-4">
                                <img src="image/leaderboard/playerIcon.png" alt="" className="w-[42px] h-[42px]" />
                            </div>
                            <div className="flex-[5] flex-col justify-start items-center">
                                <div className="flex text-white text-[12px] justify-start items-center">{players[0]?.username}</div>
                                <div className="flex justify-start items-center">
                                    <img src="image/leaderboard/coin.png" alt="" />
                                    <div className="text-white text-[12px]">{players[0]?.balance}</div>
                                </div>
                            </div>
                            <div className="flex-[2] text-2xl text-white justify-end items-center">10000+</div>
                        </div>
                    </div>
                ) : isLeaderboardOpen == 1 ? (
                    <div className="flex flex-col justify-center items-center gap-3 w-full min-h-[70vh] max-h-[70vh] m-1">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex justify-center items-center gap-1">
                                <img src="image/leaderboard/star.png" alt="" className="w-4 h-4" />
                                <h1 className="text-white text-sm">Total Current Prize</h1>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                                <h1 className="text-white text-lg">750,000</h1>
                                <h1 className="text-white text-sm">$CTT</h1>
                            </div>
                        </div>
                        <div className="w-full px-2 py-2 flex justify-between items-center rounded-[12px] bg-[linear-gradient(315deg,_var(--tw-gradient-stops))] from-[#6929F1] to-[#A944FD]">
                            <div className="flex justify-center items-center">
                                <img src="image/leaderboard/currentPlayer.png" alt="" className="w-11 h-11" />
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-[#FFC107] text-[11px]">Current Players</h1>
                                    <h1 className="text-white text-sm font-bold">+{formatNumberWithCommas(players.length)}</h1>
                                </div>
                            </div>
                            <div className="w-[1px] h-[30px] bg-white"></div>
                            <div className="flex justify-center items-center">
                                <img src="image/leaderboard/currentMilestone.png" alt="" className="w-11 h-11" />
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-[#FFC107] text-[11px]">Current Milestone</h1>
                                    <h1 className="text-white text-sm font-bold">Milestone 1</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex  w-full justify-center items-center ">
                            <div className="flex justify-around w-full items-center flex-wrap min-h-[30vh] max-h-[50vh] overflow-y-auto gap-2">
                                {
                                    milestones.map((milestone, index) => (
                                        <div key={index} className="flex flex-col justify-center min-w-[40%] max-w-[40%] items-center py-2 px-4 bg-[linear-gradient(315deg,_var(--tw-gradient-stops))] from-[#2A0E58] to-[#7F36F7] border border-[#885ECE] rounded-[20px]">
                                            <img src={`/image/leaderboard/${milestone.imgpath}.png`} alt="" className="w-20 h-20" />
                                            <h1 className="text-white text-[16px] font-bold">{milestone.title}</h1>
                                            <h1 className="text-white text-[16px] font-bold">{milestone.amount}<span className="text-sm">$CTT</span></h1>
                                            <div className="w-full flex justify-start items-center flex-col">
                                                <p className="text-[#C8A2FB] text-[12px]">{milestone.players}</p>
                                                <p className="text-[#C8A2FB] text-[12px]">{milestone.status}</p>
                                            </div>
                                            <div className="flex justify-center items-center px-3 py-2 text-white text-sm font-bold rounded-[20px] bg-[#7520FF]" onClick={() => handleOpenMilestoneModal(index)}>More Info</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="min-h-[70vh] max-h-[70vh] overflow-y-auto w-[95%]">
                        <div className="flex flex-col justify-center items-center gap-3 w-full">
                            <div className="flex justify-between items-center w-full gap-4">
                                <h1 className="text-white text-xl font-bold text-left">Welcome to Cashtree Tap-to-Win! <br /><span className="text-[#C8A2FB] font-bold text-xl">Season 1!</span></h1>
                                <img src="image/leaderboard/season.png" alt="" className="w-16 h-[70px]" />
                            </div>
                            <div className="flex justify-start items-center text-white text-sm w-[90%]">8 August - 22 August 2024 <br />Game Status:</div>
                            <div className="flex w-[95%] px-5 py-2 justify-between items-center rounded-[10px] bg-[#2D2865]">
                                <div className="flex justify-center items-center gap-2">
                                    <img src="image/leaderboard/seasonUser.png" alt="" className="w-8 h-[26px]" />
                                    <div className="flex flex-col justify-center items-center gap-1">
                                        <h1 className="text-white text-lg">Total Players</h1>
                                        <h1 className="text-[#ABA7BA] text-[10px]">Current all players</h1>
                                    </div>
                                </div>
                                <h1 className="text-[16px] text-white">{formatNumberWithCommas(125350)}</h1>
                            </div>
                            <div className="flex flex-col gap-1 w-full justify-start items-start">
                                <h1 className="text-white text-xl">Milestone 8 With Total Reward</h1>
                                <h1 className="text-white font-bold text-4xl">{formatNumberWithCommas(75000000)}$CTT</h1>
                            </div>
                            <div className="flex gap-3 justify-center items-center">
                                <div className="flex flex-col gap-2 bg-[linear-gradient(315deg,_var(--tw-gradient-stops))] from-[#3B1E6A] to-[#7520FF] rounded-[10px] p-5">
                                    <h1 className="text-white text-[12px]">Reward For Leaderboard</h1>
                                    <h1 className="text-white font-bold text-[18px]">{formatNumberWithCommas(25000000)}$CTT</h1>
                                </div>
                                <div className="flex flex-col gap-2 bg-[linear-gradient(315deg,_var(--tw-gradient-stops))] from-[#4517A8] to-[#D940FF] rounded-[10px] p-5">
                                    <h1 className="text-white text-[12px]">Reward For Leaderboard</h1>
                                    <h1 className="text-white font-bold text-[18px]">{formatNumberWithCommas(25000000)}$CTT</h1>
                                </div>
                            </div>
                            <div className="flex flex-col w-[95%] px-5 py-2 justify-between items-center rounded-[10px] bg-[#2D2865]">
                                <div className="flex justify-between items-center w-full">
                                    <h1 className="text-white text-xl">Current Status</h1>
                                    <img src="image/leaderboard/arrow.png" alt="" className="w-4 h-2" />
                                </div>
                                <div className="flex flex-col gap-2 justify-center items-center w-full">
                                    <div className="flex justify-between items-center gap-2 w-full">
                                        <div className="flex gap-1 justify-center items-center">
                                            <img src="image/leaderboard/point.png" alt="" className="w-9 h-9" />
                                            <div className="flex flex-col justify-center items-center gap-1">
                                                <h1 className="text-white text-lg">Your Points Earned</h1>
                                                <h1 className="text-[#ABA7BA] text-[10px]">25 August 2024</h1>
                                            </div>
                                        </div>
                                        <h1 className="text-[16px] text-white">{formatNumberWithCommas(3450899)}</h1>
                                    </div>
                                    <div className="flex justify-between items-center gap-2 w-full">
                                        <div className="flex justify-center items-center gap-1">
                                            <img src="image/leaderboard/rank.png" alt="" className="w-9 h-9" />
                                            <div className="flex flex-col justify-center items-center gap-1">
                                                <h1 className="text-white text-lg">Your Rank</h1>
                                                <h1 className="text-[#ABA7BA] text-[10px]">25 August 2024</h1>
                                            </div>
                                        </div>
                                        <h1 className="text-[16px] text-white">{formatNumberWithCommas(1250)}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-[95%] px-5 py-2 justify-start items-start rounded-[10px] bg-[#2D2865] gap-2">
                                <h1 className="text-white text-xl">Tips to Boost Your Points</h1>
                                <ul className="flex flex-col justify-start w-full items-start list-disc">
                                    <li className="text-sm text-[#ABA7BA]">Invite Friends:</li>
                                    <p className="text-[#ABA7BA] text-sm text-left">This is the only way to earn unlimited points, so spread the word and get your friends involved!</p>
                                    <li className="text-sm text-[#ABA7BA]">Complete All Missions:</li>
                                    <p className="text-[#ABA7BA] text-sm text-left">Maximize your earnings by completing all available challenges.</p>
                                    <li className="text-sm text-[#ABA7BA]">Find the Secret Code:</li>
                                    <p className="text-[#ABA7BA] text-sm text-left">Discover the hidden code, however you can, to unlock extra points!</p>
                                    <li className="text-sm text-[#ABA7BA]">Stay Active:</li>
                                    <p className="text-[#ABA7BA] text-sm text-left">Check in every day for additional rewards and updates.</p>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-start items-start w-full">
                                <h1 className="text-white text-xl text-left">Keep Tapping and Winning!</h1>
                                <p className="text-white text-sm text-left">After the game period ends, this page will be updated to show your total $CTT earned from leaderboard standings and conversion points.</p>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
            <Footer />
            <Modal isOpen={isMilestoneModal} onClose={handleCloseMilestoneModal}>
                <div className="flex flex-col items-center align-middle justify-center gap-3 w-full">
                    <img src="image/assets/mission.png" alt="" className=" w-auto h-[80%]" />
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <h1 className="text-[20px] text-white text-left">MileStone 1</h1>
                        <h1 className="text-[32px] text-white text-left">Leaderboard Prizes Distribution:</h1>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <ul className="flex flex-col justify-start items-start list-disc w-[95%]">
                            <li className="text-sm text-[#C8A2FB]">Rank 1: &nbsp;
                                {milestone_number == 0 ? <span className="text-[10px] text-white"> 62,000 $CTT</span>
                                    : milestone_number == 1 ? <span className="text-[10px] text-white">225,000 $CTT</span>
                                        : milestone_number == 2 ? <span className="text-[10px] text-white">350,000 $CTT</span>
                                            : milestone_number == 3 ? <span className="text-[10px] text-white">700,000 $CTT</span>
                                                : milestone_number == 4 ? <span className="text-[10px] text-white">1,050,000 $CTT</span>
                                                    : milestone_number == 5 ? <span className="text-[10px] text-white">1,750,000 $CTT</span>
                                                        : milestone_number == 6 ? <span className="text-[10px] text-white">2,700,000 $CTT</span>
                                                            : <span className="text-[10px] text-white">3,500,000 $CTT</span>}
                            </li>
                            <li className="text-sm text-[#C8A2FB]">Rank 2: &nbsp;
                                {milestone_number == 0 ? <span className="text-[10px] text-white"> 46,500 $CTT</span>
                                    : milestone_number == 1 ? <span className="text-[10px] text-white">130,000 $CTT</span>
                                        : milestone_number == 2 ? <span className="text-[10px] text-white">250,000 $CTT</span>
                                            : milestone_number == 3 ? <span className="text-[10px] text-white">500,000 $CTT</span>
                                                : milestone_number == 4 ? <span className="text-[10px] text-white">750,000 $CTT</span>
                                                    : milestone_number == 5 ? <span className="text-[10px] text-white">1,250,000 $CTT</span>
                                                        : milestone_number == 6 ? <span className="text-[10px] text-white">1,800,000 $CTT</span>
                                                            : <span className="text-[10px] text-white">2,500,000 $CTT</span>}
                            </li>
                            <li className="text-sm text-[#C8A2FB]">Rank 3: &nbsp;
                                {milestone_number == 0 ? <span className="text-[10px] text-white">39,000 $CTT</span>
                                    : milestone_number == 1 ? <span className="text-[10px] text-white">80,000 $CTT</span>
                                        : milestone_number == 2 ? <span className="text-[10px] text-white">150,000 $CTT</span>
                                            : milestone_number == 3 ? <span className="text-[10px] text-white">300,000 $CTT</span>
                                                : milestone_number == 4 ? <span className="text-[10px] text-white">450,000 $CTT</span>
                                                    : milestone_number == 5 ? <span className="text-[10px] text-white">750,000 $CTT</span>
                                                        : milestone_number == 6 ? <span className="text-[10px] text-white">1,160,000 $CTT</span>
                                                            : <span className="text-[10px] text-white">1,500,000 $CTT</span>}
                            </li>
                            <li className="text-sm text-[#C8A2FB]">Rank 4 - 10: &nbsp;
                                {milestone_number == 0 ? <span className="text-[10px] text-white text-wrap">4,500 $CTT each (31,500 $CTT total)</span>
                                    : milestone_number == 1 ? <span className="text-[10px] text-white text-wrap">20,000 $CTT each (140,000 $CTT total)</span>
                                        : milestone_number == 2 ? <span className="text-[10px] text-white text-wrap">28,000 $CTT each (199,500 $CTT total)</span>
                                            : milestone_number == 3 ? <span className="text-[10px] text-white text-wrap">56,000 $CTT each (399,000 $CTT total)</span>
                                                : milestone_number == 4 ? <span className="text-[10px] text-white text-wrap">85,500 $CTT each (598,500 $CTT total)</span>
                                                    : milestone_number == 5 ? <span className="text-[10px] text-white text-wrap">140,000 $CTT each (980,000 $CTT total)</span>
                                                        : milestone_number == 6 ? <span className="text-[10px] text-white text-wrap"> 220,000 $CTT each (1,540,000 $CTT total)</span>
                                                            : <span className="text-[10px] text-white text-wrap">280,000 $CTT each (1,960,000 $CTT total)</span>}
                            </li>
                            <li className="text-sm text-[#C8A2FB]">Rank 11 - 50: &nbsp;
                                {milestone_number == 0 ? <span className="text-[10px] text-white text-wrap">1,000 $CTT each (40,000 $CTT total)</span>
                                    : milestone_number == 1 ? <span className="text-[10px] text-white text-wrap">5,000 $CTT each (200,000 $CTT total)</span>
                                        : milestone_number == 2 ? <span className="text-[10px] text-white text-wrap">10,000 $CTT each (400,000 $CTT total)</span>
                                            : milestone_number == 3 ? <span className="text-[10px] text-white text-wrap">20,000 $CTT each (800,000 $CTT total)</span>
                                                : milestone_number == 4 ? <span className="text-[10px] text-white text-wrap">30,000 $CTT each (1,200,000 $CTT total)</span>
                                                    : milestone_number == 5 ? <span className="text-[10px] text-white text-wrap">50,000 $CTT each (2,000,000 $CTT total)</span>
                                                        : milestone_number == 6 ? <span className="text-[10px] text-white text-wrap">75,000 $CTT each (3,000,000 $CTT total)</span>
                                                            : <span className="text-[10px] text-white text-wrap">100,000 $CTT each (4,000,000 $CTT total)</span>}
                            </li>
                            <li className="text-sm text-[#C8A2FB]">Rank 51 - 100: &nbsp;
                                {milestone_number == 0 ? <span className="text-[10px] text-white text-wrap">620 $CTT each (31,000 $CTT total)</span>
                                    : milestone_number == 1 ? <span className="text-[10px] text-white text-wrap">2,500 $CTT each (125,000 $CTT total)</span>
                                        : milestone_number == 2 ? <span className="text-[10px] text-white text-wrap">5,010 $CTT each (250,500 $CTT total)</span>
                                            : milestone_number == 3 ? <span className="text-[10px] text-white text-wrap">10,020 $CTT each (501,000 $CTT total)</span>
                                                : milestone_number == 4 ? <span className="text-[10px] text-white text-wrap">15,030 $CTT each (751,500 $CTT total)</span>
                                                    : milestone_number == 5 ? <span className="text-[10px] text-white text-wrap">25,400 $CTT each (1,270,000 $CTT total)</span>
                                                        : milestone_number == 6 ? <span className="text-[10px] text-white text-wrap">36,000 $CTT each (1,800,000 $CTT total)</span>
                                                            : <span className="text-[10px] text-white text-wrap">50,800 $CTT each (2,540,000 $CTT total)</span>}
                            </li>
                            <li className="text-sm text-[#C8A2FB]">Rank 101 - 1000: &nbsp;
                                {milestone_number == 1 ? <span className="text-[10px] text-white text-wrap">875 $CTT each (350,000 $CTT total)</span>
                                    : milestone_number == 2 ? <span className="text-[10px] text-white text-wrap">1,000 $CTT each (900,000 $CTT total)</span>
                                        : milestone_number == 3 ? <span className="text-[10px] text-white text-wrap">2,000 $CTT each (1,800,000 $CTT total)</span>
                                            : milestone_number == 4 ? <span className="text-[10px] text-white text-wrap">3,000 $CTT each (2,700,000 $CTT total)</span>
                                                : milestone_number == 5 ? <span className="text-[10px] text-white text-wrap">5,000 $CTT each (4,500,000 $CTT total)</span>
                                                    : milestone_number == 6 ? <span className="text-[10px] text-white text-wrap">7,500 $CTT each (6,750,000 $CTT total)</span>
                                                        : <span className="text-[10px] text-white text-wrap">10,000 $CTT each (9,000,000 $CTT total)</span>}
                            </li>
                        </ul>
                    </div>
                    <div
                        className="w-[80%] bg-[#7520FF] text-white rounded-[10px] flex justify-center items-center py-3"
                    >
                        <span className="flex justify-center items-center text-white text-xl">Ok</span>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
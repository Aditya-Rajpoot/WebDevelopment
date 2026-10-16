import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css";

export default function Lottery({n = 3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <div className="lottery-app">
            <div className="lottery-card">
                <h1 className="lottery-title">🎰 Lottery Game</h1>
                <Ticket ticket={ticket}/>
                <button className="btn-buy" onClick={buyTicket}>Buy new Ticket</button>
                <h3 className={`result ${isWinning ? "win" : ""}`}>
                    {isWinning ? "🎉 Congratulations, you won!" : "Try your luck!"}
                </h3>
            </div>
        </div>
    )
}
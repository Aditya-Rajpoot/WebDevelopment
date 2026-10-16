import TicketNum from "./TicketNum"
import "./Ticket.css";

export default function Ticket({ticket}){
    return (
        <div className="Ticket">
            <p className="ticket-label">Ticket</p>
            <div className="ticket-nums">
                {ticket.map((num,idx) => (
                    <TicketNum num={num} key={idx} />
                ))}
            </div>
        </div>
    );
}
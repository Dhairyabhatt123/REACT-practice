import NewTicketNum from "./newTicketNum";

export default function NewTickets({ticket}){
    return(
        <div id="newticket">
            {ticket.map((num) => (
                <NewTicketNum num={num}/>
            ))}
        </div>
    )
}
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleTicket() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    axios.get(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`).then((resp) => {
      setTicket(resp.data);
    });
  }, []);

  return (
    <>
      <main>
        {ticket && (
          <div className="container">
            <h1>Ticket Numero: {id}</h1>
            <h2>Titolo del ticket: {ticket.title}</h2>
            <h2>Autore: {ticket.author}</h2>
            <p>{ticket.body}</p>
          </div>
        )}
      </main>
    </>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Links, useNavigate } from "react-router-dom";

export default function PostForm() {
  let navigate = useNavigate();
  const startingData = {
    author: "",
    title: "",
    body: "",
    public: false,
  };

  const [formData, setFormFata] = useState(startingData);
  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
  const [showAlert, setShowAlert] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e) => {
    // Quando gestisco dei checkbox è importante prendere il valore checked e type
    //Se andiamo a vedere nell'elemento in pagina - type corrisponde a checkbox e checked è il nostro public dentro l'oggetto
    const { name, value, checked, type } = e.target;
    console.log(`${name} : ${value} ${checked}`);

    // importante ricordare di fare questo controllo perché sennò lo stato del checkbox non viene aggiornato
    //quando devi fare formdata vedi che tipo di elemento sono. Se sono checkbox allora cambia checked se non lo sono invece cambia value
    setFormFata({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const sendData = (e) => {
    e.preventDefault();
    console.log("provo invio dati", formData);
    //per far tornare il nostro form allo stato base possiamo usare starting data
    // la potenza dello spread è che startingdata rimane invariato mentre noi facciamo lavori sull'array formData
    setFormFata(startingData);
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData).then((resp) => {
      if (resp.data.id !== undefined) {
        setShowAlert(true);
        navigate(`/who/${resp.data.id}`);
      } else {
        setShowWarning(true);
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card my-3">
              <div className="card-body bg-black bg-opacity-50">
                <h3 className="text-center">Aggiungi un post al blog</h3>
                <form onSubmit={sendData} action="">
                  {showAlert && <div className="alert alert-success">Il post è stato inviato.</div>}
                  {showWarning && <div className="alert alert-warning">Il post non è stato inviato. Contatta il supporto</div>}

                  <div className="mb-3">
                    <label htmlFor="author" className="form-label">
                      Autore
                    </label>
                    <input value={formData.author} name="author" onChange={handleChange} type="text" className="form-control " id="author" aria-describedby="author" placeholder="Matteo..." />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Titolo
                    </label>
                    <input
                      value={formData.title}
                      name="title"
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="title"
                      aria-describedby="title"
                      placeholder="Ho bisogno di 4 mozzarelle..."
                    />
                    <div id="title" className="form-text">
                      Inserisci il titolo del post
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="body" className="form-label">
                      Inserisci il testo del post
                    </label>
                    <textarea value={formData.body} name="body" onChange={handleChange} className="form-control" id="body" rows="3" placeholder="specifica la tua richiesta..."></textarea>
                  </div>
                  <div className="mb-3 form-check">
                    <input checked={formData.public} name="public" onChange={handleChange} type="checkbox" className="form-check-input" id="public" />

                    <label className="form-check-label" htmlFor="public">
                      Spuntare per pubblicare il post
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Pubblica
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

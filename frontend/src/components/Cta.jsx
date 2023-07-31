import ReactModal from "react-modal";
import React, { useState, useEffect } from "react";

export default function Cta() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleContactClick() {
    setIsModalOpen(true);
  }

  function sendFormData() {
    const formData = new FormData();
    formData.append("access_key", "02490808-5ff8-448f-90b8-d6935f47dcdc");
    formData.append("name", userName);
    formData.append("email", userEmail);
    formData.append("message", userMessage);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Réponse de l'API Web3Forms :", data);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du formulaire :", error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    sendFormData();

    setUserName("");
    setUserEmail("");
    setUserMessage("");

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        name: userName,
        message: userMessage,
      },
    ]);

    setTimeout(() => {
      setShowThankYouMessage(true);
    }, 2000);
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalOpen) {
        if (!e.target.closest("[data-modal]")) {
          closeModal();
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <section className="cta">
      <p>Disponible : dès maintenant</p>
      <p>Recruter Clément Bartholomé</p>
      <div className="contact-container">
        <span>Alternance</span>
        <button onClick={handleContactClick}>Contacter</button>
      </div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Modal"
        appElement={document.getElementById("root")}
        data-modal
        style={{
          content: {
            padding: "0px",
            width: "100%",
            height: "auto",
            margin: "auto",
            background: "#1b2838",
            inset: "initial",
          },
        }}>
        <div className="contact-modal" data-modal>
          <div className="contact-header">
            <div className="contact-info">
              <img
                src="https://storage.googleapis.com/images_portfolio_steam/photo-cv.webp"
                alt="Clément Bartholomé"
              />
              <p>Clément Bartholomé</p>
            </div>
            <span
              className="close-modal-btn"
              onClick={closeModal}
              aria-label="close">
              &times;
            </span>
          </div>
          <div className="chat-header"></div>
          <div className="chat-container">
            {messages.map((msg, index) => (
              <>
                <div key={index} className="chat-message">
                  <div className="contact-info">
                    <img
                      src="https://storage.googleapis.com/images_portfolio_steam/avatar.webp"
                      alt="Random Avatar"
                    />
                    <p>{msg.name}</p>
                  </div>
                  <p>{msg.message}</p>
                </div>
                <hr className="chat-separator"></hr>
              </>
            ))}
            {showThankYouMessage && (
              <>
                <div className="chat-message">
                  <div className="contact-info">
                    <img
                      src="https://storage.googleapis.com/images_portfolio_steam/photo-cv.webp"
                      alt="Clément Bartholomé"
                    />
                    <p>Clément Bartholomé</p>
                  </div>
                  <p>
                    Merci pour votre message ! Je vous répondrai par mail dans
                    les plus brefs délais :)
                  </p>
                </div>
                <hr className="chat-separator"></hr>
              </>
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            action="https://api.web3forms.com/submit"
            method="POST">
            <input
              type="hidden"
              name="access_key"
              value="02490808-5ff8-448f-90b8-d6935f47dcdc"></input>

            <div className="form-container">
              <input
                type="text"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                placeholder="Votre nom :"
                className="name-input"
              />
              <input
                type="email"
                id="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                placeholder="Votre mail :"
                className="mail-input"
              />
            </div>
            <div className="form-container">
              <textarea
                id="message"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                required
                placeholder="Votre message :"
                className="message-input"
              />
              <button type="submit" className="submit-btn" title="Envoyer">
                <svg
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                  className="SVGIcon_Button SVGIcon_Submit"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100">
                  <g transform="translate(0,-952.36218)">
                    <path
                      d="m 92.115057,974.14842 a 2.0001999,2.0001999 0 0 0 -1.96764,2.02965 l 0.0376,31.19553 -77.475501,0 16.161909,-15.73013 a 2.0002746,2.0002746 0 1 0 -2.790355,-2.8667 L 6.3913393,1007.9405 a 2.0001999,2.0001999 0 0 0 -0.0011,2.8646 l 19.6896957,19.2036 a 2.0002671,2.0002671 0 1 0 2.792551,-2.8646 l -16.170767,-15.771 79.153048,0 a 2.0001999,2.0001999 0 0 0 1.72959,-0.5437 2.0001999,2.0001999 0 0 0 0.0598,-0.058 2.0001999,2.0001999 0 0 0 0.54259,-1.7218 l -0.0388,-32.87638 a 2.0001999,2.0001999 0 0 0 -2.03297,-2.02522 z"
                      fill="#FFFFFF"
                      fillOpacity="1"
                      fillRule="evenodd"
                      stroke="none"
                      visibility="visible"
                      display="inline"
                      overflow="visible"></path>
                  </g>
                </svg>
              </button>
            </div>
          </form>
          <script
            src="https://web3forms.com/client/script.js"
            async
            defer></script>
        </div>
      </ReactModal>
    </section>
  );
}

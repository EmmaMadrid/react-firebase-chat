import "./chat.css"

const Chat = () => {
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <span>Keyla Rmz</span>
                    <p>Hola como estas? </p>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center"></div>
            <div className="bottom"></div>
            <div className="icons">
                <input type="text" placeholder="Escribe un mensaje..." />
                <div className="emoji">
                    <img src="./emoji.png" alt="" />
                </div>
                <button className="sendButton">Enviar</button>
            </div>
        </div>
    )
}

export default Chat
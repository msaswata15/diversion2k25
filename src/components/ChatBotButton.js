import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import "./ChatBotButton.css"; // Import external CSS
export default function ChatBotButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Chat Button */}
            <div className="chatbot-container">
                <button className="chatbot-button" onClick={() => {
                    window.location.href = "https://medical-chatbot-zcela2hbsjrprf96pe6nb4.streamlit.app/";
                    setOpen(!open);
                }}>
                    {open ? <X size={24} /> : <MessageCircle size={24} />}
                </button>
            </div>

            {/* Chat Window (Visible when open) */}
            {open && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h3>Chatbot</h3>
                        <button onClick={() => setOpen(false)} className="close-btn">
                            <X size={20} />
                        </button>
                    </div>
                    <div className="chat-body">
                        <p>How can I assist you today?</p>
                    </div>
                </div>
            )}
        </>
    );
}

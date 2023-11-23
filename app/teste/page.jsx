"use client";
import { useState } from 'react'
import PopUpAula from '../components/popUpAula/PopUpAula';


function Page() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');

    function handleShowPopup(message, type, time) {
        setPopupMessage(message);
        setPopupType(type);
        setShowPopup(true)
        setTimeout(() => {
        setShowPopup(false)
        }, time)
    }

    return (
        <div>
            <h2>Atividade Popup</h2>
            <button onClick={() => handleShowPopup('Erro ao processar!', 'erro', 4000 )}>Exibir Mensagem de erro</button>
            <button onClick={() => handleShowPopup('Sucesso ao processar!', 'sucesso', 4000 )}>Exibir Mensagem de sucesso</button>
            {
                showPopup && (
                    <PopUpAula message={popupMessage}
                        typeColor={popupType}></PopUpAula>
                )
            }
        </div>
    )
}

export default Page;
import {useState} from 'react';
import './Modal.css';

function Modal()
{
    let [open, setOpen] = useState(false);
    let image = "https://abrakadabra.fun/uploads/posts/2021-12/1640972273_17-abrakadabra-fun-p-metallika-emblema-38.jpg";

    return(
        <div>
            <img    src={image} 
                    className="small"
                    onClick={() => setOpen(true)}
                    alt="Картинка"
                    style={{display : open ? "none" : "block"}}
            />
            {
                open && 
                (
                    <div>
                        <div>
                            <img    src={image}
                                    alt=""
                                    className="big"
                                    onClick={() => setOpen(false)}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Modal;
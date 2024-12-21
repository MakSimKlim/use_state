import {useState} from 'react';
import './Modal.css';

function Modal()
{
    let [open, setOpen] = useState(false);
    let image = "https://c4.wallpaperflare.com/wallpaper/958/457/87/band-music-metallica-wallpaper-preview.jpg";

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
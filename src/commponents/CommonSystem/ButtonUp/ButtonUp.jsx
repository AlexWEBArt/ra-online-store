import { useEffect, useRef } from "react";
import "./buttonUp.css"

export default function ButtonUp() {
    const btnUp = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? btnUp.current.classList.remove('btn-up_hide') : btnUp.current.classList.add('btn-up_hide');
        });
    }, [])


    const handlerClickUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="btn-up btn-up_hide" ref={btnUp} onClick={handlerClickUp}></div>
    )
}
import baner from "../../../../img/banner.jpg"

export default function Baner() {
    return (
        <div className="banner">
            <img src={baner} className="img-fluid" alt="К весне готовы!"></img>
            <h2 className="banner-header">К весне готовы!</h2>
        </div>
    )
}
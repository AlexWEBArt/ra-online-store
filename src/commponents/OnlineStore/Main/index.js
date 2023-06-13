import Baner from "./Baner/Baner";

export default function Main(props) {
    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <Baner />
                    {props.children}
                </div>
            </div>
        </main>
    )
}
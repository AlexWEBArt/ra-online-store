import Contacts from "./Contacts/Contacts";
import Copyright from "./Copyright/Copyright";
import Information from "./Information/Information";
import Payment from "./Payment/Payment";

export default function Footer() {
    return (
        <footer className="container bg-light footer">
            <div className="row">
                <div className="col">
                    <Information />
                </div>
                <div className="col">
                    <Payment />
                    <Copyright />
                </div>
                <div className="col text-right">
                    <Contacts />
                </div>
            </div>
        </footer>
    )
}
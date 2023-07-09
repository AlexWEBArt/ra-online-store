import { Route, Routes } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import TopSales from "./Main/Sections/TopSales/TopSales";
import Catalog from "./Main/Sections/Catalog/Catalog";
import P404 from "./Main/P404/P404";
import SearchForm from "./Main/SearchForm/SearchForm";
import About from "./Main/Sections/About/About";
import ContactsMain from "./Main/Sections/ContactsMain/ContactsMain";
import CartMain from "./Main/Sections/CartMain/CartMain";
import Order from "./Main/Sections/Order/Order";
import Product from "./Main/Sections/Product/Product";
import ButtonUp from "../CommonSystem/ButtonUp/ButtonUp";
import Favorites from "./Main/Sections/Favorites/Favorites";

export default function OnlineStore() {
    return (
        <div className="online-store">
            <Header />
            <ButtonUp />
            <Main>
                <Routes>
                    <Route path='/ra-online-store' element={<><TopSales /><Catalog /></>}></Route>
                    <Route path='/ra-online-store/catalog/1' element={<Catalog ><SearchForm /></Catalog>}></Route>
                    <Route path='/ra-online-store/catalog/:category' element={<Catalog ><SearchForm /></Catalog>}></Route>
                    <Route path='/ra-online-store/about' element={<About/>}></Route>
                    <Route path='/ra-online-store/contacts' element={<ContactsMain />}></Route>
                    <Route path='/ra-online-store/favorites' element={<Favorites />}></Route>
                    <Route path='/ra-online-store/cart' element={<><CartMain /><Order /></>}></Route>
                    <Route path='/ra-online-store/product/:id' element={<Product />}></Route>

                    <Route path='/ra-online-store/*' element={<P404 />}></Route>
                </Routes>
            </Main>
            <Footer />
        </div>
    )
}
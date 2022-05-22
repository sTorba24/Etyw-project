import React from 'react'
import {Routes, Route, Redirect} from "react-router-dom";
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";
import {HomePage} from "./pages/HomePage";
import {CartPage} from "./pages/CartPage";
import {ContactPage} from "./pages/ContactPage";

export const useRoutes = isAuthenticated => {
    if(isAuthenticated) {
        return (
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/links" element={<LinksPage />} />
                <Route exact path="/create" element={<CreatePage />} />
                <Route exact path="/detail/:id" element={<DetailPage />}/>
                <Route exact path="/cart" element={<CartPage />} />
                <Route exact path="/contact" element={<ContactPage />} />
              </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<AuthPage />}/>
        </Routes>
    )
}

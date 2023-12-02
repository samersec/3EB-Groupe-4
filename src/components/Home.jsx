import React from 'react';
import './Style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuctionedProducts, SellableProducts } from './Products'
import { Catalogue, Auctions } from './Catalogue'

import { NavBar } from './Navbar'
import { MainLayout, CarouselComponent, Footer } from './Main_Layout'
import GalateaBlog from './blog';
import { Cart } from './cart';
export const Home = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>

        <Route path='/Catalogue' element={
          <>
            <Catalogue categorie={"Produit"} print={"Prints"} />
            <Catalogue categorie={"Produit TTT"} print={"Tic Tac Toe Bords"} />
            <Catalogue categorie={"Produit Pouches"} print={"Pouches"} />
            <Catalogue categorie={"Produit Monochrome"} print={"Aquarelle Monochrome"} />
          </>
        } />

        <Route path='/Auctions' element={<Auctions />} />

        <Route path='/Blog' element={<GalateaBlog />} />


        <Route path="/" element={
          <>
            <CarouselComponent />
            <MainLayout />
          </>} />
        <Route path="/buy/:productId/:categorie" element={<SellableProducts />} />
        <Route path="/bid/:AuctionedproductId" element={<AuctionedProducts />} />

        <Route path="/cart/" element={<Cart />} />

      </Routes>

      <Footer />


    </BrowserRouter>

  );
};

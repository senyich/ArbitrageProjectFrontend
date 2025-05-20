import "./MainPage.css"
import About from "../../components/about/About"
import HomeLabel from "../../components/home-label/HomeLabel"
import React from "react"

export default function MainPage(){
    return (
    <>
        <HomeLabel/>
        <About/>
    </>
    );
}
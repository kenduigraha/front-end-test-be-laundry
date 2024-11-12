import React from "react";
import "./styles/index.css";
import MainLayout from "./components/main/MainLayout";

export default function MyApp({ Component, pageProps }) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}
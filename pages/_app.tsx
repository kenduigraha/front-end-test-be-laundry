import React from "react";
import { usePathname } from 'next/navigation';
import "./styles/index.css";
import MainLayout from "./components/main/MainLayout";
import MainPage from "./components/main/MainPage";

export default function MyApp({ Component, pageProps }) {
    const navigationRoute = usePathname();
    return (
        <MainLayout>
            {navigationRoute === '/' && (<MainPage />)}
            <Component {...pageProps} />
        </MainLayout>
    )
}
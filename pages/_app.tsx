import React from "react";
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/index.css";
import MainLayout from "../components/main/MainLayout";
import MainPage from "../components/main/MainPage";
import ProductAddPage from "../components/main/product/ProductAddPage";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
    const navigationRoute = usePathname();
    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <Head>
                    <title>Be Laundry</title>
                </Head>
                <MainLayout>
                    {['/', '/home'].includes(navigationRoute) && (<MainPage />)}
                    {['/products'].includes(navigationRoute) && (<ProductAddPage />)}
                    <Component {...pageProps} />
                </MainLayout>            
            </QueryClientProvider> 
        </ThemeProvider>
    )
}
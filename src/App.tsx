import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainApp } from "./components/MainApp";
import { Faq, Home } from "./pages";

const queryClient = new QueryClient();

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<MainApp />}>
                        <Route path="faq" element={<Faq />} />
                        <Route path="" element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </QueryClientProvider>
    );
};

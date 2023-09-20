import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MainApp } from "./components/MainApp/MainApp";

const queryClient = new QueryClient();

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <MainApp />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

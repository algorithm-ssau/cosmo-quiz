import Authorization from "./components/pages/Authorization";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
    return (
        <HelmetProvider>
            <Authorization />
        </HelmetProvider>
    );
}

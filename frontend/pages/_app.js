import Page from "../components/Layout/page";
import AuthProvider from "../context/Auth/authContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </AuthProvider>
  );
}

export default MyApp;

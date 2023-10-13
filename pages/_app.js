import MainLayout from "@/components/layouts/MainLayout";
import NotFoundProvider from "@/contexts/NotFoundContext";
import "@/styles/globals.css";
import theme from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <NotFoundProvider>
      <ChakraProvider theme={theme}>
        <MainLayout>
          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MainLayout>
      </ChakraProvider>
    </NotFoundProvider>
  );
}

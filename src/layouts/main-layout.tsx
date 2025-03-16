import { Container } from "@/components/container";

import Header from "@/components/header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-100 dark:from-gray-800 dark:via-indigo-900 dark:to-purple-900">
      <Header />
      <Container className="flex-grow">
        <main className="flex-grow">
          <Outlet />
        </main>
      </Container>
    </div>
  );
};

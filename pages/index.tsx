import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const NotFound = React.lazy(() => import("./NotFound"));
const Welcome = React.lazy(() => import("./Welcome"));
const Stories = React.lazy(() => import("./Stories"));
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Suspense fallback={<>Loading...</>}>
              <Routes>
                <Route path="/404" element={<NotFound />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/stories/:slug" element={<Stories />} />
                <Route path="/" element={<Navigate to="/welcome" />} />
                <Route path="*" element={<Navigate to="/404" />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

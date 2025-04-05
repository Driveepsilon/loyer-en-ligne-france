
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Residences from "./pages/Residences";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/residences" element={<Residences />} />
            {/* Pages à implémenter ultérieurement */}
            <Route path="/apartments" element={<NotFound />} />
            <Route path="/owners" element={<NotFound />} />
            <Route path="/tenants" element={<NotFound />} />
            <Route path="/leases" element={<NotFound />} />
            <Route path="/signatures" element={<NotFound />} />
            <Route path="/rent" element={<NotFound />} />
            <Route path="/charges" element={<NotFound />} />
            <Route path="/receipts" element={<NotFound />} />
            <Route path="/reporting" element={<NotFound />} />
            <Route path="/documents" element={<NotFound />} />
            <Route path="/notifications" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

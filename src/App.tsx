
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Residences from "./pages/Residences";
import Tenants from "./pages/Tenants";
import NotFound from "./pages/NotFound";
import Apartments from "./pages/Apartments";
import Owners from "./pages/Owners";
import Leases from "./pages/Leases";
import Signatures from "./pages/Signatures";
import Rent from "./pages/Rent";
import Charges from "./pages/Charges";
import Receipts from "./pages/Receipts";
import Reporting from "./pages/Reporting";
import Documents from "./pages/Documents";
import Notifications from "./pages/Notifications";

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
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/apartments" element={<Apartments />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/leases" element={<Leases />} />
            <Route path="/signatures" element={<Signatures />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/charges" element={<Charges />} />
            <Route path="/receipts" element={<Receipts />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/notifications" element={<Notifications />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

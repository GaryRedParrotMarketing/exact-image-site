
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllNewsPage from "./pages/AllNewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import PublishersDashboard from "./pages/PublishersDashboard";
import DashboardOverview from "./components/dashboard/DashboardOverview";
import PublishersList from "./components/dashboard/PublishersList";
import PublisherDetail from "./components/dashboard/PublisherDetail";
import NewArticleForm from "./components/dashboard/NewArticleForm";
import EditArticleForm from "./components/dashboard/EditArticleForm";
import { AuthProvider } from "./contexts/AuthContext";
import { PublisherProvider } from "./contexts/PublisherContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <PublisherProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/news" element={<AllNewsPage />} />
              <Route path="/news/:id" element={<NewsDetailPage />} />
              <Route path="/dashboard" element={<PublishersDashboard />}>
                <Route index element={<DashboardOverview />} />
                <Route path="publishers" element={<PublishersList />} />
                <Route path="publishers/:id" element={<PublisherDetail />} />
                <Route path="new-article" element={<NewArticleForm />} />
                <Route path="edit-article/:id" element={<EditArticleForm />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </PublisherProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

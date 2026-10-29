import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import {
  AboutPage,
  CategoriesPage,
  ContactPage,
  EnquiryPage,
  GalleryPage,
  MarketsPage,
  NotFoundPage,
  ProductDetailsPage,
  ProductsPage,
} from "./pages/CompanyPages";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:slug",
        element: <ProductDetailsPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/markets",
        element: <MarketsPage />,
      },
      {
        path: "/export",
        element: <MarketsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/enquiry",
        element: <EnquiryPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
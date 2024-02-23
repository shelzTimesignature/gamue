import {QueryClient, QueryClientProvider} from "react-query";
import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
import './App.css';
import AppLayout from "@/layouts/AppLayout.tsx";
import Dashboard from "@/pages/Dashboard.tsx";
import Login from "@/pages/Login.tsx";
import Forgot from "@/pages/Forgot.tsx";
import Register from "@/pages/Register.tsx";
import AuthLayout from "@/layouts/AuthLayout.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import Company from "@/pages/Company";
import CreateCompany from "@/pages/Company/create.tsx";
import EditCompany from "@/pages/Company/edit.tsx";
import Drug from "@/pages/Drug";
import CreateDrug from "@/pages/Drug/create.tsx";
import EditDrug from "@/pages/Drug/edit.tsx";
import License from "@/pages/License";
import CreateLicense from "@/pages/License/create.tsx";
import EditLicense from "@/pages/License/edit.tsx";


const router = createBrowserRouter([

    {
        path:'/',
        element:(
            <AppLayout/>
        ),
        children:[
            {
                path:'',
                element:(
                    <Dashboard/>
                )
            },
            {
                path:'company',
                element: (
                    <Company/>
                )
            },

            {
                path:'company/create',
                element: (
                    <CreateCompany/>
                )
            },

            {
                path:'company/edit/:id',
                element: (
                    <EditCompany/>
                )
            },

            {
                path:'drug',
                element: (
                    <Drug/>
                )
            },

            {
                path:'drug/create',
                element: (
                    <CreateDrug/>
                )
            },

            {
                path:'drug/edit/:id',
                element: (
                    <EditDrug/>
                )
            },

            {
                path:'license',
                element: (
                    <License/>
                )
            },

            {
                path:'license/create',
                element: (
                    <CreateLicense/>
                )
            },

            {
                path:'license/edit/:id',
                element: (
                    <EditLicense/>
                )
            },


        ]
    },
    {
        path:'',
        element:(
            <AuthLayout/>
        ),
        children:[
            {
                path:'login',
                element:(
                    <Login/>
                )
            },
            {
                path:'forgot',
                element:(
                    <Forgot/>
                )
            },
            {
                path:'signup',
                element:(
                    <Register/>
                )
            },
        ]
    }
       
]);
  
  
  

  const queryClient=new QueryClient()
  
  function App() {
    return (
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
            <Toaster />
        </QueryClientProvider>
    );
  }
  
  export default App;
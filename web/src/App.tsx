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
                    <Company/>
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
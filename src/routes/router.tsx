import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate,
  RouteObject,
  Outlet,
} from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas } from "../components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/pages/Model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../components/pages/Login";

const PATH = {
    pageAdidas: '/adidas',
    pagePuma: '/puma',
    pageAbibas: '/abibas',
	pagePrices: '/prices',
	pageModel: '/:model/:id',
	pageProtected: '/protectedPage',
	error: '/error',
	login: '/login',
	main: '/'

} as const


const publicRoutes:RouteObject[] = [
		{
            path: PATH.pageAdidas,
            element: <Adidas/>,
          },
		  {
            path: PATH.pagePuma,
            element: <Puma/>,
          },
		  {
            path: PATH.pageAbibas,
            element: <Abibas/>,
          },
		  {
            path: PATH.pagePrices,
            element: <Prices/>,
          },
		  {
			path: PATH.pageModel,
			element: <Model/>
		  },
		
		  {
			path: PATH.login,
			element: <Login/>
		  },
		   {
            path: PATH.error,
            element: <Error404/>,
			
          },
		   {
            path: PATH.main,
            // element: <Adidas/>,
			element: <Navigate to='/adidas'/>
			
          },
]
const privateRoutes:RouteObject[] = [
	{
			path: PATH.pageProtected,
			element: <ProtectedPage/>
		  },
]
export const PrivateRoutes = () => {
	const isAuth = false 
	return (
		<div>
           {isAuth ? <Outlet/> : <Navigate to='/login'/>}
		</div>
	)
	
}

export const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/>,
	children: [
		{
			element: <PrivateRoutes/>,
			children: privateRoutes,
		},
		...publicRoutes,
		
    ],
	errorElement: <Navigate to="/error" replace />
  },
 
]);



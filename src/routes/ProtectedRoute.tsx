import { ReactNode } from "react"
import { Error404 } from "../components/pages/Error404"
import { ProtectedPage } from "../components/pages/ProtectedPage"
import { Navigate } from "react-router-dom"

type ProtectedRouteType = {
	children: ReactNode
}


export const ProtectedRoute = ({children}: ProtectedRouteType) => {
	const logged = false 
	return (
	
		<div>
			 {logged ? <div>{children}</div> : <Navigate to="/login" replace />}
		</div>
	)
}
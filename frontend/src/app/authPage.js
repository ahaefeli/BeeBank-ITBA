import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export const AuthChecker = ({ children }) => {
  const authRouter = useRouter()


const cId = Cookies.get('cId')

// Si no hay una cookie de autenticación, redirige a la página de inicio
if (!cId) {
    authRouter.push('/')
}
else{
    return <>{children}</>
}
};
import { useState } from "react";



export const useFetching = (callback: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async (a: number | string, b?: number) =>{
    try {
        setIsLoading(true)
        setTimeout(()=> {
          callback(a, b); 
          setIsLoading(false)
        }, 500)

    } catch (error: any) {
        setError(error.message)
    } finally{
        
    }
  }

  return [fetching, isLoading, error]  as const
}

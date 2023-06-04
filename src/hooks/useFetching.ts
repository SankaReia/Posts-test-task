import { useState } from "react";

export const useFetching = (callback: (limit: number, page: number)=> Promise<void>) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async (limit: number, pages: number) =>{

    try {
        setIsLoading(true)
        setTimeout(()=> {
          callback(limit, pages); 
          setIsLoading(false)
        }, 1000)

    } catch (error: any) {
        setError(error.message)
    } finally{
        
    }
  }

  return [fetching, isLoading, error]  as const
}

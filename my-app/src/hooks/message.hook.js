import {useCallback} from 'react'


export const useMessage = () => {
  return useCallback( (text) => {
    document.getElementById('error').innerText = text
  }, [])
}

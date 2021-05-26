/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr'
import api from '../services/api'

interface DataResponse {
  data: any
  error: any
  loading: boolean
}

export function useFetch<Data = any, Error = any>(url: string): DataResponse {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url)
    return response.data
  })
  return {
    data: data,
    loading: !error && !data,
    error: error
  }
}

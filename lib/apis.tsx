import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "./axios";

export function useGetUser() {
   return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await axiosClient.get('/users')
      return res.data
    },
  })
}

export function useGetUserFavorites() {
     return useQuery<any>({
    queryKey: ['favorites'],
    queryFn: async () => {
      const res = await axiosClient.get('/users/me/favorites')
      return res.data
    },
  })
}

export function usePostUserFavorite() {
    const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data) => {
      const res = await axiosClient.post('/users/me/favorites/toggle', data)
      return res.data
    },
    onError: console.error,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
    },
  })
}

export function useGetUserHistories() {
     return useQuery<any>({
    queryKey: ['histories'],
    queryFn: async () => {
      const res = await axiosClient.get('/users/me/histories')
      return res.data
    },
  })
}

export function useDeleteUserHistories() {
    const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data) => {
      const res = await axiosClient.delete('/users/me/histories')
      return res.data
    },
    onError: console.error,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['histories'] })
    },
  })
}

export function useGetCategories() {
     return useQuery<any>({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await axiosClient.get('/categories')
      return res.data
    },
  })
}

export function useGetUserAlerts() {
     return useQuery<any>({
    queryKey: ['alerts'],
    queryFn: async () => {
      const res = await axiosClient.get('/alerts')
      return res.data
    },
  })
}

export function useDeleteUserAlert() {
    const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data) => {
      const res = await axiosClient.delete('/alerts', data)
      return res.data
    },
    onError: console.error,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['alerts'] })
    },
  })
}

export function useGetShops() {
     return useQuery<any>({
    queryKey: ['shops'],
    queryFn: async () => {
      const res = await axiosClient.get('/shops')
      return res.data
    },
  })
}

export function useGetShop(shop_id: number, slug: string) {
     return useQuery<any>({
    queryKey: ['shops', shop_id, slug],
    queryFn: async () => {
      const res = await axiosClient.get(`/shops/${shop_id}/${slug}`)
      return res.data
    },
  })
}

export function useGetUserReports() {
     return useQuery<any>({
    queryKey: ['reports'],
    queryFn: async () => {
      const res = await axiosClient.get('/reports')
      return res.data
    },
  })
}

export function useGetUserTickets() {
     return useQuery<any>({
    queryKey: ['tickets'],
    queryFn: async () => {
      const res = await axiosClient.get('/tickets')
      return res.data
    },
  })
}

export function useGetAutoComplete(keyword: string) {
       return useQuery<any>({
    queryKey: ['autocomplete', keyword],
    queryFn: async () => {
      const res = await axiosClient.get(`/search/autocomplete?keyword=${keyword}`)
      return res.data
    },
    enabled: keyword.trim().length > 0,
  })
}
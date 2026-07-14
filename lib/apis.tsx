import { useQuery } from "@tanstack/react-query";
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

export function useGetUserHistories() {
     return useQuery<any>({
    queryKey: ['histories'],
    queryFn: async () => {
      const res = await axiosClient.get('/users/me/histories')
      return res.data
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



export function useGetShops() {
     return useQuery<any>({
    queryKey: ['shops'],
    queryFn: async () => {
      const res = await axiosClient.get('/shops')
      return res.data
    },
  })
}
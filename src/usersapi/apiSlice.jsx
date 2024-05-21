import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 

//Creating Api
export const apiSlice = createApi({  
    reducerPath:'apiSlice',  //unique key for reducer
    baseQuery:fetchBaseQuery({baseUrl:'https://appsail-50019419371.development.catalystappsail.in/'}), // baseurl from json server
    tagTypes:["User","cart","data"], //for Refetching purpose 
    endpoints:(builder)=>({
        adduser:builder.mutation({ //endpoint for add data
            query:(user)=>({
                url:'/register',
                method:'POST',
                body:user,  
            }),
            invalidatesTags:['User']
        }),
       getdata:builder.query({ //endpoint for fetching all details
        query:()=>'/display_data',
        providesTags:['data']
       }),

        updateuser: builder.mutation({  //endpoint for updating data
            query: (user) => ({
              url: `/users/${user.id}`,
              method: 'PUT',
              body: user,
            }),
            invalidatesTags:['User']
          }),

                    getlogin: builder.mutation({
            query: (credentials) => ({
              url: '/login',
              method: 'POST',
              body: credentials,
            }),
          }),
          postdata: builder.mutation({
            query: (data) => ({
              url: 'post_data',
              method: 'POST',
              body: data,
            }),
          }),
          sendemail: builder.mutation({
            query: (data) => ({
              url: 'sendemail',
              method: 'POST',
              body: data,
            }),
          }),


    })
})

//create custom hooks for all Endpoints then export
export const {
   useAdduserMutation,
   useUpdateuserMutation,
   useGetloginMutation,
   useGetdataQuery,
   useAddToCartMutation,
   useGetcartQuery,
   useRemoveitemfromcartMutation,
   usePostdataMutation,useSendemailMutation
   } = apiSlice;
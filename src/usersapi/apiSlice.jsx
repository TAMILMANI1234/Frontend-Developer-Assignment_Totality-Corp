import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 

//Creating Api
export const apiSlice = createApi({  
    reducerPath:'apiSlice',  //unique key for reducer
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3500/'}), // baseurl from json server
    tagTypes:["User","cart"], //for Refetching purpose 
    endpoints:(builder)=>({
        adduser:builder.mutation({ //endpoint for add data
            query:(user)=>({
                url:'/users',
                method:'POST',
                body:user,  
            }),
            invalidatesTags:['User']
        }),
        getusers:builder.query({ //endpoint for fetching all details
          query:()=>'/users',
          providesTags:['User']
        }),
       getdata:builder.query({ //endpoint for fetching all details
        query:()=>'/data',
        providesTags:['User']
       }),

        updateuser: builder.mutation({  //endpoint for updating data
            query: (user) => ({
              url: `/users/${user.id}`,
              method: 'PUT',
              body: user,
            }),
            invalidatesTags:['User']
          }),

          addToCart: builder.mutation({
            query: (cart) => ({
              url: "cart",
              method: 'POST',
              body: cart ,
            }),
          }),

          getcart:builder.query({ //endpoint for fetching all details
            query:()=>'/cart',
            providesTags:['cart']
          }),

          removeitemfromcart: builder.mutation({   // endpoint for deleting data
            query: (id) => ({
              url: `/cart/${id}`,
              method: 'DELETE',
            }),
            invalidatesTags:['cart']
          }),

    })
})

//create custom hooks for all Endpoints then export
export const {
   useAdduserMutation,
   useUpdateuserMutation,
   useGetusersQuery,
   useGetdataQuery,
   useAddToCartMutation,
   useGetcartQuery,
   useRemoveitemfromcartMutation
   } = apiSlice;
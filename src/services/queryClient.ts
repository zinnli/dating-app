import { QueryClient } from "react-query";

function queryErrorHandler(error: any) {
  console.log(error);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 0, // 기본 값 사용 - 0초
      // cacheTime: 1000 * 60 * 5, // 기본 값 사용 - 5분
      // refetchOnMount: true, // 기본 값 사용 - true
      // refetchOnReconnect: true, // 기본 값 사용 - true
      refetchOnWindowFocus: false,
      retry: 0, //
      onError: (err) => queryErrorHandler(err),
    },
    mutations: {
      onError: (err) => queryErrorHandler(err),
    },
  },
});

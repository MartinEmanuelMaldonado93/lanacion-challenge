type NewsFetchStatus = {
  data: News[];
  isLoading: boolean;
  isError: boolean;
};

type NewsStateContext = {
  newsState: News[];
  setNewsState: Dispatch<SetStateAction<News[]>>;
};

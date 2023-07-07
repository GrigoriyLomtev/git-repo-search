import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Repository {
  id: number;
  name: string;
  owner: { login: string; avatar_url: string; html_url: string };
  stargazers_count: number;
  watchers_count: number;
  html_url: string;
}

interface RepositoriesState {
  items: Repository[];
  loading: boolean;
  error: string | null;
  repositoriesPerPage: number;
}

interface FetchRepositoriesPayload {
  searchTerm: string;
}

export const fetchRepositories = createAsyncThunk(
  "repositories/fetchRepositories",
  async ({ searchTerm }: FetchRepositoriesPayload) => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${searchTerm}`
    );
    const data = await response.json();
    return data.items as Repository[];
  }
);

const initialState: RepositoriesState = {
  items: [],
  loading: false,
  error: null,
  repositoriesPerPage: 10,
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositories: (state, action: PayloadAction<Repository[]>) => {
      state.items = action.payload;
    },
    setRepositoriesPerPage: (state, action: PayloadAction<number>) => {
      state.repositoriesPerPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchRepositories.fulfilled,
        (state, action: PayloadAction<Repository[]>) => {
          state.loading = false;
          state.items = action.payload;
          localStorage.setItem("repositories", JSON.stringify(action.payload));
        }
      )
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export const { setRepositories, setRepositoriesPerPage } =
  repositoriesSlice.actions;

export default repositoriesSlice.reducer;

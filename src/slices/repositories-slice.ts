import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Repository {
  id: number;
  name: string;
  // owner: string;
  owner: { login: string; avatar_url: string };
  stargazers_count: number;
  watchers_count: number;
}

interface RepositoriesState {
  items: Repository[];
  loading: boolean;
  error: string | null;
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
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositories: (state, action: PayloadAction<Repository[]>) => {
      state.items = action.payload;
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

export const { setRepositories } = repositoriesSlice.actions;

export default repositoriesSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  link: string;
  featured_image: string;
  views: number;
  date_published: string;
  slug: string;
  author: string;
}

interface ArticlesState {
  articles: {
    [key: string]: Article[];
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ArticlesState = {
  articles: {},
  status: 'idle',
  error: null,
};

// Action asynchrone pour récupérer les articles depuis l'API
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const response = await fetch("https://controlpanel.people237.com/wp-json/articles/homepage");
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des articles.');
    }
    return response.json();
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles || {}; // Assurez-vous que la structure des données correspond
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Une erreur est survenue.';
      });
  },
});

export default articlesSlice.reducer;

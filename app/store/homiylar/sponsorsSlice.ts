import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/app/api/axiosInstance";
import { stateProps } from "../config-store";

// Определим тип для данных спонсора
export interface Sponsor {
  id: number;
  full_name: string;
  phone: string;
  sum: number;
  firm: string;
  spent: number;
  created_at: string;
  get_status_display: string;
}

// Определим тип для данных пагинации
interface Pagination {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

// Определим тип для начального состояния
export interface SponsorsState {
  sponsors: Sponsor[];
  loading: boolean;
  error: string;
  pagination: Pagination;
  filter: any;
  search: string;
}

// Определим тип для данных, возвращаемых API
export interface GetSponsorsResponse {
  results: Sponsor[];
  count: number;
  next: string | null;
  previous: string | null;
}

// Создадим thunk-функцию для получения спонсоров
export const getSponsors = createAsyncThunk<
  GetSponsorsResponse, // Возвращаемый тип данных
  string,
  { rejectValue: string }
>("sponsors/getSponsors", async (_, { getState, rejectWithValue }) => {
  try {
    // Выполним HTTP-запрос с использованием axios
    const state = getState() as stateProps;
    const { search, filter: ordering } = state.sponsors;
    const { currentPage: page, pageSize: page_size } =
      state.sponsors.pagination;
    const response = await axiosInstance.get("/sponsor-list/", {
      params: {
        search,
        ordering,
        page, // Ваша текущая страница
        page_size,
      },
    });

    // Вернем данные из ответа
    return response.data;
  } catch (error: any) {
    // Обработаем ошибку и вернем ее
    throw rejectWithValue(error.message);
  }
});

// Начальное состояние
const initialState: SponsorsState = {
  sponsors: [],
  loading: false,
  error: "",
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 0,
  },
  filter: "",
  search: "",
};

// Создадим срез для спонсоров
export const sponsorsSlice = createSlice({
  name: "sponsors",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<any>) => {
      state.filter = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPagination: (state, action: PayloadAction<Pagination>) => {
      state.pagination = {
        ...state.pagination,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSponsors.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSponsors.fulfilled, (state, action) => {
        state.loading = false;
        state.sponsors = action.payload.results;
        state.pagination.totalItems = action.payload.count;
        state.pagination.totalPages = Math.ceil(
          action.payload.count / state.pagination.pageSize
        );
      })
      .addCase(getSponsors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Экспортируем экшены и редьюсеры
export const { setFilter, setSearch, setPagination } = sponsorsSlice.actions;
export const sponsorsReducer = sponsorsSlice.reducer;

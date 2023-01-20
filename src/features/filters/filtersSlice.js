import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    categories: {
      categoriesSelected: [],
      categories: [],
    },
    price: {
      order: "",
      range: {},
    },
    rating: {
      rate: {
        order: "",
        // max/min
      },
      count: {
        order: "",
        // max/min
      },
    },
    name: "",
  },
  status: {
    isOpen: false,
    filtering: false,
    filterTypes: [],
  },
  filteredProducts: undefined,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    initCategoriesFilters: (state, action) => {
      state.filters.categories.categories = [...action.payload];
    },
    showFilters: (state, action) => {
      state.status.isOpen = !state.status.isOpen;
    },
    //Categories --------------------------------------------------------------
    addSelectedCategories: (state, action) => {
      state.filters.categories.categoriesSelected = [
        ...state.filters.categories.categoriesSelected,
        action.payload,
      ];
      state.status.filtering = true;
      state.status.filterTypes = state.status.filterTypes.includes("categories")
        ? state.status.filterTypes
        : [...state.status.filterTypes, "categories"];
    },
    removeSelectedCategories: (state, action) => {
      const removed = state.filters.categories.categoriesSelected.filter(
        (categorie) => categorie !== action.payload
      );
      state.filters.categories.categoriesSelected = removed;
    },
    //Price     --------------------------------------------------------------
    setPriceRange: (state, action) => {
      state.filters.price.range = action.payload;
      state.status.filtering = true;
      state.status.filterTypes = state.status.filterTypes.includes("price")
        ? state.status.filterTypes
        : [...state.status.filterTypes, "price"];
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = [...action.payload];
    },
    resetFilterStatus: (state, action) => {
      state.status.filtering = false;
      state.filteredProducts = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  initCategoriesFilters,
  showFilters,
  addSelectedCategories,
  removeSelectedCategories,
  setPriceRange,
  setFilteredProducts,
  resetFilterStatus,
} = filtersSlice.actions;

export default filtersSlice.reducer;

// export const selectPosts = (state) => state.posts.data;
// export const selectCurrentId = state => state.posts.currentId

// export const selectCurrentPost = createSelector(selectPosts, selectCurrentId, (posts, postId) => posts.filter(post => post.id === postId))

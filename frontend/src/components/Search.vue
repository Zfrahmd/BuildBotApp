<template>
  <div>
    <div class="row justify-content-center">
      <input class="form-control"
        placeholder="Enter Search Term"
        @input="search($event.target.value)"
      />
    </div>
    <div class="row justify-content-center filters my-2">
      <div class="col-2"><button class="btn btn-outline-secondary"
      @click="applyFilters({type:'heads'})">Filter for Heads</button>
      </div>
      <div class="col-2"><button class="btn btn-outline-secondary"
      @click="applyFilters({type:'arms'})">Filter for Arms</button></div>
      <div class="col-2"><button class="btn btn-outline-secondary"
      @click="applyFilters({type:'torsos'})">Filter for Torsos</button>
      </div>
      <div class="col-2"><button class="btn btn-outline-secondary"
      @click="applyFilters({type:'bases'})">Filter for Bases</button>
      </div>
      <div class="col-2"><button class="btn btn-outline-secondary"
      @click="clearFilters()">Clear Filters</button></div>
      <div class="row justify-content-center my-2"><div class="col-12 text-center">
      Filters: {{filters}}</div>
      </div>
    </div>
  </div>
  <div class="search_content">
    <div class="row justify-content-center">
      <div class= "row" v-for="(result, index) in pagedResults" :key="index">
        <div class="col-2">
          <img :src="result.src"/>
        </div>
        <div class="col-2">
          <div class="title">{{result.title}}</div>
        </div>
        <div class="col-8 text-align-left">
          <div>{{result.description}}</div>
          <div><strong>Type:</strong> {{result.type.substring(0, result.type.length -1)}}</div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 my-5 text-center">
        <button @click="prevPage()" class="btn btn-outline-secondary mx-1">Previous Page
        </button>
        <button @click="nextPage()" class="btn btn-outline-secondary mx-1">Next Page</button>
        <span class="mx-2">Showing {{currentStartIndex}} to {{currentEndIndex}} of
            {{resultCount}} results</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import useSearch from '@/mixins/useSearch';
import useFilters from '@/mixins/useFilters';
import usePagination from '@/mixins/usePagination';

export default {
  setup(props) {
    const { searchResults, search } = useSearch(props.searchTerm);

    const {
      filters,
      applyFilters,
      clearFilters,
      filteredResults,
    } = useFilters(searchResults);

    const {
      currentPage,
      nextPage,
      prevPage,
      currentStartIndex,
      currentEndIndex,
      pagedResults,
    } = usePagination(filteredResults);

    const resultCount = computed(() => filteredResults.value.length);

    return {
      pagedResults,
      search,
      filters,
      applyFilters,
      clearFilters,
      currentPage,
      nextPage,
      prevPage,
      currentStartIndex,
      currentEndIndex,
      resultCount,
    };
  },
};
</script>

<style scoped>
input {
  font-size:20px;
  padding: 8px;
  width:80%
}
img {
  width:50px;
  margin-right:10px;
}

.title {
  font-weight: bold;
}

.btn {
  transition: all 0.15s ease;
}
</style>

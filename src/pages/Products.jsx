import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import SearchForm from '../partials/actions/SearchForm';
import FilterButton from '../components/DropdownFilter';
import ProductsTable from '../partials/products/ProductsTable';
import PaginationNumeric from '../components/PaginationNumeric';
import fetchProducts from '../components/FetchProducts';

function Products() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [title, setTitle] = useState('fanta');

  const handlerSearch = e => {
    e.preventDefault()
    console.log(e.target.search.value)
    setTitle(e.target.search.value)
  }

  const productos = fetchProducts(title)
  console.log(title)
  productos.data ? console.log( productos.data.fetchProducts.results ): 'cargando'

  return (
    <div className="flex h-screen overflow-hidden">
 
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main> 
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Catálogo</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm placeholder="Search by Product ID…" handlerSearch={handlerSearch}/>
                {/* Filter button */}
                <FilterButton align="right" />
              </div>

            </div>

            {/* Table */}
            {productos.data ? <ProductsTable products={productos.data.fetchProducts.results}/> : '' }

            {/* Pagination */}
            <div className="mt-8">
              <PaginationNumeric />
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Products;
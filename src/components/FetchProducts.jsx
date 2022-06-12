import React, { useEffect } from "react";


export const qqquseFectchProducts = () => {

    const query = `
        query FetchProducts(
            $tax_filter: [String!],
            $title_filter: String,
            $order_by: String,
            $order: String,
            $page: Int!,
            $per_page: Int!){
        fetchProducts {
            results(taxFilter: $tax_filter, titleFilter: $title_filter, orderBy: $order_by, order: $order, page: $page, perPage:
            $per_page) {
        id
        title
        price
        tax
        stock
        }
        pagination(taxFilter: $tax_filter, titleFilter: $title_filter, orderBy: $order_by, order: $order, page: $page, perPage:
        $per_page) {
        totalResults
        limitValue
        totalPages
        currentPage
        nextPage
        prevPage
        firstPage
        lastPage
        outOfRange
        }
    }
    }
    `;

    useEffect(() => {
        url = "http://vps-123eb2fc.vps.ovh.net/graphql",

            opts = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ query })
            };
        fetch(url, opts)
            .then(r => r.json())
            .then(data => console.log(data))
    })
}


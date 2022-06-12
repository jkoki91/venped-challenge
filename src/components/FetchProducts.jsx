import React, { useEffect } from "react";


function fetchProducts() {

    useEffect(() => {

        fetch("http://vps-123eb2fc.vps.ovh.net/graphql", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query FetchProducts(
                        $tax_filter: [String!],
                        $title_filter: String,
                        $order_by: String,
                        $order: String,
                        $page: Int!,
                        $per_page: Int!
                    )
                    {
                        fetchProducts {
                            results(taxFilter: $tax_filter, titleFilter: $title_filter, orderBy: $order_by, order: $order, page: $page, perPage:$per_page) {
                                id
                                title
                                price
                                tax
                                stock
                            }
                            pagination (taxFilter: $tax_filter, titleFilter: $title_filter, orderBy: $order_by, order: $order, page: $page, perPage:$per_page) {
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
                `,
                variables: {
                    tax_filter: ["es_general_21", "es_reduced_10"],
                    title_filter: "fanta",
                    order_by: "price",
                    order: "desc",
                    page: 2,
                    per_page: 5
                }
                 
            })
        })
            .then(r => r.json())
            .then(data => console.log(data))
    })
};

export default fetchProducts;
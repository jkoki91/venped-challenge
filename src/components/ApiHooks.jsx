import React, { useEffect } from "react";


export const aaaaaauseFectchProducts = () => {

    const query = `
        query {
            questions {
              tax_filter
              title_filter
              order_by
              order
              page
              per_page
            }
        }
    `;

    useEffect(() => {
        url = "http://vps-123eb2fc.vps.ovh.net/graphql",
        datas = [],
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


// exports.createPages = async function({actions, graphql}) {
//     const {data} = await graphql`
//         query {
//             contentfulProdukt {
//                 slug
//                 id
//             }
//         }
//     `

// //create paginated pages for posts

// const productsPerPage = 3

// const numPages = Math.ceil(data.contentfulProdukt.edges.length/ productsPerPage)

// Array.from({length: numPages}).forEach((_, i) => {
//         actions.createPages({
//             path: i==0 ? '/' : `/${i+1}`
//             component: require.resolve("./src/templates/allProducts.js"),
//             context: {
//                 limit: productsPerPage,
//                 skip: i * productsPerPage
//                 numPages,
//                 currentPage: i+i,
//             }
//         })
//     })

//     // Create single Product page

//     data.contentfulProdukt.edges.forEach(edge => {
//         const slug = edge.node.slug
//         const id = edge.node.id
//         actions.createPages({
//             path: slug,
//             component: require.resolve(`./src/templates/singleProduct.js`),
//             context: {id}
//         })
//     })

// }

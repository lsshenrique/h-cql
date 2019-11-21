# h-cql
Helper to inspect cypher queries

## Usage
const hCql = require('h-cql')

let cypher = 'MATCH (sl:SomeLabel) WHERE sl.name = $name RETURN sl'
let params = { name: "some name" }
let cql = { cypher, params }
hCql.inspect(cql)

The inspect method will change the parameters and will copy the result to the clipboard
// result: MATCH (sl:SomeLabel) WHERE sl.name = "some name" RETURN sl
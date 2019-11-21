"use strict";

const clipboardy = require('clipboardy');

module.exports = {
    inspect(cql) {
        let cypher = '';

        if (typeof cql === 'string') {
            cypher = cql;
        } else {
            cypher = cql.cypher;

            const paramsKeys = Object.keys(cql.params).sort((a, b) => a.length < b.length);

            if (paramsKeys.length) {
                for (const paramKey of paramsKeys) {
                    const regex = new RegExp(`\\$${paramKey}`, "g");
                    let param = cql.params[paramKey];

                    if (typeof param !== 'number') {
                        param = `"${cql.params[paramKey]}"`;
                    }

                    cypher = cypher.replace(regex, param);
                }
            }
        }

        if (cypher) clipboardy.writeSync(cypher);

        return cypher;
    },
};

export default {
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    // disable a default plugin
                    cleanupIds: false,
                    removeHiddenElems: false,
                    cleanupIds: false,
                    removeEmptyAttrs:true,
                    removeEmptyContainers:true,
                    minifyStyles:true,
                    removeUselessStrokeAndFill:true,

                    // customize the params of a default plugin
                    inlineStyles: {
                        onlyMatchedOnce: false,
                    },
                },
            },
        },
    ],
}

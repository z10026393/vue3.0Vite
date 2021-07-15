module.exports = {
    // plugins: {
    //     autoprefixer: {
    //         overrideBrowserslist: [
    //             "Android 4.1",
    //             "iOS 7.1",
    //             "Chrome > 31",
    //             "ff > 31",
    //             "ie >= 8",
    //             "last 10 versions", // 所有主流浏览器最近10版本用
    //         ],
    //         grid: true,
    //     },
    //     'postcss-pxtorem': {
    //         // rootValue: 37.5,
    //         rootValue: 192,
    //         propList: ['*'],
    //         unitPrecision: 5,
    //         replace: true,
    //         mediaQuery: false,
    //         minPixelValue: 0,
    //     }
    // }
    "plugins": {
        "autoprefixer": {
            overrideBrowserslist: ['> 0.15% in CN']
        },
        "postcss-pxtorem": {
            viewportWidth: 1920, // (Number) The width of the viewport.
            viewportHeight: 1024, // (Number) The height of the viewport.
            unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
            viewportUnit: 'rem', // (String) Expected units.
            selectorBlackList: [], // (Array) The selectors to ignore and leave as px.
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
            mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
            propList: ['*']
        }
    }
}
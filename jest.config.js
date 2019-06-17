// jest.config.js


module.exports = {

    verbose: true,
    testURL: "http://localhost:8000/",
    "setupFiles": [
        "./jest/globals.js"
    ],
    "coverageDirectory": "./coverage",

    "coveragePathIgnorePatterns": [
        "./jest",
    ],
    "reporters": [
        "default", [
            "./node_modules/jest-html-reporter", {
                "pageTitle": "Test Report",
                "outputPath": "./tests/test-report.html",
                "includeFailureMsg":true,
                // "theme": "darkTheme"
            }
        ]
    ]
};
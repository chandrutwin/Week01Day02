// Classroom Assignment: Conditional Statements

// a) if-else: print a message based on the browser name (no return value)
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome browser");
    } else {
        console.log("Launching " + browserName + " browser");
    }
}

// b) switch: print a message based on the test type (no return value)
// default case runs smoke tests
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running smoke tests");
            break;
        case "sanity":
            console.log("Running sanity tests");
            break;
        case "regression":
            console.log("Running regression tests");
            break;
        default:
            console.log("Unknown test type, running default smoke tests");
            break;
    }
}

// Call the functions
launchBrowser("chrome");
launchBrowser("firefox");

runTests("sanity");
runTests("regression");
runTests("abc");

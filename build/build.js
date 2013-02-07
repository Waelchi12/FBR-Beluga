{
    baseUrl: "../lib/js",
    paths: {},
    optimize: "none",
    onBuildRead: function(moduleName, path, contents) {
        // Wrap everything except almond
        var wrappedContents = "define(function (require, exports, module) {\n" + contents + "});\n";
        return moduleName === "../../dependencies/almond" ? contents : wrappedContents;
    },
    name: "../../dependencies/almond",
    include: ["fbControl"], // Main file
    insertRequire: ["fbControl"], // Auto-load main file
    out: "../bin/fbControl.min.js",
    wrap: true
}

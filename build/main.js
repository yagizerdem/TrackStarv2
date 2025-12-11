"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.onWindowAllClosed = function () {
        if (process.platform !== "darwin") {
            Main.application.quit();
        }
    };
    Main.onClose = function () {
        // Dereference the window object.
        Main.mainWindow = null;
    };
    Main.onReady = function () {
        Main.mainWindow = new electron_1.BrowserWindow({
            width: 800,
            height: 600,
            frame: false,
            webPreferences: {
                preload: path.join(__dirname, "preload.js"),
            },
        });
        if (!electron_1.app.isPackaged) {
            // dev
            Main.mainWindow.loadURL("http://localhost:5173/");
        }
        else {
            // prod
        }
        Main.mainWindow.on("closed", Main.onClose);
    };
    Main.main = function (app) {
        // we pass the Electron.App object and the
        // Electron.BrowserWindow into this function
        // so this class has no dependencies. This
        // makes the code easier to write tests for
        Main.application = app;
        Main.application.on("window-all-closed", Main.onWindowAllClosed);
        Main.application.on("ready", Main.onReady);
    };
    return Main;
}());
exports.default = Main;
//# sourceMappingURL=main.js.map
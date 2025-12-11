"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var main_1 = require("./main");
var windowController = require("./controller/windowController");
main_1.default.main(electron_1.app);
electron_1.app.whenReady().then(function () {
    electron_1.ipcMain.handle("windowController:minimize", windowController.minimize);
    electron_1.ipcMain.handle("windowController:maximize", windowController.maximize);
    electron_1.ipcMain.handle("windowController:close", windowController.close);
});
//# sourceMappingURL=app.js.map
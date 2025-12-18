"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var main_1 = require("./main");
var windowController = require("./controller/windowController");
var accountController = require("./controller/accountController");
main_1.default.main(electron_1.app);
electron_1.app.whenReady().then(function () {
    // window contorller
    electron_1.ipcMain.handle("windowController:minimize", windowController.minimize);
    electron_1.ipcMain.handle("windowController:maximize", windowController.maximize);
    electron_1.ipcMain.handle("windowController:close", windowController.close);
    // account controller
    electron_1.ipcMain.handle("accountController:createAccount", accountController.createAccount);
});
//# sourceMappingURL=app.js.map
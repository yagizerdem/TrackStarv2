import { app, ipcMain } from "electron";
import Main from "./main";
import * as windowController from "./controller/windowController";
import * as accountController from "./controller/accountController";

Main.main(app);

app.whenReady().then(() => {
  // window contorller
  ipcMain.handle("windowController:minimize", windowController.minimize);
  ipcMain.handle("windowController:maximize", windowController.maximize);
  ipcMain.handle("windowController:close", windowController.close);

  // account controller
  ipcMain.handle(
    "accountController:createAccount",
    accountController.createAccount
  );
});

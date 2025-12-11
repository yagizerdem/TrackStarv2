import { app, ipcMain } from "electron";
import Main from "./main";
import * as windowController from "./controller/windowController";

Main.main(app);

app.whenReady().then(() => {
  ipcMain.handle("windowController:minimize", windowController.minimize);
  ipcMain.handle("windowController:maximize", windowController.maximize);
  ipcMain.handle("windowController:close", windowController.close);
});

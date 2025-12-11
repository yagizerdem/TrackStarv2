import { ipcRenderer } from "electron";

const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("windowController", {
  minimize: () => ipcRenderer.invoke("windowController:minimize"),
  maximize: () => ipcRenderer.invoke("windowController:maximize"),
  close: () => ipcRenderer.invoke("windowController:close"),
});

// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// preload.js
const { contextBridge, ipcRenderer } = require("electron");
import { preloadBindings } from "i18next-electron-fs-backend";

contextBridge.exposeInMainWorld("api", {
    i18nextElectronBackend: preloadBindings(ipcRenderer, process),
});

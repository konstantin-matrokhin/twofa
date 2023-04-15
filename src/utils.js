import {BaseDirectory} from "@tauri-apps/api/path";
import {createDir, exists, readTextFile, writeFile} from "@tauri-apps/api/fs";

const POSSBILE_PERDIOD_STEP = 30;

export function getSeconds(date) {
    return date.getSeconds();
}

export function getSecondsRemaining(date, period = 30) {
    return period - (getSeconds(date) % POSSBILE_PERDIOD_STEP);
}

export async function loadAccounts() {
    const storageDirName = "config";
    const accountsFilePath = `${storageDirName}/accounts.json`;
    const fsOptions = {dir: BaseDirectory.AppData};

    if (!await exists(accountsFilePath, fsOptions)) {
        await createDir(storageDirName, {...fsOptions, recursive: true});
        await writeFile(accountsFilePath, JSON.stringify({accounts: []}), fsOptions);
    }

    return await readTextFile(accountsFilePath, fsOptions);
}

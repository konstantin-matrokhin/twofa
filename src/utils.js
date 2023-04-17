import {BaseDirectory} from "@tauri-apps/api/path";
import {createDir, exists, readTextFile, writeFile, writeTextFile} from "@tauri-apps/api/fs";
import totp from "totp-generator";

const POSSIBLE_PERIOD_STEP = 30;
const storageDirName = "config";
const accountsFilePath = `${storageDirName}/accounts.json`;
const fsOptions = {dir: BaseDirectory.AppData};

export function getSeconds(date) {
    return date.getSeconds();
}

export function getSecondsRemaining(date, period = 30) {
    return period - (getSeconds(date) % POSSIBLE_PERIOD_STEP);
}

export function generateCode(secret) {
    return totp(secret);
}

async function createEmptyAccountsStorage() {
    if (!await exists(accountsFilePath, fsOptions)) {
        await createDir(storageDirName, {...fsOptions, recursive: true});
        await writeFile(accountsFilePath, JSON.stringify({accounts: {}}), fsOptions);
    }
}

export async function loadAccounts() {
    await createEmptyAccountsStorage();
    const fileContent = await readTextFile(accountsFilePath, fsOptions);
    const json = JSON.parse(fileContent);
    return new Map(Object.entries(json.accounts));
}

export async function saveAccounts(accountsMap) {
    await writeTextFile(accountsFilePath, JSON.stringify({accounts: accountsMap}), fsOptions);
}

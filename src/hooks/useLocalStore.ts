import { useState } from "react"

export function UseLocalStore<T>() {
    this.usestate = useState<T | null>();
}

UseLocalStore.prototype.set = (key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    this.usestate[1](value);
}

UseLocalStore.prototype.get = (key: string): T | null => {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return null;
}

UseLocalStore.prototype.remove = (key: string) => {
    localStorage.removeItem(key);
    this.usestate[1](null);
}
import {readable, writable} from "svelte/store";

function createMessage() {
    const {subscribe, set, update} = writable("");
    return {
        subscribe,
        set: (value) => {
            console.log(value);
            set(value);
            setTimeout(() => set(""), 2000);
        },
        update,
        clear: () => set("")
    };
}

export const message = createMessage();

export const timer = readable(new Date(), (set) => {
    const interval = setInterval(() => {
       set(new Date());
    }, 500);
    return () => clearInterval(interval);
})

// export const codes = derived(timer, (timer) => {
//     getSeconds(timer);
// });

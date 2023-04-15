import {readable, writable} from "svelte/store";

function createMessage() {
    const {subscribe, set, update} = writable("");
    return {
        subscribe,
        update,
        set: (value) => {
            set(value);
            setTimeout(() => set(""), 2000);
        },
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

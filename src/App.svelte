<script>
    import Codes from './lib/Codes.svelte'
    import {loadAccounts} from "./utils.js";

    loadAccounts().then(data => console.log(data));
</script>

<main class="container">
    <Codes/>
</main>

<style>
    .container {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-content: start;
    }
</style>

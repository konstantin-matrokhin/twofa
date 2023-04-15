<script>
    import {timer} from "../../stores.js";
    import {getSeconds} from "../../utils.js";

    export let secondsRemaining = 0;
</script>

<div>
    <h2>{secondsRemaining} / {getSeconds($timer)}</h2>
</div>

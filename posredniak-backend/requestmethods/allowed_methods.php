<?php

    if(!in_array($_SERVER["REQUEST_METHOD"],$allowed_methods)){
        http_response_code(405);
        exit();
    }

?>
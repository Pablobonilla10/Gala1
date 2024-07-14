<?php
/*
Plugin Name: Weather API Plugin
Description: Fetches and displays weather information using the Weatherstack API.
Version: 1.0
Author: Tu Nombre
*/

function fetch_weather_data() {
    $apiKey = 'c6cf74207aec42522f1d21a981ede3d3'; // Reemplaza con tu clave API de Weatherstack
    $city = 'New York'; // Puedes cambiar la ciudad
    $units = 'm'; // Unidades métricas
    $language = 'es'; // Idioma español

    $url = 'http://api.weatherstack.com/current?access_key=' . $apiKey . '&query=' . $city . '&units=' . $units . '&language=' . $language;

    $response = wp_remote_get($url);
    if (is_wp_error($response)) {
        return 'Error en la solicitud: ' . $response->get_error_message();
    }

    $body = wp_remote_retrieve_body($response);
    $data = json_decode($body, true);

    if (isset($data['success']) && !$data['success']) {
        return 'Error en la API: ' . $data['error']['info'];
    }

    $weather = $data['current']['weather_descriptions'][0];
    $temperature = $data['current']['temperature'];

    return "El clima en {$city} es {$weather} con una temperatura de {$temperature}°C.";
}

function display_weather_data() {
    $weather_data = fetch_weather_data();
    echo '<div id="weather-container">' . $weather_data . '</div>';
}

add_shortcode('weather_api', 'display_weather_data');
?>

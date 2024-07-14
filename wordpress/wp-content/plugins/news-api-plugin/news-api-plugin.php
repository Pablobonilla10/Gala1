<?php
/*
Plugin Name: News API Plugin
Description: Fetches and displays news articles from the News API.
Version: 1.0
Author: Tu Nombre
*/

function fetch_news_from_api() {
    $apiKey = '47de0bbd7dc44b16903a5551250ce032'; // Reemplaza con tu clave API
    $url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' . $apiKey;

    $response = wp_remote_get($url);
    if (is_wp_error($response)) {
        return 'Error en la solicitud: ' . $response->get_error_message();
    }

    $body = wp_remote_retrieve_body($response);
    $data = json_decode($body, true);

    if (isset($data['status']) && $data['status'] == 'error') {
        return 'Error en la API: ' . $data['message'];
    }

    if (isset($data['articles']) && !empty($data['articles'])) {
        return $data['articles'];
    } else {
        return [];
    }
}

function display_news_from_api() {
    $articles = fetch_news_from_api();
    if (is_string($articles)) {
        echo '<p>' . $articles . '</p>'; // Mostrar el error si hay
        return;
    }
    
    if (empty($articles)) {
        echo '<p>No se encontraron noticias.</p>';
        return;
    }

    echo '<div id="news-container"><h2>Últimas Noticias</h2>';
    foreach ($articles as $article) {
        echo '<div style="margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">';
        echo '<h3>' . esc_html($article['title']) . '</h3>';
        if (!empty($article['urlToImage'])) {
            echo '<img src="' . esc_url($article['urlToImage']) . '" style="width: 100%; max-width: 600px;" alt="' . esc_attr($article['title']) . '">';
        }
        echo '<p>' . esc_html($article['description']) . '</p>';
        echo '<a href="' . esc_url($article['url']) . '" target="_blank">Leer más</a>';
        echo '</div>';
    }
    echo '</div>';
}

add_shortcode('news_api', 'display_news_from_api');

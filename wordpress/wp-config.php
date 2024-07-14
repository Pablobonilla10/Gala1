<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gala_copr' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'U(H{SQmRg}#W&q,EgQRcpMWOX.@Y?j?pJVuq9sv)La}^5KwF,.VQLFR4:?D$#IY>' );
define( 'SECURE_AUTH_KEY',  'cPslr]FNB I6Q^(;E(1eWZa72aD:fcRAU4~v$M+7d!(jTD:8*p#Cp~hZ(Yu8sFn=' );
define( 'LOGGED_IN_KEY',    'wR-^lB]$S}F.8)Ph#sOi/79ybw..O81HbP*Jv2Y,m.Sf]]k=tyJ3Vi`JFYQ cDjD' );
define( 'NONCE_KEY',        'q@,0s+W_Inxev+KmXlOI;PgLoagi&|-,GY9oee!Y3cfUB6Aj^S`&3~h(5lwer4,;' );
define( 'AUTH_SALT',        '/7`Ezca%74[QO1j4FyQ>i@e36Y2DS#(_-3C@r6M-UCidsr8MbzgV$k{ K6it.jgj' );
define( 'SECURE_AUTH_SALT', 'W$,Tcy$j(FN5~Uwok66C{tbK3;|(|cu#|Js$/9Cl2CcRq~+&G.bh+zO$@rh3lNaP' );
define( 'LOGGED_IN_SALT',   'sA0zB%?L9ajeuWZT;p<Tu&nob$9s.0^%]mrj`&ZkO556>6},]9r71hpP_*}FoZSt' );
define( 'NONCE_SALT',       'f=dtTUc?gTM3x[h`R))gTEHM5dT&^QtN%l62`l](Q1b9{kD]U SwhqkBnYBl<VGI' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

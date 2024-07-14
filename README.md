
# Proyecto de WordPress de Gala Corp

Este es el repositorio del proyecto de WordPress para Gala Corp. A continuación, encontrarás instrucciones detalladas sobre cómo configurar y ejecutar el proyecto localmente.

## Requisitos Previos

Antes de comenzar, asegúrate de tener los siguientes programas instalados en tu máquina:

- [XAMPP](https://www.apachefriends.org/index.html) (incluye Apache, MySQL, PHP y Perl)
- [Git](https://git-scm.com/)
- [Composer](https://getcomposer.org/) (opcional, si necesitas manejar dependencias PHP)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### 1. Clonar el Repositorio

Abre tu terminal y navega al directorio donde deseas clonar el repositorio. Luego, ejecuta el siguiente comando:

```sh
git clone https://github.com/Pablobonilla10/Gala1.git
```

### 2. Configurar XAMPP

1. **Iniciar Apache y MySQL**:
   - Abre el Panel de Control de XAMPP y asegúrate de que los servicios de Apache y MySQL estén iniciados.

2. **Configurar la Base de Datos**:
   - Abre [phpMyAdmin](http://localhost/phpmyadmin/).
   - Crea una nueva base de datos llamada `gala_db`.

### 3. Configurar el Proyecto

1. **Mover el Proyecto**:
   - Mueve los archivos del proyecto clonado a la carpeta `htdocs` de XAMPP. Por ejemplo:
     ```sh
     mv Gala1 /path/to/xampp/htdocs/gala_corp
     ```

2. **Configurar `wp-config.php`**:
   - Renombra el archivo `wp-config-sample.php` a `wp-config.php`.
   - Abre `wp-config.php` y edita las siguientes líneas con los detalles de tu base de datos:
     ```php
     define('DB_NAME', 'gala_db');
     define('DB_USER', 'root');
     define('DB_PASSWORD', '');
     define('DB_HOST', 'localhost');
     ```

### 4. Instalar WordPress

1. **Instalar WordPress**:
   - Abre tu navegador y ve a [http://localhost/gala_corp](http://localhost/gala_corp).
   - Sigue las instrucciones en pantalla para completar la instalación de WordPress.

### 5. Acceso a la Administración de WordPress

1. **Ingresar a la Administración**:
   - Una vez instalada, puedes acceder al panel de administración de WordPress en [http://localhost/gala_corp/wp-admin](http://localhost/gala_corp/wp-admin).

## Uso

- **Acceder al Sitio Web**: [http://localhost/gala_corp](http://localhost/gala_corp)
- **Panel de Administración**: [http://localhost/gala_corp/wp-admin](http://localhost/gala_corp/wp-admin)

## Problemas Comunes

### Error al Conectar con la Base de Datos

- Verifica que los detalles de la base de datos en `wp-config.php` sean correctos.
- Asegúrate de que el servidor MySQL esté en funcionamiento.

### Problemas con Permisos de Archivos

- Asegúrate de que los archivos en `htdocs/gala_corp` tengan los permisos adecuados.

### Configuración de `.htaccess`

- Si experimentas problemas con enlaces permanentes, asegúrate de que el archivo `.htaccess` esté presente en el directorio raíz de WordPress con las siguientes reglas básicas:
  ```txt
  # BEGIN WordPress
  <IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /gala_corp/
  RewriteRule ^index\.php$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /gala_corp/index.php [L]
  </IfModule>
  # END WordPress
  ```

### Configuración de `php.ini`

- Asegúrate de que el archivo `php.ini` tenga las configuraciones adecuadas para tu entorno de desarrollo, como el límite de memoria y el tiempo de ejecución máximo.

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. **Hacer un Fork del Repositorio**:
   - Haz un fork del repositorio a tu cuenta de GitHub.

2. **Clonar tu Fork**:
   - Clona el fork a tu máquina local:
     ```sh
     git clone https://github.com/tu-usuario/Gala1.git
     ```

3. **Crear una Rama de Trabajo**:
   - Crea una nueva rama para tu característica o arreglo:
     ```sh
     git checkout -b nombre-de-tu-rama
     ```

4. **Hacer tus Cambios y Confirmar**:
   - Realiza los cambios necesarios y confirma los cambios:
     ```sh
     git add .
     git commit -m "Descripción de tus cambios"
     ```

5. **Enviar los Cambios a GitHub**:
   - Envía los cambios a tu repositorio fork:
     ```sh
     git push origin nombre-de-tu-rama
     ```

6. **Crear un Pull Request**:
   - Ve a GitHub y crea un nuevo pull request desde tu fork.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.

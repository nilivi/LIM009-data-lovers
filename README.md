# **LEAGUEFIC**

## DEFINICIÓN DEL PRODUCTO

**LEAGUEFIC** es una plataforma web que presenta información esencial acerca del videojuego League of Legends y sus campeones.

## OBJETIVO DEL PRODUCTO

El problema del usuario es que desconoce -cierta- información de los Campeones del juego. Es por ello que **LEAGUEFIC** presenta, como solución, información de estadísticas y datos relevantes que permitirá a los usuarios determinar su estrategia de juego para poder iniciar una partida. 

## USUARIOS

**LEAGUEFIC** está dirigido a jugadores del videojuego League of Legends que estén interesados en conocer información sobre los Campeones, como sus roles y estadísticas de juego.

## PROCESO DE DISEÑO

1. Se realizó una encuesta a usuarios que ya habían interactuado con el videojuego League Of Legends, para conocer las preferencias de los usuarios al momento de elegir un campeón.

* A continuación se puede observar las 15 respuestas:

    ![Encabezado - encuesta](https://user-images.githubusercontent.com/47750982/55366172-29ddfc00-54ad-11e9-9a8a-810f6ad44672.jpg)

    ![Pregunta 1 - encuesta](https://user-images.githubusercontent.com/47750982/55366517-bc32cf80-54ae-11e9-98b5-562b1ef82429.jpg)

    ![Pregunta 2 - encuesta](https://user-images.githubusercontent.com/47750982/55366714-8c37fc00-54af-11e9-99a5-7fd8a4d3d990.jpg)

    ![Pregunta 3 - encuesta](https://user-images.githubusercontent.com/47750982/55366770-d02b0100-54af-11e9-8bc1-793487865b01.jpg)

    ![Pregunta 4 - encuesta](https://user-images.githubusercontent.com/47750982/55366852-25ffa900-54b0-11e9-8b6b-858cdde7fa9b.jpg)

    ![Pregunta 5 - encuesta](https://user-images.githubusercontent.com/47750982/55366911-62330980-54b0-11e9-91df-c1d21291e4f5.jpg)

    * A partir de las respuestas que se obtuvo:
        Historias de Usuarios.
        Prototipado de Baja Calidad.
        Prototipado de Alta Calidad (Test de Usabilidad).
    
2. Historias de usuario (Definición de terminado, criterios de aceptación)

    1. Yo como jugador de LOL quiero visualizar a todos los campeones para saber qué opciones tengo por elegir.

        **Criterios de aceptación:**

        - La página web debe tener una pantalla de Bienvenida que redirija al usuario a la lista de Campeones.
        - El usuario puede visualizar en una nueva pantalla a los 134 Campeones del videojuego (Nombre e imagen). 
        - El usuario puede visualizar un menú de navegación donde se muestre el LOGO, página de inicio, campeones y contacto.
        - El usuario puede (solo) visualizar un desplegable que muestre las opciones de orden y filtrado del contenido.

        **Definición de terminado:**

        - Prototipo de baja fidelidad (lápiz y papel)
        - Estructura HTML básica:        
            a. Pantalla de bienvenida            
            b. Input del botón que redirige a la página de Campeones            
            c. Pantalla de campeones            
            d. Crear un div que va a contener las cards de los campeones            
            e. Ul del menú de navegación            
            f. Input de orden y filtrado
        - JS:        
            a. Función que recorre la data para crear un nuevo array.            
            b. Nuevo array contiene los nombres e imágenes de los campeones.            
            c. Template para imprimir en pantalla los datos de cada campeón.            
        - Test:        
            a. Testear si son funciones (typeof)            
            b. Testear si se puede visualizar a los 134 campeones (Imagen, nombre y maná)            
        - CSS:        
            a. Formato a menú de navegación. fondo negro y letra arial (no es la oficial).            
            b. Background-image de **LEAGUEFIC**.            
            c. Separar cada card responsive.            
        - La madre ha dado “merge” al código en el repositorio de Github.

    2. Yo como jugador de LOL quiero organizar a mis campeones según su rol y principal característica (MP) para formular mi estrategia.

        **Criterios de aceptación:**

        - El usuario puede filtrar a los campeones según su rol.
        - El usuario puede elegir un rango de MP para filtrar a los campeones.
        - El usuario puede ordenar la lista de campeones (A-Z / Z-A)

        **Definición de terminado:**

        - JS:        
            a. Extraer información de la data: roles y MP.     
            b. Función que permita filtrar por rol.            
            c. Función que permita filtrar por rango de MP.    
            d. Función que permita ordenar a los campeones seleccionados.
        - HTML:        
            a. Nav-bar debajo del menú principal.            
            b. Aside con botones de filtrar por rol y ordenar (A-Z / Z-A)            
            c. Aside contiene dos input donde se puede introducir los rangos que desee.
        - Test:        
            a. Testear si ordena a los campeones (A-Z / Z-A).  
            b. Testear si filtra por el rol seleccionado.
            c. Testear si filtra a los campeones por rango introducido.
        - CSS:        
            a. Background-image de **LEAGUEFIC**            
            b. Separar cada card responsive            
            c. Aside ubicado al lado izquierdo de la pantalla.
        - La madre ha dado “merge” al código en el repositorio de Github.

    3. Yo como jugador de LOL quiero saber qué jugador tiene mayor HP  y AD para definir a cuál elegir.

        **Criterios de aceptación:**

        - El usuario puede observar el mayor HP máximo y mínimo de los campeones.
        - El usuario puede observar el mayor AD máximo y mínimo de los campeones.
        - El usuario puede observar el mayor HP máximo y mínimo de los campeones filtrado por rol.
        - El usuario puede observar el mayor AD máximo y mínimo de los campeones filtrado por rol.

        **Definición de terminado:**

        - JS:        
            a. Extraer información de la data: HP y AD.        
            b. Función que permita obtener el máximo y mínimo HP.            
            c. Función que permita obtener el máximo y mínimo AD.
        - HTML:        
            a. Nav-bar debajo del menú principal.            
            b. Aside contiene información de los valores: máximo y mínimo de HP.            
            c. Aside contiene información de los valores: máximo y mínimo de AD.            
        - Test:        
            a. Testear si se obtiene el valor máximo de HP.   
            b. Testear si se obtiene el valor mínimo de HP.   
            c. Testear si se obtiene el valor máximo de AD.    
            d. Testear si se obtiene el valor mínimo de AD.
        - CSS:        
            a. Aside ubicado al lado izquierdo de la pantalla.
        - La madre ha dado “merge” al código en el repositorio de Github.

    4. Yo como jugador de LOL quiero buscar a un campeón en específico para conocer su información.

        **Criterios de aceptación:**

        - El usuario puede ingresar el nombre del campeón que esté buscando.
        - El usuario puede visualizar la información del campeón buscado.

        **Definición de terminado:**

        - JS:        
            a. Función que recorre la data para crear un nuevo array.            
            b. Nuevo array contiene información completa de los campeones.            
            c. Template para imprimir en pantalla los datos de cada campeón.            
        - HTML:        
            a. Input que va a contener el nombre del campeón buscado.            
            b. Botón buscar que redireccionará a la información del campeón a buscar.            
        - Test:        
            a. Testear si la información pintada en la pantalla, pertenece al nombre del campeón ingresado en el input.
        - CSS:        
            a. Información del campeón es responsive.
        - La madre ha dado “merge” al código en el repositorio de Github.

3. Prototipado de Baja Calidad:

    * Pantalla de Bienvenida

    ![Página de bienvenida - PBF](https://user-images.githubusercontent.com/47750982/55369615-e4c1c600-54bc-11e9-8576-40cb4ffb7d52.jpg)

    * Pantalla tutorial

    ![Página de tutorial - PBF](https://user-images.githubusercontent.com/47750982/55369685-38ccaa80-54bd-11e9-8f19-a6d2ba5f27ad.jpg)

    * Pantalla de Campeones

    ![Página de campeones - PBF](https://user-images.githubusercontent.com/47750982/55369819-c14b4b00-54bd-11e9-893f-5ece82d1f54a.jpg)

    * Campeones Filtrados por Rol

    ![Campeones filtrados por rol - PBF](https://user-images.githubusercontent.com/47750982/55369892-14bd9900-54be-11e9-8e6d-9f2cad49b5dd.jpg)

    * Información de Campeones

    ![Información de Campeones - PBF](https://user-images.githubusercontent.com/47750982/55369974-69611400-54be-11e9-963c-aff056a893c3.jpg)

    * Pantalla de Contacto

    ![Página de Contacto - PBF](https://user-images.githubusercontent.com/47750982/55370065-bd6bf880-54be-11e9-96c3-6fe0422f8b17.jpg)

4. Prototipo de Alta Fidelidad:

    * Pantalla de Inicio

    ![Pantalla de inicio](https://user-images.githubusercontent.com/47750982/55370132-16d42780-54bf-11e9-8258-918f0310151f.jpg)

    * Pantalla Tutorial

    ![Pantalla de tutorial](https://user-images.githubusercontent.com/47750982/55370199-569b0f00-54bf-11e9-89e9-e24a1830c178.jpg)

    * Pantalla de Campeones

    ![Pantalla de campeones](https://user-images.githubusercontent.com/47750982/55370246-7af6eb80-54bf-11e9-9e9f-f9b33dce7866.jpg)

    * Información de Campeones

    ![Campeones filtrados](https://user-images.githubusercontent.com/47750982/55370299-a5e13f80-54bf-11e9-88e8-ac340d7518c6.jpg)

    * Pantalla de Contacto

    ![Contacto](https://user-images.githubusercontent.com/47750982/55370382-f5c00680-54bf-11e9-9821-d19414d3c35d.jpg)

    **Link en Zeplin** --> [Zeplin](https://app.zeplin.io/project/5c98023d9663d72519aa3a3c)

5. Test de Usabilidad:

    **Sugerencias**

    * María Jaramillo:

        - Identificar si es select, input o botón; para que se pueda identificar.
        
    * José Florencio:

        - Imagen de fondo es adecuada, porque llama la atención y va acorde al juego.

    * Angelo Casas:

        - El diseño de la página debería tener características similares a la página oficial de League of Legends.

    **Solución**

    * María Jaramillo:

        - Se añadió interacciones en Figma para un select, input o botón.
        

**Created by Kath & Nina**

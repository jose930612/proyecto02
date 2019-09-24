# Proyecto 02 Tópicos especiales en telemática

1. Nombres integrantes / email institucional :

    * Andrea González Osorio agonza84@eafit.edu.co
    * Jose alberto Mejía Osorio  jmejiao5@eafit.edu.co
    * Jhoany Londoño Toro  jlondo97@eafit.edu.co

2. Asignación de roles y responsabilidades de cada integrante del equipo en el desarrollo del proyecto 2:

    * Andrea González Osorio // Seguridad 
    * Jose Alberto Mejía //Disponibilidad
    * Jhoany Londoño Toro // Rendimiento.

3. Especificación de requisitos no funcionales.
    Disponibilidad: la aplicación estará en capacidad de soportar alto tráfico de peticiones y seguir disponible
    Rendimiento: La aplicación estará en capacidad de soportar 1 mil peticiones  por segundo usando balanceo de cargas  y cluster
    Seguridad: la aplicación estará en capacidad de asegurar y soportar los datos personales de los usuarios , encriptando y  separando las diferentes peticiones

4. Rediseño de la aplicación del Proyecto 1 (aspectos que mejoraron del proyecto original)
    - Para esta entrega la aplicación no sufrió ningún rediseño en su front tampoco en back  todas las mejoras que se realizaron fueron ampliaciones en la arquitectura , implementando balanceadores de cargas para mejorar la disponibilidad y rendimiento de la aplicación, separando los contenedores de la aplicación y ubicando la base de datos en un servidor aparte.

5. Diseño para la escalabilidad (disponibilidad, rendimiento y seguridad)
    - [Disponibilidad](https://docs.google.com/document/d/1dF2Bl6wX-K8xlgnyMB7GI2oBqESZKtDBqMTW6Txrdcg/edit?usp=sharing)
    - [Rendimiento](https://docs.google.com/document/d/16FYOtXrs6MkzfjhXEZLXa6K6Zq01XJghMc0PWpM_HTI/edit?usp=sharing)
    - [Seguridad](https://docs.google.com/document/d/1-LkwN70gugmant_LzWnMR3Lv5VHVhYHJGYON8rZq7P8/edit?usp=sharing)

7. Otra información que considere relevante, innovadora o diferenciadora en el desarrollo del proyecto02.

la aplicación usa como apoyo para hacer la identificación de sus usuarios a google , cualquier persona con cuenta google usará dicha aplicación y será acreditada por esta misma.
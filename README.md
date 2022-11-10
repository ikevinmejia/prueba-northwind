# Prueba Northwind Datos Maestros.

Este proyecto se construyó con el objetivo de visualizar los departamentos y municipios de Colombia partiendo del consumo de dos API para la consulta, además, se insertar información adicional por departamento para contextualizar mejor al usuario y con diseño responsive.

Como contexto extra y no menos importante se detallan los retos a desempeñar para la ejecución de la app:

Al momento de terminar de configurar el proyecto el servidor del API arrojó el codigo de error 301 lo que frenó el desarrollo, no obstante, se deja indicación del estado de desarrollo de la app en la cual solo falta gestionar el renderizado para evitar recargar la pagina para mostrar los datos, como solución propuesta se considera el uso del hook useEffect para la gestión del renderizado al consumir los datos del API.

Así mismo, para el consumo de datos se decidió por usar useContext para manejo de estado al ser un app pequeña y no requerir de Redux, se usó el sesionStorage para la comunicación entre la primera y segunda tabla de datos, y para finalizar, el consumo del API se intentó optimizar al máximo con el fin de ahorrar recursos y construir un solo arreglo de objetos con la información solicitada demostrando así el uso de métodos de para manipular arreglos.


## Comenzando 🚀

Aplicación construida con CREATE REACT APP.

### Pre-requisitos 📋

Para adquirir el código fuente debe descargar los archivos o hacer un git clone.

### Instalación 🔧

Intalar paquetes

```
npm install
```

Ejecutar servidor de desarrollo

```
npm run start
```

## Despliegue 📦

Ejecutar el comando

```
npm run build
```

## Construido con 🛠️

- [REACT](https://es.reactjs.org/) - Librería web usado
- [Tailwind](https://tailwindcss.com/) - Marco de trabajo CSS
- [POSTCSS](https://postcss.org/) - Post procesador CSS
- [MATERIAL UI](https://mui.com/) - Framework de CSS.


## Versionado 📌

Usamos [Git](https://git-scm.com/) para el versionado. Para todas las versiones disponibles.

## Autor ✒️

- **Kevin Mejia** - [ikevinmejia](https://github.com/ikevinmejia)


## Licencia 📄

Este proyecto está bajo la Licencia MIT.

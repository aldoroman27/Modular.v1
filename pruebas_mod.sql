-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-08-2025 a las 22:42:45
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebas_mod`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicios`
--

CREATE TABLE `ejercicios` (
  `idEjercicio` int(11) NOT NULL,
  `idLenguaje` int(11) NOT NULL,
  `idNivel` int(11) NOT NULL,
  `pregunta` text NOT NULL,
  `codigo` text DEFAULT NULL,
  `opcionA` varchar(255) NOT NULL,
  `opcionB` varchar(255) DEFAULT NULL,
  `opcionC` varchar(255) DEFAULT NULL,
  `opcionD` varchar(255) DEFAULT NULL,
  `respuestaCorrecta` char(1) NOT NULL,
  `xpOtorgado` int(11) NOT NULL DEFAULT 10
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ejercicios`
--

INSERT INTO `ejercicios` (`idEjercicio`, `idLenguaje`, `idNivel`, `pregunta`, `codigo`, `opcionA`, `opcionB`, `opcionC`, `opcionD`, `respuestaCorrecta`, `xpOtorgado`) VALUES
(1, 1, 1, '¿Cuál es el resultado de print(2 + 3)?', 'print(2 + 3)', '23', '5', 'Error', 'None', 'B', 10),
(2, 1, 1, '¿Qué tipo de dato es True en Python?', '', 'int', 'str', 'bool', 'float', 'C', 10),
(3, 1, 2, '¿Cuál es la salida del siguiente código?', 'for i in range(3):\n    print(i)', '0 1 2', '1 2 3', '0 1 2 3', 'Error', 'A', 20),
(4, 1, 2, '¿Qué imprime este código?', 'x = 5\nif x > 3:\n    print(\"Mayor\")\nelse:\n    print(\"Menor\")', 'Menor', 'Mayor', 'Error', '5', 'B', 20),
(5, 1, 3, '¿Qué devuelve la función?', 'def f(x):\n    return x * 2\n\nprint(f(3))', '6', '9', 'Error', 'None', 'A', 40),
(6, 1, 3, '¿Cuál es la salida?', 'nums = [x**2 for x in range(3)]\nprint(nums)', '[1, 4, 9]', '[0, 1, 4]', '[0, 1, 4, 9]', 'Error', 'B', 40);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lenguajes`
--

CREATE TABLE `lenguajes` (
  `idLenguaje` int(11) NOT NULL,
  `nombreLenguaje` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lenguajes`
--

INSERT INTO `lenguajes` (`idLenguaje`, `nombreLenguaje`) VALUES
(1, 'Python'),
(2, 'JavaScript'),
(3, 'C++'),
(4, 'Java');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `niveles`
--

CREATE TABLE `niveles` (
  `idNivel` int(11) NOT NULL,
  `nombreNivel` varchar(50) NOT NULL,
  `xpBase` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `niveles`
--

INSERT INTO `niveles` (`idNivel`, `nombreNivel`, `xpBase`) VALUES
(1, 'Junior', 10),
(2, 'Medium', 20),
(3, 'Senior', 35);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `progreso`
--

CREATE TABLE `progreso` (
  `idProgreso` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idEjercicio` int(11) NOT NULL,
  `correcto` tinyint(1) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `xpGanado` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nombreCompleto` text NOT NULL,
  `nombreUsuario` text NOT NULL,
  `contraseña` text NOT NULL,
  `fechaRegistro` date DEFAULT curdate(),
  `fotoPerfil` text DEFAULT NULL,
  `correoElectronico` varchar(25) DEFAULT NULL,
  `xp` int(11) DEFAULT 0,
  `vidas` int(11) DEFAULT 5
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombreCompleto`, `nombreUsuario`, `contraseña`, `fechaRegistro`, `fotoPerfil`, `correoElectronico`, `xp`, `vidas`) VALUES
(1, 'Aldo Román', 'aldo_dev', 'mi_contraseña_segura', '2025-07-25', 'amewing.jpg', 'juggeraldo@gmail.com', 0, 5),
(2, 'Juan Pérez Rodríguez', 'jperez', '$2b$12$4HMhE3lrvOtY01Vso.fyNOL7z2cxV9NT8P.2TVBRf0VPomgbyt0QG', '2025-08-14', NULL, 'juan.perez@example.com', 0, 5),
(4, 'Aldo Roman', 'aldodev27', 'prueba', '0000-00-00', 'hola.jpg', 'funcion@gmail.com', 0, 5),
(5, 'Aldo Guillermo Román Del Muro', 'aldodev2002', '$2b$12$yPuQvAIiyUoprwf50LvJ8OCt49Q6qZj5V88KhmYvUYbq5x2s5Gif2', '2025-08-20', NULL, 'ejemplo@gmail.com', 0, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_lenguajes`
--

CREATE TABLE `usuarios_lenguajes` (
  `idUsuario` int(11) NOT NULL,
  `idLenguaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios_lenguajes`
--

INSERT INTO `usuarios_lenguajes` (`idUsuario`, `idLenguaje`) VALUES
(1, 1),
(1, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  ADD PRIMARY KEY (`idEjercicio`),
  ADD KEY `idLenguaje` (`idLenguaje`),
  ADD KEY `fk_ejercicios_niveles` (`idNivel`);

--
-- Indices de la tabla `lenguajes`
--
ALTER TABLE `lenguajes`
  ADD PRIMARY KEY (`idLenguaje`),
  ADD UNIQUE KEY `nombreLenguaje` (`nombreLenguaje`) USING HASH;

--
-- Indices de la tabla `niveles`
--
ALTER TABLE `niveles`
  ADD PRIMARY KEY (`idNivel`);

--
-- Indices de la tabla `progreso`
--
ALTER TABLE `progreso`
  ADD PRIMARY KEY (`idProgreso`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idEjercicio` (`idEjercicio`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `nombreUsuario` (`nombreUsuario`) USING HASH;

--
-- Indices de la tabla `usuarios_lenguajes`
--
ALTER TABLE `usuarios_lenguajes`
  ADD PRIMARY KEY (`idUsuario`,`idLenguaje`),
  ADD KEY `idLenguaje` (`idLenguaje`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  MODIFY `idEjercicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `lenguajes`
--
ALTER TABLE `lenguajes`
  MODIFY `idLenguaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `niveles`
--
ALTER TABLE `niveles`
  MODIFY `idNivel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `progreso`
--
ALTER TABLE `progreso`
  MODIFY `idProgreso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  ADD CONSTRAINT `ejercicios_ibfk_1` FOREIGN KEY (`idLenguaje`) REFERENCES `lenguajes` (`idLenguaje`),
  ADD CONSTRAINT `ejercicios_ibfk_2` FOREIGN KEY (`idNivel`) REFERENCES `niveles` (`idNivel`),
  ADD CONSTRAINT `fk_ejercicios_niveles` FOREIGN KEY (`idNivel`) REFERENCES `niveles` (`idNivel`);

--
-- Filtros para la tabla `progreso`
--
ALTER TABLE `progreso`
  ADD CONSTRAINT `progreso_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`),
  ADD CONSTRAINT `progreso_ibfk_2` FOREIGN KEY (`idEjercicio`) REFERENCES `ejercicios` (`idEjercicio`);

--
-- Filtros para la tabla `usuarios_lenguajes`
--
ALTER TABLE `usuarios_lenguajes`
  ADD CONSTRAINT `usuarios_lenguajes_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE,
  ADD CONSTRAINT `usuarios_lenguajes_ibfk_2` FOREIGN KEY (`idLenguaje`) REFERENCES `lenguajes` (`idLenguaje`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

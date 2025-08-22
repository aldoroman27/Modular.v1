-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-08-2025 a las 17:07:50
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
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nombreCompleto` text NOT NULL,
  `nombreUsuario` text NOT NULL,
  `contraseña` text NOT NULL,
  `nivel` int(11) DEFAULT 1,
  `fechaRegistro` date DEFAULT curdate(),
  `fotoPerfil` text DEFAULT NULL,
  `correoElectronico` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombreCompleto`, `nombreUsuario`, `contraseña`, `nivel`, `fechaRegistro`, `fotoPerfil`, `correoElectronico`) VALUES
(1, 'Aldo Román', 'aldo_dev', 'mi_contraseña_segura', 1, '2025-07-25', 'amewing.jpg', 'juggeraldo@gmail.com'),
(2, 'Juan Pérez Rodríguez', 'jperez', '$2b$12$4HMhE3lrvOtY01Vso.fyNOL7z2cxV9NT8P.2TVBRf0VPomgbyt0QG', 1, '2025-08-14', NULL, 'juan.perez@example.com'),
(4, 'Aldo Roman', 'aldodev27', 'prueba', 1, '0000-00-00', 'hola.jpg', 'funcion@gmail.com'),
(5, 'Aldo Guillermo Román Del Muro', 'aldodev2002', '$2b$12$yPuQvAIiyUoprwf50LvJ8OCt49Q6qZj5V88KhmYvUYbq5x2s5Gif2', 1, '2025-08-20', NULL, 'ejemplo@gmail.com');

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
-- Indices de la tabla `lenguajes`
--
ALTER TABLE `lenguajes`
  ADD PRIMARY KEY (`idLenguaje`),
  ADD UNIQUE KEY `nombreLenguaje` (`nombreLenguaje`) USING HASH;

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
-- AUTO_INCREMENT de la tabla `lenguajes`
--
ALTER TABLE `lenguajes`
  MODIFY `idLenguaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

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

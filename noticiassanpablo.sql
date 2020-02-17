-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2020 at 12:32 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `noticiassanpablo`
--

-- --------------------------------------------------------

--
-- Table structure for table `noticia`
--

CREATE TABLE `noticia` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `cuerpo` longtext NOT NULL,
  `principal` char(1) NOT NULL,
  `imagen` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `noticia`
--

INSERT INTO `noticia` (`id`, `titulo`, `cuerpo`, `principal`, `imagen`) VALUES
(1, 'CURSO DE ESCUELA PARA PADRES', 'La educación de los niños y niñas es una labor apasionante, un proceso a través del cual se desarrolla el niño y se desarrolla el adulto que educa. Enfrentarnos a la tarea de educar puede convertirse en un gran reto para muchas familias.', '1', 'ep1.jpg'),
(2, 'VIERNES CULTURALES', 'Los padres y madres de Familia son uno de los pilares básicos para la formación, desarrollo y educación de sus hijas e hijos. La Secretaría de Educación abre este espacio en el que se incluyen actividades que propicien la formación integral de las y los estudiantes con miras a desarrollar competencias que le permitan  vivenciar una experiencia exitosa en su vida diaria.', '0', 'ep2.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `noticia`
--
ALTER TABLE `noticia`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `noticia`
--
ALTER TABLE `noticia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

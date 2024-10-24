-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 24, 2024 at 02:31 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `attend`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `nip` int NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `created_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`nip`, `first_name`, `last_name`, `email`, `password`, `status`, `created_at`) VALUES
(20240001, 'Agus', 'Kuntoro', 'agus.kuntoro@gmail.com', '$2b$10$Frorh9rzQzkRR.NRgnyeBufKaeHhrUm5.dheCZOmXw0qVhs99bSEW', 'active', '2024-10-12 02:14:52');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `nis` int NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `sur_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `bloodType` enum('A','B','AB','O','None') DEFAULT NULL,
  `sex` enum('male','female') DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `parent_id` int DEFAULT NULL,
  `grade_id` int DEFAULT NULL,
  `class_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`nis`, `first_name`, `last_name`, `sur_name`, `email`, `password`, `address`, `img`, `bloodType`, `sex`, `status`, `birthday`, `created_at`, `parent_id`, `grade_id`, `class_id`) VALUES
(2024100, 'Furida', 'Ikhsan', 'Furida', 'furida.ikhsan@gmail.com', '12345', 'Jalan Panjang Merak Jakarta Barat', NULL, 'A', 'male', 'active', '2014-10-16 13:10:30', '2024-10-06 13:10:30', 2024200, 2024300, 2024400),
(2024101, 'Ahmada Furoda', 'Shabila', 'Ahmad', 'Ahmad.Fukoda@gmail.com', '23456', NULL, 'img.jpg', 'A', 'female', 'active', '2014-10-16 13:10:30', '2024-10-12 01:56:49', 2024201, 2024301, 2024401);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`nip`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`nis`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

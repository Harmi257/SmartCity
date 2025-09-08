-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2025 at 03:13 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smartcitydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `complaints`
--

CREATE TABLE `complaints` (
  `id` int(11) NOT NULL,
  `citizen_name` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `complaint_text` text NOT NULL,
  `status` varchar(255) DEFAULT 'Pending',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `crimes`
--

CREATE TABLE `crimes` (
  `id` int(11) NOT NULL,
  `area` varchar(255) NOT NULL,
  `crime_type` varchar(255) NOT NULL,
  `reported_at` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `disasterrisks`
--

CREATE TABLE `disasterrisks` (
  `id` int(11) NOT NULL,
  `area` varchar(255) NOT NULL,
  `temperature` float NOT NULL,
  `humidity` float NOT NULL,
  `seismic_activity` float NOT NULL,
  `rainfall` float NOT NULL,
  `wind_speed` float NOT NULL,
  `air_quality_index` int(11) DEFAULT NULL,
  `recommendation` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `disasterrisks`
--

INSERT INTO `disasterrisks` (`id`, `area`, `temperature`, `humidity`, `seismic_activity`, `rainfall`, `wind_speed`, `air_quality_index`, `recommendation`, `createdAt`, `updatedAt`) VALUES
(1, 'Puducherry', 37.5, 70, 1.2, 500, 1390, 23, 'High seismic activity detected. Prepare emergency response protocols.', '2025-04-10 15:25:56', '2025-04-10 15:25:56'),
(2, 'Chennai', 35.5, 78, 3.2, 120.5, 20.5, 85, 'Monitor for possible flooding. Evacuation may be necessary if rainfall continues.', '2025-04-11 13:55:51', '2025-04-11 13:55:51'),
(3, 'Coimbatore', 29.8, 65, 7.1, 15.3, 12.4, 55, 'High seismic activity detected. Prepare emergency response protocols.', '2025-04-11 13:57:26', '2025-04-11 13:57:26'),
(4, 'lawspwet', 37, 60, 3.9, 700, 1490, 36, 'monitor for floods', '2025-04-11 21:25:34', '2025-04-11 21:25:34'),
(5, 'kottakupam', 37, 60, 3.9, 700, 1490, 36, '', '2025-04-12 17:35:39', '2025-04-12 17:35:39'),
(6, 'muthiyalpet', 37, 12, 7.8, 200, 1434, 35, 'check for tsunami ', '2025-04-12 18:34:33', '2025-04-12 18:34:33'),
(7, 'Puducherry', 38.5, 70.2, 2.1, 55, 22.5, 78, 'Monitor weather conditions. Issue alerts if temperature or rainfall increases significantly.', '2025-04-13 16:31:25', '2025-04-13 16:31:25'),
(8, 'Bussy street', 38, 19, 7.8, 456, 13921, 65, 'may be windy', '2025-04-13 17:41:51', '2025-04-13 17:41:51'),
(9, 'kalapet', 38, 19, 7.8, 456, 13921, 65, 'evacuation is needed', '2025-04-13 21:28:21', '2025-04-13 21:28:21'),
(10, 'Bussy street', 38, 19, 7.8, 456, 13921, 65, 'need help', '2025-04-15 05:07:03', '2025-04-15 05:07:03');

-- --------------------------------------------------------

--
-- Table structure for table `trafficdata`
--

CREATE TABLE `trafficdata` (
  `id` int(11) NOT NULL,
  `area` varchar(255) NOT NULL,
  `vehicle_count` int(11) NOT NULL,
  `timestamp` datetime DEFAULT NULL,
  `suggestion` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trafficdata`
--

INSERT INTO `trafficdata` (`id`, `area`, `vehicle_count`, `timestamp`, `suggestion`, `createdAt`, `updatedAt`) VALUES
(1, 'White Town', 300, '2025-04-07 13:42:45', 'Low Traffic — Route is clear.', '2025-04-07 13:42:45', '2025-04-07 13:45:32'),
(2, 'Gandhi Street', 150, '2025-04-07 14:08:27', 'Moderate Traffic — Avoid during peak hours.', '2025-04-07 14:08:27', '2025-04-07 14:08:27'),
(3, 'MG Road', 620, '2025-04-07 18:45:00', 'High Traffic — Use alternative routes or public transport.', '2025-04-07 14:15:32', '2025-04-07 14:15:32'),
(4, 'Anna Nagar', 145, '2025-04-10 15:38:46', 'Deploy traffic police during peak hours', '2025-04-10 15:38:46', '2025-04-10 15:38:46'),
(5, 'Lawspet', 300, '2025-04-11 20:04:29', '', '2025-04-11 20:04:29', '2025-04-11 20:04:29'),
(6, 'Vanrapet', 120, '2025-04-11 20:27:56', 'High Traffic — Use alternative routes or public transport.', '2025-04-11 20:27:56', '2025-04-11 20:27:56'),
(7, 'Kodampakam', 124, '2025-04-12 14:28:20', 'easy to goo through', '2025-04-12 14:28:20', '2025-04-12 14:28:20'),
(8, 'Bussy street', 580, '2025-04-12 15:47:35', 'drive safely', '2025-04-12 15:47:35', '2025-04-12 15:47:35'),
(9, 'Santhi Nagar', 348, '2025-04-13 17:26:50', 'need a emergency help', '2025-04-13 17:26:50', '2025-04-13 17:26:50'),
(10, 'Kalapet', 1000, '2025-04-13 21:26:13', 'need a emergency help contact near by hospital', '2025-04-13 21:26:13', '2025-04-13 21:26:13'),
(11, 'mudaliarpet', 200, '2025-06-03 11:49:23', 'no time taking', '2025-06-03 11:49:23', '2025-06-03 11:49:23');

-- --------------------------------------------------------

--
-- Table structure for table `transports`
--

CREATE TABLE `transports` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `usage` int(11) NOT NULL,
  `area` varchar(255) NOT NULL,
  `timestamp` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transports`
--

INSERT INTO `transports` (`id`, `type`, `usage`, `area`, `timestamp`, `createdAt`, `updatedAt`) VALUES
(1, 'train', 65, 'mudaliarpet', '2025-04-14 00:47:28', '2025-04-12 21:17:28', '2025-04-12 21:17:28'),
(2, 'bus', 34, 'mg road', '2025-04-12 20:32:54', '2025-04-12 20:32:54', '2025-04-12 20:32:54'),
(3, 'bus', 34, 'Anna nagar', '2025-04-12 20:41:02', '2025-04-12 20:41:02', '2025-04-12 20:41:02'),
(4, 'bus', 34, 'kodampakam', '2025-04-13 17:50:01', '2025-04-13 17:50:01', '2025-04-13 17:50:01'),
(5, 'bus', 90, 'kalapet', '2025-04-13 21:29:17', '2025-04-13 21:29:17', '2025-04-13 21:29:17'),
(6, 'bus', 90, 't nagar', '2025-04-15 05:08:14', '2025-04-15 05:08:14', '2025-04-15 05:08:14');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `role` varchar(255) DEFAULT 'public'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`, `role`) VALUES
(1, 'john_doe', 'john.doe@example.com', '$2b$10$BrKmWaMRowkooFtl07Bl3eSyPJDPIk4FnnEo2NsmB7F1ypokTUVNu', '2025-04-12 17:11:04', '2025-04-12 17:11:04', 'public'),
(2, 'mitha', 'mitha@example.com', '$2b$10$KlgqWOvNMY4Viht9PKy/0.NUx8zRRVtTf8ACA9fbOvsIzvjdhe.cW', '2025-04-13 09:40:55', '2025-04-13 09:40:55', 'official'),
(3, 'latha', 'l@gmail.com', '$2b$10$.KEWbImHnYWOfy7Tw/qEz.q.pO2x/T08PEI0lUP6PWk0An3iYFaUS', '2025-04-13 21:13:02', '2025-04-13 21:13:02', 'public'),
(4, 'gokul', 'g@gmail.com', '$2b$10$m8w5Thjo88Xgmz9WlaifQuGcuU9uRWunp92.mceL7FttEDsgip/5q', '2025-04-13 21:14:10', '2025-04-13 21:14:10', 'public'),
(5, 'haritha', 'h@gmail.com', '$2b$10$obopzqgOS/NuoMu.mFBiAusiEu8MLxkFOKsnpOvhzNuOBP1Q0Ikhy', '2025-04-13 21:14:53', '2025-04-13 21:14:53', 'public'),
(6, 'ram', 'ram@gmail.com', '$2b$10$ry7QLa60bi5ipIQlng3P2Ohnh/PsRoXAF.gO8Qzn9b.S9a5ZN6.Xu', '2025-04-13 21:18:13', '2025-04-13 21:18:13', 'official'),
(7, 'Lekha', 'lekha@gmail.com', '$2b$10$w1L2EkRdskwwu/vIcwTNRePt5uhz9051KGcUGqLl981pULesSJnxC', '2025-04-13 21:23:20', '2025-04-13 21:23:20', 'official'),
(17, 'siva', 'siva@gmail.com', '$2b$10$I8ths0dt45WkIS9sG22LWe1tL7WOQu5Xl73hRUYb8ZG5tZLlR/E4u', '2025-06-03 11:35:41', '2025-06-03 11:35:41', 'official'),
(18, 'hari', 'hari@gmail.com', '$2b$10$z9z0p4laP.oplfeb/fPqeOy/xT/gPKC.ccxgvimA9KWHt0ST5AKlO', '2025-06-03 11:38:08', '2025-06-03 11:38:08', 'public'),
(20, 'latha', 'latha@gmail.com', '$2b$10$H0mdcyEbvdFQbGMVkdiWWOdO9r9lRirOsVQLKDnECN2uyajBfK43y', '2025-06-03 11:39:40', '2025-06-03 11:39:40', 'official');

-- --------------------------------------------------------

--
-- Table structure for table `utilities`
--

CREATE TABLE `utilities` (
  `id` int(11) NOT NULL,
  `area` varchar(255) NOT NULL,
  `water` float NOT NULL DEFAULT 0,
  `electricity` float NOT NULL DEFAULT 0,
  `timestamp` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `utilities`
--

INSERT INTO `utilities` (`id`, `area`, `water`, `electricity`, `timestamp`, `createdAt`, `updatedAt`) VALUES
(1, 'White Town', 50, 250.45, '2025-04-10 13:38:14', '2025-04-10 13:38:14', '2025-04-10 13:38:14'),
(2, 'mudaliarpet', 29, 80.23, '2025-04-16 18:00:49', '2025-04-11 14:01:06', '2025-04-11 14:01:06'),
(3, 'Heritage Zone', 35, 160, '2025-04-11 12:19:41', '2025-04-11 12:19:41', '2025-04-11 12:19:41'),
(4, 'Anna Nagar', 800, 1000, '2025-04-17 18:09:39', '2025-04-11 14:39:39', '2025-04-11 14:39:39'),
(5, 'Vanrapet', 950, 1200, '2025-04-12 18:12:37', '2025-04-11 14:42:36', '2025-04-11 14:42:36'),
(6, 'kottakupam', 1345, 456, '2025-04-12 19:40:53', '2025-04-12 19:40:53', '2025-04-12 19:40:53'),
(7, 'kottakupam', 300, 250, '2025-04-13 18:03:10', '2025-04-13 18:03:10', '2025-04-13 18:03:10'),
(8, 'lawspwet', 300, 240, '2025-04-13 18:03:32', '2025-04-13 18:03:32', '2025-04-13 18:03:32'),
(9, 'bussy street', 40, 280, '2025-04-13 21:01:33', '2025-04-13 21:01:33', '2025-04-13 21:01:33'),
(10, 'kalapet', 400, 1690, '2025-04-13 21:30:33', '2025-04-13 21:30:33', '2025-04-13 21:30:33');

-- --------------------------------------------------------

--
-- Table structure for table `wastes`
--

CREATE TABLE `wastes` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  `area` varchar(255) NOT NULL,
  `timestamp` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wastes`
--

INSERT INTO `wastes` (`id`, `type`, `level`, `area`, `timestamp`, `createdAt`, `updatedAt`) VALUES
(1, 'Garbage', 90, 'Anna Nagar', '2025-04-10 13:50:28', '2025-04-10 13:50:28', '2025-04-10 13:50:28'),
(2, 'Garbage', 85, 'Anna Nagar', '2025-04-10 16:17:56', '2025-04-10 16:17:56', '2025-04-10 16:17:56'),
(3, 'Recyclable', 45, 'M.G. Road', '2025-04-10 16:18:57', '2025-04-10 16:18:57', '2025-04-10 16:18:57'),
(4, 'Organic', 72, 'White Town', '2025-04-10 16:19:14', '2025-04-10 16:19:14', '2025-04-10 16:19:14'),
(5, 'Recyclable', 60, 'Kottakuppam', '2025-04-10 16:19:30', '2025-04-10 16:19:30', '2025-04-10 16:19:30'),
(6, 'Organic', 30, 'Boomianpet', '2025-04-10 16:19:50', '2025-04-10 16:19:50', '2025-04-10 16:19:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `complaints`
--
ALTER TABLE `complaints`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `crimes`
--
ALTER TABLE `crimes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `disasterrisks`
--
ALTER TABLE `disasterrisks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trafficdata`
--
ALTER TABLE `trafficdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transports`
--
ALTER TABLE `transports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD UNIQUE KEY `email_8` (`email`),
  ADD UNIQUE KEY `email_9` (`email`),
  ADD UNIQUE KEY `email_10` (`email`),
  ADD UNIQUE KEY `email_11` (`email`),
  ADD UNIQUE KEY `email_12` (`email`),
  ADD UNIQUE KEY `email_13` (`email`),
  ADD UNIQUE KEY `email_14` (`email`),
  ADD UNIQUE KEY `email_15` (`email`),
  ADD UNIQUE KEY `email_16` (`email`);

--
-- Indexes for table `utilities`
--
ALTER TABLE `utilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wastes`
--
ALTER TABLE `wastes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `complaints`
--
ALTER TABLE `complaints`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `crimes`
--
ALTER TABLE `crimes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `disasterrisks`
--
ALTER TABLE `disasterrisks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `trafficdata`
--
ALTER TABLE `trafficdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `transports`
--
ALTER TABLE `transports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `utilities`
--
ALTER TABLE `utilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `wastes`
--
ALTER TABLE `wastes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2020 at 10:01 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ale_geek_battle`
--

-- --------------------------------------------------------

--
-- Table structure for table `absent_recap`
--

CREATE TABLE `absent_recap` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `attend` enum('present','absent','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `absent_recap`
--

INSERT INTO `absent_recap` (`id`, `user_id`, `class_id`, `attend`) VALUES
(1, 2, 1, 'present'),
(3, 2, 1, 'present');

-- --------------------------------------------------------

--
-- Table structure for table `class_schedule`
--

CREATE TABLE `class_schedule` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `class_name` varchar(100) NOT NULL,
  `class_room` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class_schedule`
--

INSERT INTO `class_schedule` (`id`, `date`, `class_name`, `class_room`) VALUES
(1, '2020-03-03', 'Mathematics', 'Room 207'),
(3, '2020-03-06', 'Chemical', 'Room 201');

-- --------------------------------------------------------

--
-- Table structure for table `material_sharing`
--

CREATE TABLE `material_sharing` (
  `id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `material_name` varchar(100) NOT NULL,
  `material_file` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `salt` text NOT NULL,
  `password` text NOT NULL,
  `status` enum('user','admin','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `salt`, `password`, `status`) VALUES
(2, 'andi irsandi', 'sandi@mail.co', 'b21d9a41927e4e6cbc', '1830edef78427ec4a3bc407f62652bb08f977f1e5d5716b1f5fdb07fda28a7499ec4822fa48ac54053b62e4f6e2ea5b73c8d70a3d4eb9f413ef690f6c8735af8', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absent_recap`
--
ALTER TABLE `absent_recap`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `class_id` (`class_id`);

--
-- Indexes for table `class_schedule`
--
ALTER TABLE `class_schedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `material_sharing`
--
ALTER TABLE `material_sharing`
  ADD PRIMARY KEY (`id`),
  ADD KEY `class_id` (`class_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `absent_recap`
--
ALTER TABLE `absent_recap`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `class_schedule`
--
ALTER TABLE `class_schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `material_sharing`
--
ALTER TABLE `material_sharing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `absent_recap`
--
ALTER TABLE `absent_recap`
  ADD CONSTRAINT `absent_recap_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class_schedule` (`id`),
  ADD CONSTRAINT `absent_recap_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `material_sharing`
--
ALTER TABLE `material_sharing`
  ADD CONSTRAINT `material_sharing_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class_schedule` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

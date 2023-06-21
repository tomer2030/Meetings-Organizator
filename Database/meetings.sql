-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2022 at 08:17 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meetingmenegment`
--

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

DROP TABLE IF EXISTS `meetings`;
CREATE TABLE `meetings` (
  `meetingId` int(11) NOT NULL,
  `devGroupId` int(11) NOT NULL,
  `startMeeting` datetime NOT NULL,
  `endMeeting` datetime NOT NULL,
  `description` varchar(100) NOT NULL,
  `meetingRoom` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`meetingId`, `devGroupId`, `startMeeting`, `endMeeting`, `description`, `meetingRoom`) VALUES
(1, 1, '2022-12-05 17:50:08', '2022-12-05 19:50:08', 'meeting for the new product', 'Blue Room'),
(2, 2, '2022-12-06 14:30:08', '2022-12-06 16:50:08', 'check if the new button is useful ', 'White Room'),
(3, 2, '2022-12-07 18:00:00', '2022-12-07 19:55:00', 'fun meeting ', 'Sarona Market'),
(4, 3, '2022-12-06 16:50:08', '2022-12-06 20:00:00', 'think about move to the new cloud', 'Blue Room'),
(5, 4, '2022-12-07 18:23:00', '2022-12-07 20:29:00', 'try the new product before do update', 'White Room'),
(6, 4, '2022-04-22 15:00:00', '2022-04-22 19:00:00', 'fun meeting', 'hello kitty room');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`meetingId`),
  ADD KEY `devGroupId` (`devGroupId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `meetingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`devGroupId`) REFERENCES `devgroups` (`devGroupId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/*
SQLyog Ultimate v8.4 
MySQL - 5.5.5-10.4.11-MariaDB : Database - jadwal_bus
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`jadwal_bus` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `jadwal_bus`;

/*Table structure for table `buses` */

DROP TABLE IF EXISTS `buses`;

CREATE TABLE `buses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nopol` varchar(255) DEFAULT NULL,
  `namaBus` varchar(255) DEFAULT NULL,
  `kapasitas` int(11) DEFAULT NULL,
  `fasilitas` varchar(255) DEFAULT NULL,
  `fotoBus` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

/*Data for the table `buses` */

insert  into `buses`(`id`,`nopol`,`namaBus`,`kapasitas`,`fasilitas`,`fotoBus`,`createdAt`,`updatedAt`) values (1,'AB111CD','RAMAYANA',40,'Ac,dll','ramayana.jpg','2020-07-26 06:31:45','2020-07-26 06:31:45'),(2,'AB122FD','HARYANTO',40,'Ac,Wifi','haryanto.jpg','2020-07-26 06:33:29','2020-07-26 06:33:29'),(3,'AD122FK','ROSALIA INDAH',37,'Ac,LCD','rosalia.jpg','2020-07-26 06:36:49','2020-07-26 06:36:49'),(4,'AB128JK','PUTRA REMAJA',37,'Ac,Wifi','putraremaja.jpg','2020-07-26 06:37:43','2020-07-26 06:37:43'),(5,'AB3232JK','MAJU LANCAR',37,'Ac,LCD','majulancar.jpg','2020-07-26 06:38:44','2020-07-26 06:38:44'),(6,'B200KK','SINAR JAYA',45,'Ac,Wifi','sinarjaya.jpg','2020-07-26 06:50:48','2020-07-26 06:50:48'),(7,'B200KK','PUSPA JAYA',41,'AC,LED','puspajaya.jpg','2020-07-26 06:57:27','2020-07-26 06:57:27'),(23,'AB0021','SUMBER JAYA',40,'ac,wifi','sumberbaru.jpg','2020-07-27 08:34:48','2020-07-27 08:34:48');

/*Table structure for table `jadwalbuses` */

DROP TABLE IF EXISTS `jadwalbuses`;

CREATE TABLE `jadwalbuses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tanggal` date DEFAULT NULL,
  `terminalRuteId` int(11) DEFAULT NULL,
  `busId` int(11) DEFAULT NULL,
  `jamBerangkat` time DEFAULT NULL,
  `jamSampai` time DEFAULT NULL,
  `etimasiWaktuPerjalanan` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_jadwalbuses1` (`terminalRuteId`),
  KEY `FK_jadwalbuses` (`busId`),
  CONSTRAINT `FK_jadwalbuses` FOREIGN KEY (`busId`) REFERENCES `buses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_jadwalbuses1` FOREIGN KEY (`terminalRuteId`) REFERENCES `terminalrutes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

/*Data for the table `jadwalbuses` */

insert  into `jadwalbuses`(`id`,`tanggal`,`terminalRuteId`,`busId`,`jamBerangkat`,`jamSampai`,`etimasiWaktuPerjalanan`,`createdAt`,`updatedAt`) values (1,'2020-07-29',2,1,'07:00:00','10:00:00','3 Jam','2020-07-26 08:50:15','2020-07-26 08:50:15'),(2,'2020-07-29',2,2,'12:00:00','15:00:00','3 Jam','2020-07-26 08:52:19','2020-07-26 08:52:19'),(3,'2020-07-29',1,6,'11:00:00','19:00:00','8 Jam','2020-07-26 08:55:54','2020-07-26 08:55:54'),(4,'2020-07-29',4,7,'08:00:00','05:00:00','21 Jam','2020-07-26 09:02:34','2020-07-26 09:02:34'),(5,'2020-07-29',3,5,'09:00:00','21:00:00','12 Jam','2020-07-26 09:05:26','2020-07-26 09:05:26'),(6,'2020-07-29',8,1,'13:00:00','16:00:00','3 Jam','2020-07-26 09:08:18','2020-07-26 09:08:18'),(7,'2020-07-29',8,2,'18:00:00','21:00:00','3 Jam','2020-07-26 09:27:40','2020-07-26 09:27:40'),(11,'2020-07-30',2,1,'07:00:00','10:00:00','3 Jam','2020-07-27 07:26:44','2020-07-27 07:26:44'),(12,'2020-07-31',2,1,'07:00:00','10:00:00','3 Jam','2020-07-27 07:29:12','2020-07-27 07:29:12'),(13,'2020-08-01',2,1,'07:00:00','10:00:00','3 Jam','2020-07-27 07:30:35','2020-07-27 07:30:35'),(14,'2020-08-02',2,1,'07:00:00','10:00:00','3 Jam','2020-07-27 07:30:40','2020-07-27 07:30:40'),(15,'2020-08-30',8,2,'12:00:00','15:00:00','3 Jam','2020-07-27 07:32:23','2020-07-27 07:32:23'),(16,'2020-08-31',8,2,'12:00:00','15:00:00','3 Jam','2020-07-27 07:32:26','2020-07-27 07:32:26'),(17,'2020-08-01',8,2,'12:00:00','15:00:00','3 Jam','2020-07-27 07:32:31','2020-07-27 07:32:31'),(18,'2020-08-02',8,2,'12:00:00','15:00:00','3 Jam','2020-07-27 07:32:35','2020-07-27 07:32:35');

/*Table structure for table `sequelizemeta` */

DROP TABLE IF EXISTS `sequelizemeta`;

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `sequelizemeta` */

insert  into `sequelizemeta`(`name`) values ('20200727030705-create-bus.js'),('20200727031120-create-jadwal-bus.js'),('20200727035918-create-terminal-rute.js');

/*Table structure for table `terminalrutes` */

DROP TABLE IF EXISTS `terminalrutes`;

CREATE TABLE `terminalrutes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `terminalAsal` varchar(255) DEFAULT NULL,
  `terminalTujuan` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

/*Data for the table `terminalrutes` */

insert  into `terminalrutes`(`id`,`terminalAsal`,`terminalTujuan`,`deskripsi`,`createdAt`,`updatedAt`) values (1,'YOGYAKARTA-GIWANGAN','JAKARTA-KAMPUNG-RAMBUTAN','transit kota x, kota b, kota c ','2020-07-26 07:45:13','2020-07-26 07:45:13'),(2,'YOGYAKARTA-JOMBOR','SEMARANG-TERBOYO','transit kota x ','2020-07-26 07:47:58','2020-07-26 07:47:58'),(3,'YOGYAKARTA-JOMBOR','SURABAYA-PURABAYA','transit kota x ','2020-07-26 07:49:12','2020-07-26 07:49:12'),(4,'YOGYAKARTA-JOMBOR','LAMPUNG-RAJABASA','transit kota x ','2020-07-26 07:50:17','2020-07-26 07:50:17'),(5,'LAMPUNG-RAJABASA','YOGYAKARTA-JOMBOR','transit kota x ','2020-07-26 07:51:43','2020-07-26 07:51:43'),(6,'JAKARTA-KAMPUNG-RAMBUTAN','YOGYAKARTA-GIWANGAN','transit kota x ','2020-07-26 07:53:01','2020-07-26 07:53:01'),(7,'SURABAYA-PURABAYA','YOGYAKARTA-JOMBOR','transit kota x ','2020-07-26 07:54:02','2020-07-26 07:54:02'),(8,'SEMARANG-TERBOYO','YOGYAKARTA-JOMBOR','transit kota x ','2020-07-26 08:33:01','2020-07-26 08:33:01');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

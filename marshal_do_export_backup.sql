-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: localhost    Database: marshal_do_export
-- ------------------------------------------------------
-- Server version	8.0.45

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_users`
--

DROP TABLE IF EXISTS `admin_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` enum('super_admin','admin') DEFAULT 'admin',
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_users`
--

LOCK TABLES `admin_users` WRITE;
/*!40000 ALTER TABLE `admin_users` DISABLE KEYS */;
INSERT INTO `admin_users` VALUES (1,'Marshal','marshaldoexport@gmail.com','$2b$12$QTOgDDDfAhPGiDGngRhiZewcsri/mYTi1js6oV9cTsJy7Jc6Ilj1C','super_admin',1,'2026-11-08 08:11:17');
/*!40000 ALTER TABLE `admin_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `slug` varchar(180) NOT NULL,
  `description` text,
  `image_url` text,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (4,'deluxe spices','deluxe-spices','','',1,'2026-11-08 16:47:11','2026-11-08 16:47:11'),(5,'Spices','spices','','',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(6,'Rice','rice','','',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(7,'Pulses & Lentils','pulses-lentils','','',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(8,'Spices Powders','spices-powders','','',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(9,'Dried Sea Foods','dried-sea-foods','','',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(10,'Canned Fish','canned-fish','','',1,'2026-11-09 14:56:29','2026-11-09 14:56:29');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enquiries`
--

DROP TABLE IF EXISTS `enquiries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enquiries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(150) NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `destination` varchar(150) NOT NULL,
  `product_category` varchar(100) NOT NULL,
  `enquiry_details` text NOT NULL,
  `status` enum('Pending','Replied','Closed') NOT NULL DEFAULT 'Pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enquiries`
--

LOCK TABLES `enquiries` WRITE;
/*!40000 ALTER TABLE `enquiries` DISABLE KEYS */;
INSERT INTO `enquiries` VALUES (1,'Marshal','Marshaldoexports','marshaldoexports@gmail.com','1234567889','India','Dried Sea Foods','test','Pending','2026-11-09 17:12:39'),(2,'Testing','Marshaldoexports','anchanamariselvam5@gmail.com','1234567890','India','Spices','Testing the Website','Pending','2026-11-09 17:39:24');
/*!40000 ALTER TABLE `enquiries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `managed_users`
--

DROP TABLE IF EXISTS `managed_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `managed_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(100) DEFAULT 'user',
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `managed_users`
--

LOCK TABLES `managed_users` WRITE;
/*!40000 ALTER TABLE `managed_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `managed_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `slug` varchar(220) NOT NULL,
  `description` text,
  `category_id` int DEFAULT NULL,
  `image_url` text,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'Green Cardamom','green-cardamom','Available in sizes ranging from 5 mm to 8.5 mm.\nIncludes Jumbo grade.\nAvailable in EU and Conventional grades.',4,'/images/Green Cardamom_.jpg',1,'2026-11-09 14:56:29','2026-11-09 16:07:46'),(4,'Keeri Parai Cloves','keeri-parai-cloves','High-Eugenol Keeri Parai Cloves.\nAvailable in EU and Conventional grades.',4,'/images/High-Eugenol Keeri Parai Cloves_.webp',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(5,'Black Pepper','black-pepper','Selected black pepper for export markets.\nAvailable in EU and Conventional grades.',4,'/images/Black Pepper_.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(6,'Nutmeg','nutmeg','Quality nutmeg sourced for international markets.\nAvailable in EU and Conventional grades.',4,'/images/Nutmeg.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(7,'Mace Flowers','mace-flowers','Selected mace flowers for export.\nAvailable in EU and Conventional grades.',4,'/images/Mace Flowers.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(8,'Cumin Seeds','cumin-seeds','Available in EU and Conventional grades.',5,'/images/Cumin.webp',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(9,'Fennel Seeds','fennel-seeds','Available in EU and Conventional grades.',5,'/images/Fennel Seed.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(10,'Coriander Seeds','coriander-seeds','Available in EU and Conventional grades.',5,'/images/Coriander Seeds.avif',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(11,'Mustard Seeds','mustard-seeds','Available in EU and Conventional grades.',5,'/images/Mustard Seeds.avif',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(12,'Ajwain','ajwain','Available in EU and Conventional grades.',5,'/images/Ajwain.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(13,'Fenugreek Seeds','fenugreek-seeds','Available in EU and Conventional grades.',5,'/images/Fenugreek Seeds.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(14,'Kasuri Methi','kasuri-methi','Available in EU and Conventional grades.',5,'/images/Kasuri-Methi.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(15,'Seeraga Samba Rice','seeraga-samba-rice','Available in EU and Conventional grades.',6,'/images/seeraga samba rice.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(16,'Matta Rice','matta-rice','Available in EU and Conventional grades.',6,'/images/matta_rice.webp',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(17,'Ponni Rice','ponni-rice','Available in EU and Conventional grades.',6,'/images/Ponni Rice.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(18,'Karuppu Kavuni Rice','karuppu-kavuni-rice','Available in EU and Conventional grades.',6,'/images/Karuppu Kavuni Rice.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(19,'Sona Masoori Rice','sona-masoori-rice','Available in EU and Conventional grades.',6,'/images/Sona Masoori Rice.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(20,'Traditional Rice & Millets','traditional-rice-millets','A selection of traditional rice varieties and millets.',6,'/images/traditional-rice-millets.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(21,'Red Lentils','red-lentils','Available in whole and split forms.',7,'/images/Red Lentils.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(22,'Yellow Lentils','yellow-lentils','Available in whole and split forms.',7,'/images/Yellow Lentils.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(23,'Urad Dal','urad-dal','Available in whole and split forms.',7,'/images/Urad dal.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(24,'Chana Dal','chana-dal','Selected Chana Dal for export.',7,'/images/Chana Dal.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(25,'Red Cowpeas','red-cowpeas','Selected red cowpeas for export.',7,'/images/Red Cowpeas.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(26,'Black Pepper Powder','black-pepper-powder','Black pepper processed into powder.',8,'/images/Black Pepper Powder.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(27,'Cloves Powder','cloves-powder','Cloves processed into powder.',8,'/images/Cloves Powder.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(28,'Jaffna Curry Powder','jaffna-curry-powder','Jaffna-style curry powder.',8,'/images/Jaffna Curry Powder.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(29,'Dried Queen Fish','dried-queen-fish','Moisture level: 8/100 (as provided).',9,'/images/Dried queen fish.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(30,'Dried Sailfish','dried-sailfish','Moisture level: 8/100 (as provided).',9,'/images/Dried Sailfish.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(31,'Dried Anchovy','dried-anchovy','Moisture level: 8/100 (as provided).',9,'/images/Dried Anchovy.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(32,'Dried Croaker','dried-croaker','Moisture level: 8/100 (as provided).',9,'/images/Dried Croaker.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(33,'Dried Shark','dried-shark','Moisture level: 8/100 (as provided).',9,'/images/Dried shark.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(34,'Dried Sardine','dried-sardine','Moisture level: 8/100 (as provided).',9,'/images/Dried Sardine.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(35,'Maldives Chips','maldives-chips','Moisture level: 8/100 (as provided).',9,'/images/Maldivs Chips.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(36,'Dried Baby Shrimps','dried-baby-shrimps','Moisture level: 8/100 (as provided).',9,'/images/Dried Baby Shrimps.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(37,'Dried Shrimps','dried-shrimps','Moisture level: 8/100 (as provided).',9,'/images/Dried Shrimps.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(38,'Chemmeen','chemmeen','Moisture level: 8/100 (as provided).',9,'/images/Chemmeen.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(39,'Jack Mackerel in Brine','jack-mackerel-in-brine','Canned jack mackerel in brine.',10,'/images/Jack Mackerel in Brine.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(40,'Jack Mackerel in Tomato Sauce','jack-mackerel-in-tomato-sauce','Canned jack mackerel in tomato sauce.',10,'/images/Jack Mackerel in Tomato Sauce.jpg',1,'2026-11-09 14:56:29','2026-11-09 14:56:29'),(41,'Jack Mackerel in Olive','jack-mackerel-in-olive','Canned jack mackerel in olive.',10,'/images/Jack Mackerel in Olive Oil.avif',1,'2026-11-09 14:56:29','2026-11-09 14:56:29');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'marshal_do_export'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-11-11 21:26:23

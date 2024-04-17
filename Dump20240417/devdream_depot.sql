-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: devdream
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `depot`
--

DROP TABLE IF EXISTS `depot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `depot` (
  `id_depot` bigint NOT NULL AUTO_INCREMENT,
  `date_depot` date DEFAULT NULL,
  `journal_de_stage` varchar(255) DEFAULT NULL,
  `rapport_de_stage` varchar(255) DEFAULT NULL,
  `travail` varchar(255) DEFAULT NULL,
  `etudiant_id` bigint DEFAULT NULL,
  `stage_id_stage` bigint DEFAULT NULL,
  PRIMARY KEY (`id_depot`),
  UNIQUE KEY `UK_j2fvegb6gas2k8hqaqonspd3` (`stage_id_stage`),
  KEY `FKl4xycjifaksuwb9j3oer2dx3b` (`etudiant_id`),
  CONSTRAINT `FKjfar11vnr3hgb7rbx5twqduuv` FOREIGN KEY (`stage_id_stage`) REFERENCES `stage` (`id_stage`),
  CONSTRAINT `FKl4xycjifaksuwb9j3oer2dx3b` FOREIGN KEY (`etudiant_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `depot`
--

LOCK TABLES `depot` WRITE;
/*!40000 ALTER TABLE `depot` DISABLE KEYS */;
INSERT INTO `depot` VALUES (1,NULL,NULL,NULL,NULL,NULL,1),(2,NULL,NULL,NULL,NULL,NULL,2),(3,NULL,NULL,NULL,NULL,NULL,3),(4,NULL,NULL,NULL,NULL,NULL,4),(5,NULL,NULL,NULL,NULL,NULL,5);
/*!40000 ALTER TABLE `depot` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 19:32:50

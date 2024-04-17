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
-- Table structure for table `application`
--

DROP TABLE IF EXISTS `application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `application` (
  `id_application` bigint NOT NULL AUTO_INCREMENT,
  `cv` varchar(255) DEFAULT NULL,
  `demande_de_stage` varchar(255) DEFAULT NULL,
  `etat` enum('Accepte','Refuse','Encours') DEFAULT NULL,
  `lettre_motivation` varchar(255) DEFAULT NULL,
  `etudiant_id` bigint DEFAULT NULL,
  `keyword_id_keyword` bigint DEFAULT NULL,
  `offre_id_offre` bigint DEFAULT NULL,
  PRIMARY KEY (`id_application`),
  KEY `FKcb7m01h3ujx6rwsamlslxls7m` (`etudiant_id`),
  KEY `FKcuyyevj63hlbpy872ngxead6a` (`keyword_id_keyword`),
  KEY `FKhims90yo59ndfdpb2l0amytk2` (`offre_id_offre`),
  CONSTRAINT `FKcb7m01h3ujx6rwsamlslxls7m` FOREIGN KEY (`etudiant_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKcuyyevj63hlbpy872ngxead6a` FOREIGN KEY (`keyword_id_keyword`) REFERENCES `keyword` (`id_keyword`),
  CONSTRAINT `FKhims90yo59ndfdpb2l0amytk2` FOREIGN KEY (`offre_id_offre`) REFERENCES `offre` (`id_offre`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application`
--

LOCK TABLES `application` WRITE;
/*!40000 ALTER TABLE `application` DISABLE KEYS */;
INSERT INTO `application` VALUES (1,NULL,NULL,'Accepte',NULL,NULL,NULL,NULL),(2,NULL,NULL,'Refuse',NULL,NULL,NULL,NULL),(3,NULL,NULL,'Accepte',NULL,NULL,NULL,NULL),(4,NULL,NULL,'Accepte',NULL,NULL,NULL,NULL),(5,NULL,NULL,'Refuse',NULL,NULL,NULL,NULL),(6,NULL,NULL,'Refuse','C:\\Users\\user\\Desktop\\PI\\integration\\integration\\material-dashboard-angular2-master\\src\\assets\\cv fr.pdf',NULL,NULL,NULL);
/*!40000 ALTER TABLE `application` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 19:32:49

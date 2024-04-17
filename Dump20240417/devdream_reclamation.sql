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
-- Table structure for table `reclamation`
--

DROP TABLE IF EXISTS `reclamation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reclamation` (
  `id_reclamation` bigint NOT NULL AUTO_INCREMENT,
  `contenu` varchar(255) DEFAULT NULL,
  `id_cible_reclamation` bigint DEFAULT NULL,
  `id_reclamateur` bigint DEFAULT NULL,
  `status_reclamation` enum('Traite','Nontraite') DEFAULT NULL,
  `typ_reclamation` enum('Manque_Communication','Manque_Suivi_Encadrement','Personnelle','Condition_de_Travail','Non_respet_engagements_contractuelles','evaluation','Administratif','non_respet_normes_professionelles') DEFAULT NULL,
  `cible_reclamation_id` bigint DEFAULT NULL,
  `reclamateur_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id_reclamation`),
  KEY `FKjk9oaacsenmhi5lhft271j9i` (`cible_reclamation_id`),
  KEY `FKrxn8iaeo9cb4xfv39m4ijlbav` (`reclamateur_id`),
  CONSTRAINT `FKjk9oaacsenmhi5lhft271j9i` FOREIGN KEY (`cible_reclamation_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKrxn8iaeo9cb4xfv39m4ijlbav` FOREIGN KEY (`reclamateur_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reclamation`
--

LOCK TABLES `reclamation` WRITE;
/*!40000 ALTER TABLE `reclamation` DISABLE KEYS */;
INSERT INTO `reclamation` VALUES (1,'first',1,1,'Traite','Manque_Communication',1,1),(2,'ajkl',NULL,NULL,'Nontraite','Personnelle',NULL,NULL),(3,'hhhhhhhhhhhhhh',NULL,NULL,'Nontraite','Personnelle',NULL,NULL),(4,'aaaaaaaaa',NULL,NULL,'Nontraite','Manque_Suivi_Encadrement',NULL,NULL),(5,'aaaaaaaaa',NULL,NULL,'Nontraite','Manque_Suivi_Encadrement',NULL,NULL),(6,'aaaaaa',NULL,NULL,'Nontraite','Manque_Suivi_Encadrement',NULL,NULL),(7,'ZZZ',NULL,NULL,'Nontraite','Personnelle',NULL,NULL);
/*!40000 ALTER TABLE `reclamation` ENABLE KEYS */;
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

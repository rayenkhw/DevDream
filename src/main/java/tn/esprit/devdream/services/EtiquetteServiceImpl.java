package tn.esprit.devdream.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Etiquette;
import tn.esprit.devdream.repositories.IEtiquetteRepository;

import java.util.List;
@Service
public class EtiquetteServiceImpl implements IEtiquetteService{

        @Autowired
        IEtiquetteRepository iEtiquetteRepository;
        @Override
        public List<Etiquette> retrieveAllEtiquettes() {
            return iEtiquetteRepository.findAll();
        }

        @Override
        public Etiquette retrieveEtiquette(Long etiquetteId) {
            return iEtiquetteRepository.findById(etiquetteId).get();
        }

        @Override
        public Etiquette addEtiquette(Etiquette etiquette) {
            return iEtiquetteRepository.save(etiquette);
        }

        @Override
        public void removeEtiquette(Long etiquetteId) {
            iEtiquetteRepository.deleteById(etiquetteId);
        }

        @Override
        public Etiquette modifyEtiquette(Etiquette etiquette) {
            return iEtiquetteRepository.save(etiquette);
        }
}

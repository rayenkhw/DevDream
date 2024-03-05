package tn.esprit.devdream.services;

import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.RessourceNotFound.NotFoundException;
import tn.esprit.devdream.entities.Commentaire;
import tn.esprit.devdream.entities.Tache;
import tn.esprit.devdream.repositories.ICommentaireRepository;
import tn.esprit.devdream.repositories.ITacheRepository;
import tn.esprit.devdream.repositories.IUserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CommentaireServiceImpl implements ICommentaireService {
    @Autowired
    ICommentaireRepository iCommentaireRepository;
    @Autowired
    ITacheRepository iTacheRepository;
    @Autowired
    IUserRepository iUserRepository;
    @Autowired
    EntityManager entityManager;

    @Override
    public List<Commentaire> retrieveAllCommentaires() {
        return iCommentaireRepository.findAll();
    }

    @Override
    public Commentaire retrieveCommentaire(Long commentaireId) {
        return iCommentaireRepository.findById(commentaireId).get();
    }

    @Override
    public Commentaire addCommentaire(Commentaire c) {
        return iCommentaireRepository.save(c);
    }

    @Override
    public void removeCommentaire(Long commentaireId) {
       iCommentaireRepository.deleteById(commentaireId);
    }

    @Override
    public Commentaire modifyCommentaire(Commentaire commentaire) {
        return iCommentaireRepository.save(commentaire);
    }

    @Override
    public Page<Commentaire> listeCommentaire(Pageable pageable) {
        return iCommentaireRepository.findAll(pageable);
    }
@Override
    public void ajouterCommentaireATache(Long tacheId, Commentaire commentaire) {
        Optional<Tache> optionalTache = iTacheRepository.findById(tacheId);
        if (optionalTache.isPresent()) {
            Tache tache = optionalTache.get();
            commentaire.setTache(tache);
            iCommentaireRepository.save(commentaire);
        } else {
            throw new NotFoundException("Tache non trouvée avec l'ID : " + tacheId);
        }
    }


@Override
    public List<Object[]> findCommentsWithUserByTacheId(Long tacheId) {
        return iCommentaireRepository.findCommentsWithUserByTacheId(tacheId);
    }



    @Override
    public Commentaire ajouterCommentaire(Long tacheId, String contenu, Long userId) {
        // Recherche de la tâche par son ID
        Tache tache = iTacheRepository.findById(tacheId)
                .orElseThrow(() -> new NotFoundException("Tâche non trouvée avec l'ID : " + tacheId));

        // Vérification si l'utilisateur est soit un étudiant, soit un encadrant associé à la tâche
        if (estEtudiantOuEncadrantDeTache(tache, userId)) {
            // Création d'un nouveau commentaire
            Commentaire commentaire = new Commentaire();
            commentaire.setContenu(contenu);

            // Association du commentaire à la tâche
            commentaire.setTache(tache);

            // Enregistrement du commentaire
            return iCommentaireRepository.save(commentaire);
        } else {
            throw new NotFoundException("L'utilisateur avec l'ID : " + userId + " n'est pas autorisé à commenter la tâche avec l'ID : " + tacheId);
        }
    }

    private boolean estEtudiantOuEncadrantDeTache(Tache tache, Long userId) {
        return tache.getEtudiant() != null && tache.getEtudiant().getIdUser().equals(userId)
                || tache.getEncadrant() != null && tache.getEncadrant().getIdUser().equals(userId);
    }

    @Override
    public Commentaire UpdateCommentaire(Long tacheId, String contenu, Long userId) {
        // Recherche de la tâche par son ID
        Tache tache = iTacheRepository.findById(tacheId)
                .orElseThrow(() -> new NotFoundException("Tâche non trouvée avec l'ID : " + tacheId));

        // Vérification si l'utilisateur est soit un étudiant, soit un encadrant associé à la tâche
        if (estEtudiantOuEncadrantDeTache(tache, userId)) {
            // Création d'un nouveau commentaire
            Commentaire commentaire = new Commentaire();
            commentaire.setContenu(contenu);

            // Association du commentaire à la tâche
            commentaire.setTache(tache);

            // Enregistrement du commentaire
            return iCommentaireRepository.save(commentaire);
        } else {
            throw new NotFoundException("L'utilisateur avec l'ID : " + userId + " n'est pas autorisé à commenter la tâche avec l'ID : " + tacheId);
        }
    }
}

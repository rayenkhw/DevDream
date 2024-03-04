package tn.esprit.devdream.services;


import tn.esprit.devdream.entities.Commentaire;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;

public interface ICommentaireService {
    public List<Commentaire> retrieveAllCommentaires();
    public Commentaire retrieveCommentaire(Long commentaireId);
    public Commentaire addCommentaire(Commentaire c);
    public void removeCommentaire(Long commentaireId);
    public Commentaire modifyCommentaire(Commentaire commentaire);
    Page<Commentaire> listeCommentaire(Pageable pageable);
    public void ajouterCommentaireATache(Long tacheId, Commentaire commentaire);
    public List<Object[]> findCommentsWithUserByTacheId(Long tacheId);

    public Commentaire ajouterCommentaire(Long tacheId, String contenu, Long userId);
    public Commentaire UpdateCommentaire(Long tacheId, String contenu, Long userId);

}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Marcel
 */
@Entity
@Table(name = "publicuser")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Publicuser.findAll", query = "SELECT p FROM Publicuser p"),
    @NamedQuery(name = "Publicuser.findByIdpublicuser", query = "SELECT p FROM Publicuser p WHERE p.idpublicuser = :idpublicuser"),
    @NamedQuery(name = "Publicuser.findByNick", query = "SELECT p FROM Publicuser p WHERE p.nick = :nick")})
public class Publicuser implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idpublicuser")
    private Integer idpublicuser;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 45)
    @Column(name = "nick")
    private String nick;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "owner")
    private Collection<Message> messageCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "publicuser")
    private Collection<User> userCollection;

    public Publicuser() {
    }

    public Publicuser(Integer idpublicuser) {
        this.idpublicuser = idpublicuser;
    }

    public Publicuser(Integer idpublicuser, String nick) {
        this.idpublicuser = idpublicuser;
        this.nick = nick;
    }

    public Integer getIdpublicuser() {
        return idpublicuser;
    }

    public void setIdpublicuser(Integer idpublicuser) {
        this.idpublicuser = idpublicuser;
    }

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    @XmlTransient
    public Collection<Message> getMessageCollection() {
        return messageCollection;
    }

    public void setMessageCollection(Collection<Message> messageCollection) {
        this.messageCollection = messageCollection;
    }

    @XmlTransient
    public Collection<User> getUserCollection() {
        return userCollection;
    }

    public void setUserCollection(Collection<User> userCollection) {
        this.userCollection = userCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idpublicuser != null ? idpublicuser.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Publicuser)) {
            return false;
        }
        Publicuser other = (Publicuser) object;
        if ((this.idpublicuser == null && other.idpublicuser != null) || (this.idpublicuser != null && !this.idpublicuser.equals(other.idpublicuser))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.Publicuser[ idpublicuser=" + idpublicuser + " ]";
    }
    
}

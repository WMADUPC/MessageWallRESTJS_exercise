/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity.service;

import entity.Message;
import entity.Publicuser;
import entity.User;
import java.util.AbstractCollection;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author Marcel
 */
@Stateless
@Path("entity.user")
public class UserFacadeREST extends AbstractFacade<User> {

    @PersistenceContext(unitName = "MessageWallRESTJSPU")
    private EntityManager em;

    public UserFacadeREST() {
        super(User.class);
    }

    @POST
    @Override
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public void create(User entity) {
        super.create(entity);
    }

    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public void edit(@PathParam("id") Integer id, User entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Integer id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public User find(@PathParam("id") Integer id) {
        return super.find(id);
    }

    @GET
    @Override
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<User> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<User> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
        return super.findRange(new int[]{from, to});
    }

    @GET
    @Path("count")
    @Produces(MediaType.TEXT_PLAIN)
    public String countREST() {
        return String.valueOf(super.count());
    }

    //My login
    //Using GET returns hhrp ERROR 405 method no allowed.
    @POST
    @Path("login")
    @Consumes({"application/json"})
    @Produces({"application/json"})
    public Publicuser login(User usr) {
        System.out.println("received user login " + usr.getLogin() + " password " + usr.getPassword());
        Query query = em.createQuery("select m from User m where m.login=:lg");
        query.setParameter("lg", usr.getLogin());

        List<User> ul = query.getResultList();
        if (!ul.isEmpty()) {
            User u = ul.get(0);
            System.out.println("Query user nick " + u.getLogin() + " password " + u.getPassword());
            if (u.getPassword().equals(usr.getPassword())) {
                Query query2 = em.createQuery("select m from Publicuser m where m.idpublicuser=:idpu");
                query2.setParameter("idpu", u.getPublicuser().getIdpublicuser());
                System.out.println("query2 result : " + query2.getSingleResult());
                Publicuser pu = (Publicuser) query2.getSingleResult();
                return pu;
            }
        }
        // wrong nick or wrong password
        Publicuser pu = new Publicuser();
        // In order for REST to accept a valid Publicuser
        // All fields have to be initialized
        // The nick cannot be "" it has to have at least 
        // a single character, that is why we have " "
        pu.setIdpublicuser(-1);
        pu.setNick(" ");
        pu.setMessageCollection(new ArrayList<Message>());
        pu.setUserCollection(new ArrayList<User>());
        return pu;
    }

    
    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
    
}

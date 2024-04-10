package ec.sasf.prueba.Eduardo.Vera.Repositories;


import ec.sasf.prueba.Eduardo.Vera.Entities.Users;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;



public interface IUserRepository extends JpaRepository<Users, Integer> {
   
    public Users findByUsername(String username);
    List<Users> findByEnabled(boolean enabled);
    List<Users> findByRolesRol(String nombreRol);

    
}

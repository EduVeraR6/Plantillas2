package ec.sasf.prueba.Eduardo.Vera.Controller;
import ec.sasf.prueba.Eduardo.Vera.Entities.Users;
import ec.sasf.prueba.Eduardo.Vera.Services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/usuarios")
@CrossOrigin
public class UserController {

    @Autowired
    private PasswordEncoder bcrypt;
    @Autowired
    private IUserService userService;

    @PostMapping
    public ResponseEntity<?> save(@RequestBody Users user) {
        user.setPassword(bcrypt.encode(user.getPassword()));
        return ResponseEntity.ok(userService.save(user));
    }

    @GetMapping
    public ResponseEntity<?> listaUsuarios() {
        return ResponseEntity.ok(userService.usuarios());
    }

    @GetMapping("/rol/{rol}")
    public ResponseEntity<?> listUsuariosByRol(@PathVariable String rol) {
        return ResponseEntity.ok(userService.usersByRol(rol));
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> verUser(@PathVariable String username) {
        return ResponseEntity.ok(userService.verUsuario(username));
    }

    @PutMapping("update/{id}")
    public ResponseEntity<?> updateUser(@PathVariable int id, @RequestBody Users users) { 
        return ResponseEntity.ok(userService.updateUsuario(id, users));
    }

    @GetMapping("/estado/{estado}")
    public ResponseEntity<?> listaUsuariosByEstado(@PathVariable boolean estado) {
        return ResponseEntity.ok(userService.listUsersByEstado(estado));
    }



}

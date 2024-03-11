package ec.sasf.prueba.Eduardo.Vera.Controller;


import ec.sasf.prueba.Eduardo.Vera.Entities.Role;
import ec.sasf.prueba.Eduardo.Vera.Entities.Users;
import ec.sasf.prueba.Eduardo.Vera.Services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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
}

package b10.com.example.b10.service;

import b10.com.example.b10.Models.Volunteer;
import b10.com.example.b10.repository.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class VolunteerService {

    @Autowired
    private VolunteerRepository repository;

    public Volunteer register(Volunteer volunteer) {
        if (repository.findByEmail(volunteer.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }
        return repository.save(volunteer);
    }

    public Volunteer login(String email, String password) {
        Optional<Volunteer> user = repository.findByEmail(email);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user.get();
        }
        throw new RuntimeException("Invalid credentials");
    }
}

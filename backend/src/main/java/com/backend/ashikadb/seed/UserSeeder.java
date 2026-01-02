package com.backend.ashikadb.seed;

import com.backend.ashikadb.entity.User;
import com.backend.ashikadb.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (userRepository.count() > 0) return;

        User user = User.builder()
                .name("Demo User")
                .email("demo@example.com")
                .password(passwordEncoder.encode("Password@123"))
                .build();

        userRepository.save(user);

        System.out.println("✅ Demo user seeded");
    }
}

package com.backend.ashikadb.service;

import com.backend.ashikadb.dto.AuthResponse;
import com.backend.ashikadb.dto.LoginRequest;
import com.backend.ashikadb.dto.RegisterRequest;
import com.backend.ashikadb.dto.UserResponseDTO;
import com.backend.ashikadb.repository.UserRepository;
import com.backend.ashikadb.utility.JwtService;
import com.backend.ashikadb.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public UserResponseDTO register(RegisterRequest request) {

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        userRepository.save(user);

        String token = jwtService.generateToken(user.getEmail());
        user.setAccessToken(token);
        user.setTokenExpiry(jwtService.getTokenExpiry());

        User savedUser = userRepository.save(user);

        return UserResponseDTO.builder()
                .access_token(token)
                .name(savedUser.getName())
                .email(savedUser.getEmail())
                .id(savedUser.getId())
                .build();
    }

    public UserResponseDTO login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(), request.getPassword()));

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String token = jwtService.generateToken(user.getEmail());

        user.setAccessToken(token);
        user.setTokenExpiry(jwtService.getTokenExpiry());

        User updatedUser = userRepository.save(user);


        return UserResponseDTO.builder()
                .access_token(token)
                .name(updatedUser.getName())
                .email(updatedUser.getEmail())
                .id(updatedUser.getId())
                .build();
    }
}
package com.UAPP.submissionService.controller;

import com.UAPP.submissionService.dto.ProjectRequest;
import com.UAPP.submissionService.model.Project;
import com.UAPP.submissionService.repository.ProjectRepository;
import com.UAPP.submissionService.service.ProjectService;
import com.UAPP.submissionService.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private ProjectService projectService;

    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping
    public ResponseEntity<Project> addProject(@RequestBody Project project,
                                              @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7);
        String username = jwtUtil.extractUsername(token);

        project.setCreatedBy(username); // ✅ store owner
        return ResponseEntity.ok(projectRepository.save(project));
    }

    @GetMapping("/my")
    public ResponseEntity<List<Project>> getMyProjects(@RequestHeader("Authorization") String token) {
        String username = jwtUtil.extractUsername(token.substring(7));
        return ResponseEntity.ok(projectService.getProjectsByStudent(username));
    }

    // For admin (get all projects)
    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects() {
        return ResponseEntity.ok(projectService.getAllProjects());
    }

}
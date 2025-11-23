package com.UAPP.submissionService.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Document(collection = "projects")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

    @Id
    private String id;

    private String title;
    private String description;
    private List<String> students;
    private String guideName;
    private String coGuideName;
    private String email;
    private String url;
    private String semester;
    private LocalDate startDate;
    private LocalDate finalSubmissionDate;
    private String githubRepo;
    @JsonIgnore
    private Binary projectSummaryPdf;
    private String createdBy;

    private List<Remark> remarks = new ArrayList<>();
}
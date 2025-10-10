package com.UAPP.submissionService.service;

import com.UAPP.submissionService.model.ImportantDate;
import com.UAPP.submissionService.repository.ImportantDateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ImportantDateService {
    private final ImportantDateRepository repo;

    public ImportantDate addDate(ImportantDate date) {
        return repo.save(date);
    }

    public void deleteDate(String id) {
        repo.deleteById(id);
    }

    public List<ImportantDate> getUpcomingDates() {
        return repo.findByDateAfter(Instant.now()); // auto-skip past dates
    }
}
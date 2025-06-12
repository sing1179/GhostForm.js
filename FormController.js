
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

@SpringBootApplication
public class GhostformApplication {
    public static void main(String[] args) {
        SpringApplication.run(GhostformApplication.class, args);
    }
}

@RestController
@RequestMapping("/api/v1/form")
class FormController {

    private final AtomicLong counter = new AtomicLong();
    private final List<FormMetadata> analytics = new ArrayList<>();

    // Analyze a form structure and return autofill suggestions
    @PostMapping("/analyze")
    public ResponseEntity<FormAnalysisResult> analyzeForm(@RequestBody FormStructure form) {
        // Simulate intelligent analysis (in real life, use ML/NLP)
        Map<String, String> autofill = new HashMap<>();
        for (FormField field : form.getFields()) {
            String suggestion = suggestValue(field.getName(), field.getType());
            autofill.put(field.getName(), suggestion);
        }
        // Track analytics
        analytics.add(new FormMetadata(counter.incrementAndGet(), form.getFields().size(), new Date()));
        return ResponseEntity.ok(new FormAnalysisResult(autofill));
    }

    // Get usage analytics (for Tableau or other visualization)
    @GetMapping("/analytics")
    public ResponseEntity<List<FormMetadata>> getAnalytics() {
        return ResponseEntity.ok(analytics);
    }

    // Helper: Suggest autofill value based on field name/type
    private String suggestValue(String name, String type) {
        name = name.toLowerCase();
        if (name.contains("email")) return "user@example.com";
        if (name.contains("name")) return "John Doe";
        if (name.contains("phone")) return "+1234567890";
        if (name.contains("address")) return "123 Main St";
        if (name.contains("city")) return "Metropolis";
        if (name.contains("zip")) return "12345";
        if (type.equalsIgnoreCase("password")) return "P@ssw0rd!";
        if (type.equalsIgnoreCase("date")) return "2000-01-01";
        return "SampleValue";
    }
}

package com.university.devops;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import org.junit.jupiter.api.Test;

class ProjectStructureTest {

    private static final Path WEBAPP = Path.of("src", "main", "webapp");

    @Test
    void requiredWebFilesExist() {
        assertTrue(Files.exists(WEBAPP.resolve("index.html")), "index.html is missing");
        assertTrue(Files.exists(WEBAPP.resolve("style.css")), "style.css is missing");
        assertTrue(Files.exists(WEBAPP.resolve("script.js")), "script.js is missing");
    }

    @Test
    void indexPageHasHeadingAndForm() throws IOException {
        String html = Files.readString(WEBAPP.resolve("index.html"));
        assertTrue(html.contains("Student Task Management System"), "Heading is missing");
        assertTrue(html.contains("id=\"task-form\""), "Add-task form is missing");
    }

    @Test
    void scriptContainsValidationLogic() throws IOException {
        String js = Files.readString(WEBAPP.resolve("script.js"));
        assertTrue(js.contains("trim()"), "Blank-input validation is missing");
    }
}

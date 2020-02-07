package com.example.demo;


import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Employee;
import com.example.demo.model.Project;
import com.example.demo.repository.AccessBundleEntityRepository;
import com.example.demo.repository.AccessBundleRepository;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ProjectController {
	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private AccessBundleRepository accessBundleRepository;

	@Autowired
	private AccessBundleEntityRepository accessBundleEntityRepository;
	@GetMapping("/projects")
	public List<Project> getAllProjects()  {
		return projectRepository.findAll();
	}

	@GetMapping("/projects/{id}")
	public ResponseEntity<Project> getProjectById(@PathVariable(value = "id") Long projectId)
			throws ResourceNotFoundException {
		Project project = projectRepository.findById(projectId)
				.orElseThrow(() -> new ResourceNotFoundException("Project not found for this id :: " + projectId));
		return ResponseEntity.ok().body(project);
	}

	@PostMapping("/projects")
	public Project createProject(@Valid @RequestBody Project project) {

		return projectRepository.save(project);
	}

	/*@PutMapping("/projects/{id}")
	public ResponseEntity<Project> updateEmployee(@PathVariable(value = "id") Long projectId,
                                                   @Valid @RequestBody Employee employeeDetails) throws ResourceNotFoundException {
		Project project = projectRepository.findById(projectId)
				.orElseThrow(() -> new ResourceNotFoundException("Project not found for this id :: " + projectId));

		employee.setEmailId(employeeDetails.getEmailId());
		employee.setLastName(employeeDetails.getLastName());
		employee.setFirstName(employeeDetails.getFirstName());
		final Employee updatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}

	@DeleteMapping("/employees/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long employeeId)
			throws ResourceNotFoundException {
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}*/
}

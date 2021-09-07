package br.ufes.gamecenter.apirest.controller;

import br.ufes.gamecenter.apirest.model.Expense;
import br.ufes.gamecenter.apirest.service.ExpenseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expense")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping
    public ResponseEntity addExpense(@RequestBody Expense expense) {
        System.out.println("Foi até aqui");
        expenseService.addExpense(expense);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity updateExpense(@RequestBody Expense expense) {
        expenseService.updateExpense(expense);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Expense>> getAllExpenses() {
        return ResponseEntity.ok(expenseService.getAllExpenses());
    }

    @GetMapping("/{name}")
    public ResponseEntity<Expense> getExpenseByName(@PathVariable String name) {
        return ResponseEntity.ok(expenseService.getExpenseByName(name));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteExpense(@PathVariable String id) {
        System.out.println(id);
        expenseService.deleteExpense(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}

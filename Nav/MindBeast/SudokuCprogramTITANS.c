#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>

#define SIZE 9

// Function to print the Sudoku grid
void printSudoku(int grid[SIZE][SIZE]) {
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            printf("%2d ", grid[i][j]);
        }
        printf("\n");
    }
}

// Function to check if num can be placed at grid[row][col]
bool isSafe(int grid[SIZE][SIZE], int row, int col, int num) {
    // Check if num is already present in that row
    for (int x = 0; x < SIZE; x++) {
        if (grid[row][x] == num) {
            return false;
        }
    }
    // Check if num is already present in that column
    for (int x = 0; x < SIZE; x++) {
        if (grid[x][col] == num) {
            return false;
        }
    }
    // Check if num is already present in that 3x3 subgrid
    int startRow = row - row % 3;
    int startCol = col - col % 3;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (grid[i + startRow][j + startCol] == num) {
                return false;
            }
        }
    }
    return true;
}

// Function to generate Sudoku grid
bool solveSudoku(int grid[SIZE][SIZE]) {
    int row, col;
    bool isEmpty = true;
    for (row = 0; row < SIZE; row++) {
        for (col = 0; col < SIZE; col++) {
            if (grid[row][col] == 0) {
                isEmpty = false;
                break;
            }
        }
        if (!isEmpty) {
            break;
        }
    }
    if (isEmpty) {
        return true; // Sudoku solved successfully
    }
    for (int num = 1; num <= SIZE; num++) {
        if (isSafe(grid, row, col, num)) {
            grid[row][col] = num;
            if (solveSudoku(grid)) {
                return true;
            }
            grid[row][col] = 0; // Unassigned if solution is not possible
        }
    }
    return false;
}

int main() {
    // Seed the random number generator
    srand(time(NULL));

    int grid[SIZE][SIZE] = {0};

    // Generate a solved Sudoku grid
    solveSudoku(grid);

    // Shuffle the rows within each 3x3 box to maintain validity
    for (int box = 0; box < SIZE; box += 3) {
        for (int i = 0; i < 3; i++) {
            int temp[SIZE];
            int randIndex = rand() % 3;
            for (int j = 0; j < SIZE; j++) {
                temp[j] = grid[box + randIndex][j];
                grid[box + randIndex][j] = grid[box + i][j];
                grid[box + i][j] = temp[j];
            }
        }
    }

    // Print the Sudoku grid
    printf("Generated Sudoku:\n");
    printSudoku(grid);

    return 0;
}
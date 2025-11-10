/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================
*/

// ============================================
// Step 1: Debug Standard Exceptions
// ============================================
// JavaScript standard exceptions include:
// - ReferenceError: variable not defined
// - TypeError: wrong data type
// - SyntaxError: invalid JS syntax
// - RangeError: number out of range
// We'll demonstrate them by validating input.

// ============================================
// Step 2 & 3: Add Input Validation, Custom Exceptions & finally Block
// ============================================

function processFile(fileName, fileData) {
  let fileHandle = null; // simulate a file handle

  try {
    // --- Step 2: Input Validation ---
    
    // Check for missing file name
    if (!fileName) {
      throw new ReferenceError("File name is missing!");
    }

    // Check that fileData is a string
    if (typeof fileData !== "string") {
      throw new TypeError("File data must be a string!");
    }

    // Check for empty string data
    if (fileData.trim() === "") {
      throw new Error("File data cannot be empty!");
    }

    // --- Step 2: Simulated File Processing ---
    fileHandle = `Handle-${fileName}`; // simulate opening a file
    console.log(`File "${fileName}" opened successfully.`);

    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData.toUpperCase()}`); // example processing

    console.log(`File "${fileName}" processed and saved successfully.`);

  } catch (err) {
    // --- Step 2: Error Handling ---
    console.error("Error:", err.message);

  } finally {
    // --- Step 3: finally block for resource cleanup ---
    if (fileHandle) {
      console.log(`Closing file handle for "${fileName}"`);
      fileHandle = null; // simulate releasing the resource
    } else {
      console.log("No file handle to close.");
    }
    console.log("Finally block executed ✅\n");
  }
}

// ============================================
// Step 4: Test Your Solution
// ============================================

console.log("=== Test 1: Missing file name ===");
processFile(); // ❌ ReferenceError: File name is missing

console.log("=== Test 2: File data not a string ===");
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string

console.log("=== Test 3: Empty file data ===");
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty

console.log("=== Test 4: Valid file data ===");
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully

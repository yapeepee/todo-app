-- Create Todos table
CREATE TABLE IF NOT EXISTS Todos (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Title NVARCHAR(200) NOT NULL,
    Description NVARCHAR(500),
    IsCompleted BOOLEAN DEFAULT 0,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt DATETIME
);

-- Create trigger to update UpdatedAt timestamp
CREATE TRIGGER IF NOT EXISTS update_todo_timestamp 
AFTER UPDATE ON Todos
FOR EACH ROW
BEGIN
    UPDATE Todos SET UpdatedAt = CURRENT_TIMESTAMP WHERE Id = NEW.Id;
END;
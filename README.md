# Todo App

A simple yet functional todo list application built with C# Web API backend and TypeScript frontend.

## Technologies Used

- **Backend**: .NET 8, Entity Framework Core, SQLite
- **Frontend**: TypeScript, HTML, CSS
- **API Documentation**: Swagger/OpenAPI

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (v16 or higher)
- Visual Studio Code or any code editor

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend/Todoapi
   ```

2. Restore NuGet packages:
   ```bash
   dotnet restore
   ```

3. Run the backend:
   ```bash
   dotnet run
   ```

   The API will start at `http://localhost:5250` (or check the console for the actual port)

4. Access Swagger UI at: `http://localhost:5250/swagger`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile TypeScript:
   ```bash
   npm run build
   ```

4. Open `index.html` in your browser or use a local server:
   ```bash
   # If you have Python installed
   python -m http.server 8080
   
   # Or use any other local server
   ```

## API Endpoints

- `GET /api/todo` - Get all todos
- `GET /api/todo/{id}` - Get a specific todo
- `POST /api/todo` - Create a new todo
- `PUT /api/todo/{id}` - Update a todo
- `DELETE /api/todo/{id}` - Delete a todo

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Clean and responsive UI
- Real-time data synchronization
- Input validation
- Error handling

## Project Structure

```
todoapp/
├── Backend/
│   └── Todoapi/
│       ├── Controllers/
│       ├── Models/
│       ├── Program.cs
│       └── appsettings.json
├── Frontend/
│   ├── src/
│   │   ├── api.ts
│   │   ├── main.ts
│   │   └── types.ts
│   ├── index.html
│   └── package.json
└── Database/
    └── create_tables.sql
```

## Development

The application uses:
- Entity Framework Core with Code First approach
- RESTful API design principles
- TypeScript for type safety
- Modular frontend architecture

## License

This project is open source and available under the MIT License.
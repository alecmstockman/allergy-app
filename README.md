# Allergy App

## Core Features

### Menu Filtering:
- Take a photo of any app, check against your list of food allergies/ intolerances/ preferences and filter the list to remove any items you cannot eat
- Translate any unclear names/words into easily identifiable ingredients with AI
- Use AI api call to present a list to the user of “safe” to eat menu items, slight modification required, and a list of potential questions for the server. 
- These can be saved for future reference

### Food/Symptom Tracking:
- Use camera, text, or voice entry to log food items and save to calendar. AI takes entry and formats
- Use text or voice entry to track symptoms
- Analyze the data to look for trends to identify potential allergies or food intolerances using AI


<img width="430" height="824" alt="Screenshot 2026-11-16 at 1 44 45 PM" src="https://github.com/user-attachments/assets/4ab97e32-d417-46a0-bb0b-c8db9b9794f8" />


## Local setup

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- [Node.js](https://nodejs.org/) 22.12 or newer

If you use `nvm`, select the repository's Node version with:

```bash
nvm install
nvm use
```

### 1. Start PostgreSQL

From the repository root:

```bash
docker compose up -d
docker compose ps
```

The PostgreSQL container is exposed locally on port `5433`.

### 2. Restore .NET dependencies and tools

```bash
dotnet restore src/AllergyApp.Api
dotnet tool restore
```

### 3. Configure the local connection string

The connection string is stored with .NET user secrets and is not committed to
Git. Each developer must configure it locally:

```bash
dotnet user-secrets set \
  "ConnectionStrings:DefaultConnection" \
  "Host=localhost;Port=5433;Database=allergy_app;Username=allergy_app;Password=local_password" \
  --project src/AllergyApp.Api
```

### 4. Apply database migrations

```bash
dotnet ef database update \
  --project src/AllergyApp.Api
```

This creates the local database schema from the migrations in
`src/AllergyApp.Api/Migrations`.

### 5. Start the API

```bash
dotnet run --project src/AllergyApp.Api
```

### 6. Install and start the frontend

Install the frontend dependencies:

```bash
npm --prefix src/allergy-app-web install
```

In a separate terminal, start the Vite development server:

```bash
npm --prefix src/allergy-app-web run dev
```

To create a production build:

```bash
npm --prefix src/allergy-app-web run build
```

## Working with migrations

After pulling a schema change, apply its committed migrations:

```bash
dotnet ef database update \
  --project src/AllergyApp.Api
```

When creating a new schema change, generate and commit a migration:

```bash
dotnet ef migrations add <MigrationName> \
  --project src/AllergyApp.Api
```

Do not recreate the tool manifest or the initial migration after cloning the
repository. Restore the existing local tools with `dotnet tool restore`.

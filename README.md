# BOT BATTLR: Phase 2 Code Challenge
This is a single-page React application that simulates a galactic bot collector. Users can browse a collection of available robots, enlist them into their personal army, release them, and permanently discharge them from service.

## 🌟 Core Features

* **View Collection:** See a list of all available bots (`BotCollection`).
* **Enlist Bot:** Click on a bot in the collection to add it to your army (`YourBotArmy`).
    * **Constraint:** A bot can be enlisted only **once**.
    * **Note:** The bot remains visible in the `BotCollection`.
* **Release Bot:** Click on an enlisted bot in your army to remove it from the army (frontend only).
* **Discharge Bot:** Click the **red "x" button** to permanently delete the bot from both the army, the collection, and the backend server (`DELETE /bots/:id`).

***

## 🚀 Setup Instructions

Follow these steps to get the project running locally.

### Prerequisites

* Node.js (v14+)
* npm (or yarn)
* **json-server** (installed either globally or locally via `npm install json-server --save-dev`)

### 1. Backend Setup

The application uses a local `json-server` to simulate a backend API.

1.  Ensure the `db.json` file is in the root directory.
2.  Open your first terminal window and start the server:

    ```bash
    json-server --watch db.json --port 8001
    ```

    Verify the server is running by visiting: `http://localhost:8001/bots`

### 2. Frontend Setup

1.  Open a second terminal window and navigate to the project root.
2.  Install dependencies (if you haven't already):

    ```bash
    npm install
    ```
3.  Start the React application:

    ```bash
    npm start
    ```

The application should now be accessible in your browser at `http://localhost:3000`.

***

## 📂 Project Structure

The React application is structured into the following key components:

src/ ├── components/ │ ├── BotCard.js # Renders single bot profile. │ ├── BotCollection.js # Renders the full list of available bots. │ ├── YourBotArmy.js # Renders the enlisted bots. │ └── BotSpecs.js # (Advanced) Detailed view for a single bot. ├── App.js # Main component: Handles state (bots, army), data fetching, and core logic. └── index.css # Enhanced styling for the entire application.


***

## ⚙️ Component Logic and Data Flow

| Component | State/Data Used | Key Functions |
| :--- | :--- | :--- |
| **`App`** | `bots` (all), `army` (enlisted) | `fetch` (GET), `enlistBot`, `releaseBot`, `dischargeBot` (DELETE) |
| **`BotCollection`** | `bots` | Passes bot data to `BotCard`, handles click to **enlist**. |
| **`YourBotArmy`** | `army` | Passes bot data to `BotCard`, handles click to **release**. |
| **`BotCard`** | Single `bot` object | Handles click for enlist/release, handles **discharge** ("x" button). |

***

## ✨ Advanced Deliverables (Optional)

These features demonstrate additional mastery of React concepts:

### Bot Detail View (`BotSpecs`)

* Clicking a bot card in `BotCollection` transitions the view to `BotSpecs` instead of immediately enlisting the bot.
* `BotSpecs` displays full details and two buttons: **"Enlist Bot"** (enlists and returns to list) and **"Go Back to List"** (returns to list without enlisting).

### Filtering and Sorting

*(This section confirms that you understand the advanced features as described in the prompt.)*

* **Sorting:** Implement a `SortBar` component that allows sorting the `BotCollection` by `health`, `damage`, or `armor`.
* **Filtering:** Allow users to filter bots displayed in the `BotCollection` by their `bot_class` (e.g., "Medic," "Assault").

---

## 🔗 Endpoints Used

| HTTP Method | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/bots` | Fetches the array of all available bots. |
| `DELETE` | `/bots/:id` | Permanently removes a bot from the backend database. |
# Simlionics Web Application

A modern web application for battery simulation technology.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

Follow these steps to run the application on your local machine:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SimlionicsWeb
   ```

2. **Install dependencies**
   ```bash
   npm install

   npm install dotenv 
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```
   # Database
   DATABASE_URL=your_database_url(= postgresql://neondb_owner:npg_LCvVTG5Inj7N@ep-floral-queen-a1801fee-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require )

   
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run check` - Run TypeScript type checking

## Project Structure

```
SimlionicsWeb/
├── client/             # Frontend React application
│   ├── src/           # Source files
│   │   ├── components/# React components
│   │   ├── pages/     # Page components
│   │   └── lib/       # Utilities and helpers
├── server/            # Backend Express server
├── shared/            # Shared types and utilities
└── attached_assets/   # Static assets
```

## Troubleshooting

If you encounter any issues:

1. **Port already in use**
   - Make sure no other application is running on port 3000
   - You can change the port in the server configuration

2. **Database connection issues**
   - Verify your DATABASE_URL in the .env file
   - Ensure your database server is running

3. **Dependencies issues**
   - Delete the `node_modules` folder and `package-lock.json`
   - Run `npm install` again

## Support

If you need help, please:
1. Check the troubleshooting section
2. Review the project documentation


## License

This project is licensed under the MIT License.

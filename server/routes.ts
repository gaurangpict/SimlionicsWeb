import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Return success response
      return res.status(201).json({
        success: true,
        message: "Message received. We'll get back to you soon!",
        data: contactMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      }
      
      // Handle other errors
      console.error("Error submitting contact form:", error);
      return res.status(500).json({
        success: false,
        message: "Server error occurred. Please try again later."
      });
    }
  });
  
  // Get all contact messages
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json({
        success: true,
        data: messages
      });
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      return res.status(500).json({
        success: false,
        message: "Server error occurred while retrieving messages."
      });
    }
  });
  
  // Get a specific contact message by ID
  app.get("/api/contact/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid ID format"
        });
      }
      
      const message = await storage.getContactMessageById(id);
      if (!message) {
        return res.status(404).json({
          success: false,
          message: "Message not found"
        });
      }
      
      return res.status(200).json({
        success: true,
        data: message
      });
    } catch (error) {
      console.error("Error retrieving contact message:", error);
      return res.status(500).json({
        success: false,
        message: "Server error occurred while retrieving the message."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

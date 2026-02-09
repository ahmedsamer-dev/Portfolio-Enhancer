import { db } from "./db";
import {
  skills, projects,
  type Skill, type Project,
  type InsertSkill, type InsertProject
} from "@shared/schema";

export interface IStorage {
  getSkills(): Promise<Skill[]>;
  getProjects(): Promise<Project[]>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async seedData(): Promise<void> {
    const existingSkills = await this.getSkills();
    if (existingSkills.length === 0) {
      const skillsData: InsertSkill[] = [
        // Backend Development
        { category: "Backend Development", name: "ASP.NET Core" },
        { category: "Backend Development", name: "Web API Development" },
        { category: "Backend Development", name: "RESTful API Design" },
        { category: "Backend Development", name: "Clean Architecture Basics" },
        // Programming
        { category: "Programming", name: "C#" },
        { category: "Programming", name: "Object-Oriented Programming (OOP)" },
        { category: "Programming", name: "Problem Solving" },
        // Database
        { category: "Database", name: "SQL Server" },
        { category: "Database", name: "Database Design" },
        { category: "Database", name: "ERD" },
        { category: "Database", name: "SQL Queries (JOIN, Subquery, Functions, Views)" },
        // Tools
        { category: "Tools", name: "Git & GitHub" },
        { category: "Tools", name: "Visual Studio" },
        { category: "Tools", name: "Postman" },
      ];
      
      await db.insert(skills).values(skillsData);

      const projectsData: InsertProject[] = [
        {
          title: "JobWebSystem",
          description: "A professional job application and management system built with clean architecture principles.",
          tags: ["C#", "ASP.NET Core", "SQL Server", "Clean Architecture"],
          imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", 
          link: "https://github.com/ahmedsamer-dev/"
        }
      ];
      
      await db.insert(projects).values(projectsData);
    }
  }
}

export const storage = new DatabaseStorage();

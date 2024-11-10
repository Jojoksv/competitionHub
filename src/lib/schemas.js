import { z } from "zod";

const nameSchema = z.string()
  .trim()
  .min(1, { message: "Le nom et prénoms sont requis" })
  .max(64 , { message: "Le nom et le prénom ne doivent pas dépasser 64 caractères." })

const emailSchema = z.string()
  .trim()
  .email({ message: "L'email est invalide" })
  .min(5, { message: "L'email doit contenir au moins 5 caractères" })
  .max(254, { message: "L'email ne doit pas dépasser 254 caractères" })

const projectSchema = z.string()
  .trim()
  .min(1, { message: "Le nom du projet est requis" })
  .max(100, { message: "Le nom du projet ne doit pas dépasser 100 caractères" })

const descriptionSchema = z.string()
  .trim()
  .min(1, { message: "Veuillez donner une description du projet" })
  .max(500, { message: "La description ne doit pas dépasser 500 caractères" })

  export { nameSchema, emailSchema, projectSchema, descriptionSchema };
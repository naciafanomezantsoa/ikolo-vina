// server.js
// =========================
// 🚀 Serveur backend Node.js Express pour envoyer les emails via Gmail
// =========================

// Importation des modules nécessaires
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors()); // Autorise les requêtes depuis ton frontend React
app.use(express.json()); // Pour lire les données JSON envoyées par le frontend

// ✅ Route POST pour recevoir et envoyer les messages de ton formulaire
app.post("/api/contact", async (req, res) => {
  const { nom, email, message } = req.body;

  // Vérifie que les champs sont bien remplis
  if (!nom || !email || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  try {
    // Création du transporteur Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ramandimbsonespoir@gmail.com", // 👉 Remplace par ton adresse Gmail
        pass: "klan fnly adkk cdyo", // ⚠️ Pas ton vrai mot de passe Gmail !
      },
    });

    // Configuration du contenu de l'email
    // 💌 Configuration du contenu de l'email
    const mailOptions = {
      from: `"${nom}" <${email}>`,
      to: "ramandimbsonespoir@gmail.com",
      subject: `📩 Nouveau message de ${nom}`,
      text: [
        `👤 Nom : ${nom}`,
        `📧 Email : ${email}`,
        "",
        "📝 Message :",
        `${message}`,
      ].join("\n"), // structure du texte propre
    };

    // Envoi de l’email
    await transporter.sendMail(mailOptions);

    // Réponse au frontend
    res
      .status(200)
      .json({ message: "Votre message a été envoyé avec succès ✅" });
  } catch (error) {
    console.error("Erreur lors de l’envoi de l’email :", error);
    res
      .status(500)
      .json({ error: "Erreur serveur. Impossible d’envoyer le message." });
  }
});

// Lancement du serveur sur le port 5000
app.listen(5000, () =>
  console.log("✅ Serveur email actif sur http://localhost:5000")
);

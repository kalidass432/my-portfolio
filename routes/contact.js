const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) =>{
    try {
        const { name, email,subject, message} = req.body;
        console.log("📥 Form received:", req.body);        

        // Send email notification
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

          await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New message from ${name}`,
            text:`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
          });

          console.log("✅ Email sent successfully");
          res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
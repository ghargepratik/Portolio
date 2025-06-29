# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light theme toggle
- ✨ Smooth animations with Framer Motion
- 📧 Contact form with EmailJS integration
- 📱 Mobile-first responsive design
- ⚡ Fast and optimized performance

## Setup Instructions

### 1. Clone and Install

```bash
git clone <repository-url>
cd portfolio-website
npm install
```

### 2. Environment Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your actual values:
   ```env
   # EmailJS Configuration (Required for contact form)
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key

   # Personal Information (Optional - customize as needed)
   VITE_PERSONAL_NAME=Your Full Name
   VITE_PERSONAL_EMAIL=your.email@example.com
   VITE_PERSONAL_PHONE=+1 234 567 8900
   VITE_PERSONAL_LOCATION=Your City, Country

   # Social Media Links (Optional)
   VITE_GITHUB_URL=https://github.com/yourusername
   VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
   ```

### 3. EmailJS Setup

To enable the contact form functionality, you need to set up EmailJS:

1. **Create an EmailJS Account**
   - Visit [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create Email Template**
   - Go to Email Templates → Create New Template
   - Use this template structure:
   ```
   Subject: New Contact from Portfolio - {{from_name}}

   Hello {{to_name}},

   You have received a new message from your portfolio website:

   Name: {{from_name}}
   Email: {{from_email}}

   Message:
   {{message}}

   Timestamp: {{timestamp}}

   Best regards,
   Portfolio Contact Form
   ```

4. **Get Your Credentials**
   - Service ID: Found in Email Services section
   - Template ID: Found in Email Templates section
   - Public Key: Found in Account → API Keys

5. **Update Environment Variables**
   - Add your actual EmailJS credentials to the `.env` file

### 4. Development

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── ProjectModal.tsx
├── data/               # Static data
│   └── portfolio.ts
├── hooks/              # Custom hooks
│   └── useTheme.ts
├── services/           # External services
│   └── emailService.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

### Personal Information
Update your personal details in the `.env` file or directly in `src/data/portfolio.ts`.

### Projects
Add your projects in `src/data/portfolio.ts` in the `projects` array.

### Experience
Update your work experience in `src/data/portfolio.ts` in the `experiences` array.

### Skills
Modify your skills and proficiency levels in `src/data/portfolio.ts` in the `skills` array.

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:
- Modifying the Tailwind configuration in `tailwind.config.js`
- Updating component styles in individual component files
- Adding custom CSS in `src/index.css`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID | Yes (for contact form) |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID | Yes (for contact form) |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key | Yes (for contact form) |
| `VITE_PERSONAL_NAME` | Your full name | No |
| `VITE_PERSONAL_EMAIL` | Your email address | No |
| `VITE_PERSONAL_PHONE` | Your phone number | No |
| `VITE_PERSONAL_LOCATION` | Your location | No |
| `VITE_GITHUB_URL` | Your GitHub profile URL | No |
| `VITE_LINKEDIN_URL` | Your LinkedIn profile URL | No |

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Contact form functionality
- **Lucide React** - Icons
- **Vite** - Build tool

## License

This project is open source and available under the [MIT License](LICENSE).
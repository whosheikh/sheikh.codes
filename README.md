# sheikh.codes

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-13+-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Personal website and portfolio of Sheikh Likhon, showcasing my work as a full-stack developer and SEO specialist based in Bangladesh.


## ✨ Features

- **Modern UI/UX**: Sleek, responsive design built with Next.js and Tailwind CSS
- **Optimized Performance**: Lighthouse score optimized for best user experience
- **Dark/Light Mode**: Seamless theme switching for user preference
- **SEO Optimized**: Structured data and meta tags for better search visibility
- **PWA Support**: Progressive Web App capabilities for mobile installation
- **Blog Platform**: Markdown support for technical articles and insights
- **Project Showcase**: Interactive portfolio of my development work
- **Contact Integration**: Direct communication channel for potential clients

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - JavaScript library for user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [MDX](https://mdxjs.com/) - Markdown for the component era
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/whosheikh/sheikh.codes.git

# Navigate to the project directory
cd sheikh.codes

# Install dependencies
npm install

# Run the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website in action.

## 🔧 Configuration

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SITE_URL=https://sheikh.codes
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
# Add other environment variables as needed
```

## 📝 Usage

### Adding a New Blog Post

Create a new markdown file in the `content/blog` directory:

```md
---
title: "Your Blog Title"
date: "2025-03-07"
excerpt: "Brief description of your blog post"
coverImage: "/images/blog/cover.jpg"
tags: ["web development", "react", "next.js"]
---

Your blog content goes here...
```

### Adding a New Project

Update the projects data file at `data/projects.ts`:

```typescript
export const projects = [
  {
    id: "project-id",
    title: "Project Name",
    description: "Project description goes here",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: "/images/projects/project-screenshot.png",
    demoUrl: "https://project-demo.com",
    githubUrl: "https://github.com/whosheikh/project-repo",
    featured: true
  },
  // Add more projects...
];
```

## 🌐 Deployment

The site can be deployed on Vercel, Netlify, or any other platform that supports Next.js:

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 💻 Repository Links

- GitHub: [github.com/whosheikh/sheikh.codes](https://github.com/whosheikh/sheikh.codes)
- GitLab: [gitlab.com/whosheikh/sheikh.codes](https://gitlab.com/whosheikh/sheikh.codes)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


Project Link: [https://sheikh.codes](https://sheikh.codes)

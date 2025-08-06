# Michael Maddison - Personal Portfolio Website

Hi, I'm Michael Maddison - a software engineer currently focusing on full-stack development, who is passionate about building impactful digital experiences. I love exploring the intersection of technology and user experience, always asking: How can we make systems that both feel frictionless and perform elegantly?

🌐 **Live Site**: [michael-maddison.com](https://michael-maddison.com)

## Technology Stack

### **Core Framework**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling with modern responsive design

### **3D Graphics & WebGL**
- **Three.js** - 3D rendering engine
- **React Three Fiber** - React integration for Three.js
- **React Three Drei**
- **GLSL Shaders** - For the background gradients

## 3D Poster Creation

I extended 3D poster frame models from [this Blender Stack Exchange post](https://blender.stackexchange.com/questions/148088/trying-to-rig-a-map), applied each project's poster image as a texture material, and exported them as optimized GLB files. These 3D models are then loaded into the website using Three.js and React Three Fiber, with added interactive behaviors like hover scaling and automatic pulsing animations.

## Background Shader System

The animated background is powered by custom GLSL shaders that I extended from [this Shadertoy creation](https://www.shadertoy.com/view/DdcfzH). The shader system creates dynamic color gradients, procedural noise, and wave distortions that adapt their color scheme based on the current page (warm colors for home, cool grays for projects).

## Development

```bash
npm install
npm run dev
npm run build
npm start
```



const particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#a35a51',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
};

export default particlesConfig;
```eof

### Your Step-by-Step Instructions

1.  **Create the `config` folder:** In the **root** of your project folder (at the same level as `components` and `pages`), create a new folder named `config`.

2.  **Create the file:** Inside the new `config` folder, create a file named exactly `particlesConfig.js`.

3.  **Add the code:** Copy the code from the file block above and paste it into your new `particlesConfig.js` file.

4.  **Push to GitHub:** You need to upload this new folder and file. Run these commands in your terminal:
    ```bash
    git add config/particlesConfig.js
    git commit -m "Add particles configuration"
    git push origin main
    ```

Once you push this commit, Vercel will automatically start a new deployment. This time, it will be able to find the `particlesConfig.js` file, and your build should complete successfully.
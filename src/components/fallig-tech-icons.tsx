/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// @refresh reset

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { techIcons } from "@/lib/tech-icons";

const FallingTechIcons = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [loadedImages, setLoadedImages] = useState<{
    [key: string]: HTMLImageElement;
  }>({});
  const [isVisible, setIsVisible] = useState(false);
  const [matterInstance, setMatterInstance] = useState<{
    engine: Matter.Engine;
    render: Matter.Render;
    runner: Matter.Runner;
    positionLog: NodeJS.Timeout;
  } | null>(null);

  useEffect(() => {
    const imagePromises = techIcons.map((icon) => {
      const img = new Image();
      img.src = icon.src;
      return new Promise((resolve, reject) => {
        img.onload = () => resolve({ name: icon.name, image: img });
        img.onerror = () => reject(new Error(`Failed to load ${icon.src}`));
      });
    });

    Promise.all(imagePromises)
      .then((images) => {
        const typedImages = images as {
          name: string;
          image: HTMLImageElement;
        }[];
        const loaded: { [key: string]: HTMLImageElement } = {};
        typedImages.forEach(({ name, image }) => {
          loaded[name] = image;
          console.log(`${name} loaded: ${image.width}x${image.height}`);
        });
        setLoadedImages(loaded);
      })
      .catch((error) => console.error("Image loading error:", error));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && Object.keys(loadedImages).length === techIcons.length) {
      const setupMatter = () => {
        if (!canvasRef.current || !containerRef.current) {
          console.error("Canvas or container reference is null");
          return;
        }

        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const Runner = Matter.Runner;

        // Get parent dimensions dynamically
        const parent = containerRef.current as HTMLDivElement;
        const parentWidth = parent.clientWidth;
        const parentHeight = (parent.querySelector("div") as HTMLDivElement)
          .clientHeight;

        const engine = Engine.create();
        engine.gravity.scale = 0.001;

        const world = engine.world;

        const render = Render.create({
          canvas: canvasRef.current,
          engine: engine,
          options: {
            width: parentWidth, // Match parent width
            height: parentHeight, // Match parent height
            wireframes: false,
            background: "#fff",
            pixelRatio: window.devicePixelRatio || 1,
          },
        });

        const icons = techIcons
          .map((icon) => {
            const image = loadedImages[icon.name];
            if (!image) {
              console.error(
                `Image for ${icon.name} not loaded, src: ${icon.src}`
              );
              return null;
            }

            return Bodies.rectangle(
              Math.random() * (parentWidth - 50) + 25, // Adjust for body size
              -50 - Math.random() * 50,
              50,
              50,
              {
                restitution: 0.3,
                friction: 0.5,
                render: {
                  sprite: {
                    texture: image.src,
                    xScale: 1,
                    yScale: 1,
                  },
                },
              }
            );
          })
          .filter(Boolean);

        const ground = Bodies.rectangle(
          parentWidth / 2,
          parentHeight,
          parentWidth + 10, // Slightly wider than canvas
          0.00000000000000000001,
          {
            isStatic: true,
            render: { fillStyle: "green" },
          }
        );
        const leftWall = Bodies.rectangle(
          0,
          parentHeight / 2,
          0.01,
          parentHeight * 2,
          {
            isStatic: true,
            render: { fillStyle: "green" },
          }
        );
        const rightWall = Bodies.rectangle(
          parentWidth,
          parentHeight / 2,
          0.01,
          parentHeight * 2,
          {
            isStatic: true,
            render: { fillStyle: "green" },
          }
        );

        World.add(
          world,
          icons.filter((icon): icon is Matter.Body => icon !== null)
        );
        World.add(world, [ground, leftWall, rightWall]);

        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);

        const positionLog = setInterval(() => {
          icons.forEach((icon, i) => {
            console.log(`Icon ${i + 1} position:`, icon?.position);
          });
        }, 10000);

        const instance = { engine, render, runner, positionLog };
        setMatterInstance(instance);

        return () => {
          if (instance.runner) Runner.stop(instance.runner);
          Render.stop(instance.render);
          World.clear(instance.engine.world, false);
          Engine.clear(instance.engine);
          if (instance.positionLog) clearInterval(instance.positionLog);
          instance.render.canvas.remove();
          instance.render.canvas = null as unknown as HTMLCanvasElement;
          instance.render.context = null as unknown as CanvasRenderingContext2D;
          instance.render.textures = {};
        };
      };

      const cleanup = setupMatter();
      return cleanup;
    }
  }, [isVisible, loadedImages]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%", // Full width of parent
        height: "fit-content",
        overflow: "hidden",
        borderRadius: "0 0 22px 22px",
        backgroundColor: "#fff",
      }}>
      <div
        style={{
          position: "relative",
          width: "100%", // Match container width
          height: "290px", // Set explicitly or adjust to parent needs
          borderRadius: "0 0 10px 0px",
        }}>
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%", // Full width of inner div
            height: "100%", // Full height of inner div
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

export default FallingTechIcons;

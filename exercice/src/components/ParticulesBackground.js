import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadLinksPreset } from "tsparticles-preset-links";
import { linksParticules } from "../data/particlesBackgroundConfig";

const ParticlesBackground = () => {
  const containerRef = React.useRef(null);

  const particlesLoaded = useCallback(async (container) => {
    containerRef.current = container;
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
    await engine.addPreset("custom", linksParticules);
  }, []);

  return (
    <Particles
      id="particules-js"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: "custom",
      }}
    />
  );
};

export default ParticlesBackground;

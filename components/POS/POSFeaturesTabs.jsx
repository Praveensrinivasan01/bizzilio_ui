"use client";
import { useEffect } from "react";

const POSFeaturesTabs = () => {
  const features = [
    "catalogue",
    "billing",
    "inventory",
    "payments",
    "hardware",
    "ecommerce",
    "procurement",
    "applications",
    "support",
  ];

  useEffect(() => {
    const buttons = document.querySelectorAll(".posFeaturesListTab ul button");
    const sections = document.querySelectorAll("[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            if (features.includes(id)) {
              buttons.forEach((btn) => {
                btn.classList.remove("active");
              });

              const targetButton = document.querySelector(
                `.posFeaturesListTab ul button.${id}`
              );
              if (targetButton) {
                targetButton.classList.add("active");
              }
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    features.forEach((featureId) => {
      const section = document.getElementById(featureId);
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [features]);

  useEffect(() => {
    const handleScroll = () => {
      const buttons = document.querySelectorAll(
        ".posFeaturesListTab ul button"
      );
      let activeSection = "";

      features.forEach((featureId) => {
        const section = document.getElementById(featureId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;

          if (
            sectionTop <= window.innerHeight / 2 &&
            sectionTop + sectionHeight > window.innerHeight / 2
          ) {
            activeSection = featureId;
          }
        }
      });

      if (activeSection) {
        buttons.forEach((btn) => {
          if (btn.classList.contains(activeSection)) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      }
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [features]);

  useEffect(() => {
    const buttons = document.querySelectorAll(".posFeaturesListTab ul button");

    const handleMenuClick = (e) => {
      e.preventDefault();

      const feature = Array.from(e.target.classList).find((cls) =>
        features.includes(cls)
      );

      if (feature) {
        const targetSection = document.getElementById(feature);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          buttons.forEach((btn) => btn.classList.remove("active"));
          e.target.classList.add("active");
        }
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", handleMenuClick);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleMenuClick);
      });
    };
  }, [features]);

  return (
    <div className="posFeaturesListTab">
      <select className="posFeaturesSelect">
        {features.map((feature) => (
          <option key={feature}>{feature}</option>
        ))}
      </select>

      <ul>
        {features.map((feature) => (
          <li key={feature}>
            <button
              className={
                feature === "catalogue" ? `${feature} active` : feature
              }
            >
              {feature}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default POSFeaturesTabs;

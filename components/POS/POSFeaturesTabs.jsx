"use client";
import { useEffect } from "react";

const POSFeaturesTabs = () => {
  const features = [
    "Catalogue",
    "Billing",
    "Inventory",
    "Payments",
    "Hardware",
    "Ecommerce",
    "Procurement",
    "Applications",
    "Support",
  ];

  // Handle UL button clicks
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

  // Handle <select> change + sync both select + ul on scroll
  useEffect(() => {
    const select = document.querySelector(".posFeaturesSelect");
    const buttons = document.querySelectorAll(".posFeaturesListTab ul button");

    const handleSelectChange = (e) => {
      const feature = e.target.value;
      const targetSection = document.getElementById(feature);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (select) {
      select.addEventListener("change", handleSelectChange);
    }

    // const handleScroll = () => {
    //   let activeSection = "";

    //   features.forEach((featureId) => {
    //     const section = document.getElementById(featureId);
    //     if (section) {
    //       const rect = section.getBoundingClientRect();
    //       if (
    //         rect.top <= window.innerHeight / 2 &&
    //         rect.bottom >= window.innerHeight / 2
    //       ) {
    //         activeSection = featureId;
    //       }
    //     }
    //   });

    //   if (activeSection) {
    //     // update select
    //     if (select) {
    //       select.value = activeSection;
    //     }

    //     // update ul buttons
    //     buttons.forEach((btn) => {
    //       if (btn.classList.contains(activeSection)) {
    //         btn.classList.add("active");
    //       } else {
    //         btn.classList.remove("active");
    //       }
    //     });
    //   }
    // };

    const handleScroll = () => {
  let activeSection = "";

  const offset = 100; // 👈 your custom offset

  features.forEach((featureId) => {
    const section = document.getElementById(featureId);
    if (section) {
      const rect = section.getBoundingClientRect();
      const checkPoint = window.innerHeight / 2 - offset; // 👈 shifted up

      if (rect.top <= checkPoint && rect.bottom >= checkPoint) {
        activeSection = featureId;
      }
    }
  });

  if (activeSection) {
    // update select
    if (select) {
      select.value = activeSection;
    }

    // update ul buttons
    buttons.forEach((btn) => {
      if (btn.classList.contains(activeSection)) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }
};


    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load

    return () => {
      if (select) {
        select.removeEventListener("change", handleSelectChange);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [features]);

  return (
    <div className="posFeaturesListTab">
      <select className="posFeaturesSelect">
        {features.map((feature) => (
          <option key={feature} value={feature}>
            {feature}
          </option>
        ))}
      </select>

      <ul>
        {features.map((feature) => (
          <li key={feature}>
            <button
              className={
                feature === "Catalogue" ? `${feature} active` : feature
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

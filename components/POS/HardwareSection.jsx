import HardwareSlider from "../HardwareSlider";

const HardwareSection = () => {
  return (
    <section className="hardwareSec" id="hardware">
      <div className="container-fluid">
        <div className="sectionheader">
          <h2 className="textalign_center" style={{ color: "#fff" }}>
            Plug and play with almost any POS hardware.
          </h2>
        </div>

        <HardwareSlider />
      </div>
    </section>
  );
};

export default HardwareSection;

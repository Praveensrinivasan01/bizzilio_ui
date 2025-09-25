import Link from "next/link";

const StartTrialSection = () => {
  return (
    <section className="startYourfreetrial_sec" id="Trial">
      <div className="container">
        <div className="sectionheader">
          <h2 className="textalign_center">Proudly Made In Chennai</h2>
        </div>
        <div className="startYourfreetrialFrame">
          <h2>Start your free trial for 30 days</h2>
          <h4>
            Take your business online with bizzilo,{" "}
            <br className="brHideOnMobile" /> start your free trial now
          </h4>
          <Link
            target="_blank"
            className="bigSizeWhitebtn"
            href="https://www.go-omnic.com/app/auth/sign-up"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartTrialSection;

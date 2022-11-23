import "./AnalyticsDashboard.css";
import badass_bui from "./badass_bui.jpg";
import bui_do_it_to_em from "./bui_do_it_to_em.png";
import concerned_ramzi from "./concerned_ramzi.png";
import gus_mug_shot from "./gus_mug_shot.jpg";
import matthias from "./matthias.jpg";
import unimpressed_bui from "./unimpressed_bui.png";
import Header from "../Header/Header";

const AnalyticsDashboard = () => {
  return (
    <div className="dash-container">
      <h1>Here's our analytics bro</h1>
      <Header />
      <div className="sub-container">
        <img src={badass_bui} />
        <img src={bui_do_it_to_em} />
        <img src={concerned_ramzi} />
        <img src={gus_mug_shot} />
        <img src={matthias} />
        <img src={unimpressed_bui} />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

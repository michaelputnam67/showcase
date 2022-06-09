import "./form.scss";
import React from "react";

export default function Form({
  styles,
  setCurrentStyle,
  currentStyle,
  name,
  setName,
  episodes,
  setCurrentEpisode,
  currentEpisode,
}) {
  const hairStyleOptions = styles.map((style) => (
    <option key={Math.random() * 100} value={style}>
      {style}
    </option>
  ));

  const seasonAndEpisodeOptions = () => {
    let seasons = episodes.reduce((seasons, episode) => {
      if (!seasons.includes(episode.season)) {
        seasons.push(episode.season);
        return seasons;
      }
      return seasons;
    }, []);

    const seasonEpisodes = (season) => {
      return episodes
        .filter((episode) => episode.season === season)
        .map((episode) => (
          <option
            value={episode.name}
            key={Math.random() * 100}
            name={episode.name}
          >
            {episode.name}
          </option>
        ));
    };

    const output = seasons.map((season) => {
      return (
        <optgroup key={season} label={`Season ${season}`}>
          {seasonEpisodes(season)}
        </optgroup>
      );
    });

    return output;
  };

  return (
    <form>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        name="name"
      ></input>
      <input placeholder="age" type="text" name="age"></input>
      <select
        value={currentEpisode ? currentEpisode : ""}
        placeholder="First Episode Apeared"
        type="text"
        name="first episode"
        onChange={(e) => setCurrentEpisode(e.target.value)}
      >
        {seasonAndEpisodeOptions()}
        <option value="" >
          Episode First Appeared
        </option>
      </select>
      <input type="text" name="voiced by" placeholder="Voice By"></input>
      <input type="text" placeholder="occupation" name="occupation"></input>
      <select
        value={currentStyle ? currentStyle : ""}
        size="multiple"
        name="hair styles"
        onChange={(e) => setCurrentStyle(e.target.value)}
      >
        <option value="">
          Hair Styles
        </option>
        {hairStyleOptions}
      </select>
    </form>
  );
}
